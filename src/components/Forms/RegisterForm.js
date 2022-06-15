import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'react-toastify';
import {CgChevronDownR} from "react-icons/cg";
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText, CustomRouterLink } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    DialingCodeInputWrapper,
    DialingCodeInput,
    CountryFlag,
    CountryCode,
    DialingCodeModalWrapper,
    DialingCodeModalList,
    DialingCodeModalListWrapper,
    DialingCodeModalListIcon,
    DialingCodeModalListName,
} from '../../assets/styles/FormCss';
// import { FlagContainer, FlagImg } from '../../assets/styles/AuthCss';
// import { dummyFlag } from "../../assets";
import { apiOperation } from '../../utils/config';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [areaCode, setAreaCode] = useState([]);
    const [selectedAreaCode, setSelectedAreaCode] = useState("");
    const [modalVisbile, setModalVisible] = useState(false);

    React.useEffect(() => {
        fetch("https://restcountries.com/v3/all")
          .then((response) => response.json())
          .then((data) => {
            const areaCodeData = data.map((item) => {
              return {
                code: item.cca2,
                name: item.name.common,
                flag: item.flags[1],
                dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(""),
              };
            });
    
            setAreaCode(areaCodeData);
            if (areaCodeData.length > 0) {
              let defaultAreaData = areaCodeData.filter((a) => a.code === "NG");
              if (defaultAreaData.length > 0) {
                setSelectedAreaCode(defaultAreaData[0]);
              }
            }
          })
          .catch((err) => {
            console.error("Request failed", err);
          });
      }, []);

    const validationSchema = yup.object().shape({
            firstName: yup
            .string()
            .required("Kindly provide your first name!"),

            lastName: yup
            .string()
            .required("Kindly provide your last name!"),

            emailAddress: yup
            .string()
            .required("Kindly provide a valid email address!")
            .email("Kindly provide a valid email address!"),

            mobileNumber: yup
            .string()
            .required("Kindly provide a valid mobile number!"),

            homeAddress: yup
            .string()
            .required("Kindly provide a valid home address!")
    });


    const {register, handleSubmit, reset, formState} = useForm({
        resolver: yupResolver(validationSchema),
      });
    
      const {errors} = formState;

      const RegisterForm = (data) => {
        setLoading(true);

        const formData = {
            registerPersonalRequest: {
                firstName: data.firstName,
                lastName: data.lastName,
                phone: [selectedAreaCode.dialCode, +(data.mobileNumber)].join(''),
                email: data.emailAddress,
                address: data.homeAddress,
              },
              registerAccountRequest: {
                account_name: [data.firstName, data.lastName].join(' '),
                currency: "NGN",
                branch_code: "100"
              }
        };

        apiOperation.post("/account/create", formData).then((res) => {
            // console.log("Register form checker", res.data)
            if(res.data.success ===  false){
              toast.error(res.data.message ? res.data.message : "");
                console.log(res.data.message ? res.data.message : "")
            } else {
              console.log("register response", res.data);
              // toast.success(res.data.message ? res.data.message : "");
              //    setTimeout(() => {
              //       navigate("/");
              //     }, 500)
            }
        });
        setLoading(false);
        reset();
    };

    return (
        <>
        
            <ContentForm onSubmit={handleSubmit(RegisterForm)}>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput name="firstName" type="text" placeholder="First Name" {...register("firstName")} />
                        {errors.firstName && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.firstName.message}
                         </GeneralSmText>
                         )}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput name="lastName" type="text" placeholder="Last Name" {...register("lastName")} />
                        {errors.lastName && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.lastName.message}
                         </GeneralSmText>
                         )}
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <CustomDiv display="flex" justifyContent="flex-start" flexDirection="row" >
                            <CustomDiv maxWidth="20%" flex="0 0 20%" onClick={() => setModalVisible(!modalVisbile)}>
                            <DialingCodeInputWrapper>
              <DialingCodeInput onClick={() => setModalVisible(!modalVisbile)}>
                <CountryFlag
                  src={selectedAreaCode?.flag}
                  alt={selectedAreaCode?.dialCode}></CountryFlag>
                <CountryCode>
                  <CgChevronDownR color='#ffffff' size='20px' />
                </CountryCode>
              </DialingCodeInput>
              </DialingCodeInputWrapper>
              {modalVisbile ? (
              <DialingCodeModalWrapper>
                {areaCode.map((item, i) => (
                  <DialingCodeModalList id={item.id}>
                    <DialingCodeModalListWrapper
                      key={item.i}
                      onClick={() => {
                        setSelectedAreaCode(item);
                        setModalVisible(false);
                      }}
                    >
                      <DialingCodeModalListIcon
                        src={item.flag}
                        alt={item.dialCode}
                      ></DialingCodeModalListIcon>
                      <DialingCodeModalListName>
                        {item.dialCode}
                      </DialingCodeModalListName>
                    </DialingCodeModalListWrapper>
                  </DialingCodeModalList>
                ))}
              </DialingCodeModalWrapper>
            ) : (
              ""
            )}
                               
                            </CustomDiv>

                            <CustomDiv maxWidth="80%" flex="0 0 80%">
                                <FormInput  name='mobileNumber' type="text" placeholder="Mobile Number" {...register("mobileNumber")} style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }} />
                            </CustomDiv>

                        </CustomDiv>
                        {errors.mobileNumber && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.mobileNumber.message}
                         </GeneralSmText>
                         )}
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <FormInput name='emailAddress' type="text" placeholder="Email Address" {...register("emailAddress")} />
                        {errors.emailAddress && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.emailAddress.message}
                         </GeneralSmText>
                         )}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput name='homeAddress' type="text" placeholder="Home Address" {...register("homeAddress")} />
                        {errors.homeAddress && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.homeAddress.message}
                         </GeneralSmText>
                         )}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                            <DefaultButton>{loading ? "loading" : "Continue"}</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>

                    <ContentFullColumn>
                    <CustomDiv display="flex" flexDirection="column" justifyContent="flex-end" width="100%">
                    <GeneralSmText fontWeight="400" fontSize="15px" lineHeight="25px" color="#F7F7F7" textTransform="unset" opacity="0.8" textAlign="center" margin="1rem 0">Already have an account? 
                    <CustomRouterLink to='/' fontWeight="400" fontSize="15px" lineHeight="25px" color="#FC7620" textDecoration="none" margin="0 0.3rem">Sign In</CustomRouterLink>
                    </GeneralSmText>  
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default RegisterForm;