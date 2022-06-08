import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import swal from "sweetalert";
import { apiOperation } from '../../utils/config';

import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormLabel
} from '../../assets/styles/FormCss';

const MobileBankingForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [token, setToken] = useState('');

    const validationSchema = yup.object().shape({
        accountNumber: yup
            .string()
            .trim()
            .required("Kindly provide a valid email address!")
            .min(10, ({ min }) => `Password must be atleast ${min} characters`)
            .max(10, ({ max }) => `Password must be atleast ${max} characters`),
        passcode: yup
            .string()
            .trim()
            .required("Kindly provide a your unique password!")
            .min(6, ({ min }) => `Password must be atleast ${min} characters`)
            .max(6, ({ max }) => `Password must be atleast ${max} characters`),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const stepOneForm = (data) => {
            setLoading(true);

        const userInfo = {
            accountNo: data.accountNumber,
            passcode: data.passcode,
        };

        apiOperation.post("/account/activate-int-banking", userInfo).then((res) => {
            console.log("Step one form checker", res.data)
            if(res.data.success === false){
                 swal("Error", res.data.message, "error");
                console.log(res.data.message ? res.data.message : "")
            } else {
                console.log("step one former result", res.data.message ? res.data.message : "")
                 swal("Success", res.data.message, "success");
            }
        });
        console.log("Tracking step one Info", userInfo);
        setLoading(false);
        reset();
    };

    const stepTwoForm = (data) => {
        setLoading(true);
    const userInfo = {
        accountNo: data.accountNumber,
        passcode: data.passcode,
        otp: data.otp,
    };

    apiOperation.post(`/account/activate-int-banking/${token}`, userInfo).then((res) => {
        console.log("Step two form checker", res.data)
        if(res.data.success === false){
            console.log(res.data.message ? res.data.message : "")
        } else {
            setTimeout(() => {
                navigate("/");
              }, 1000)
              swal("Success", res.data.message, "success");
            console.log("step two form result", res.data.message ? res.data.message : "")
        }
    });
    console.log("Tracking step two form Info", userInfo);
    setLoading(false);
    reset();
};


    return (
        <>
            <ContentForm onSubmit={handleSubmit(stepTwo ? stepTwoForm : stepOneForm)}>
                <ContentRow>
                <ContentFullColumn>
                        <FormInput name='accountNumber' type="text" placeholder="Account Number" maxLength={10} {...register("accountNumber")} />
                        {errors.accountNumber && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.accountNumber.message}
                         </GeneralSmText>
                         )}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput name='passcode' type="password" placeholder="Card PIN/Secure Passcode" maxLength={6} {...register("passcode")} />
                        {errors.passcode && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.passcode.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>

                   {stepTwo  && (
                        <ContentFullColumn>
                        <FormLabel>OTP</FormLabel>
                            <FormInput name='otp' type="text" placeholder="Card PIN/Secure Passcode" {...register("otp")}  />
                            {errors.otp && (
                                 <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.otp.message}
                             </GeneralSmText>)}
                        </ContentFullColumn>
                   )}
                    
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                            <DefaultButton>{loading ? "Loading...." : "Continue"}</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default MobileBankingForm;