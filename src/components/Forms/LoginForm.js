import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import swal from "sweetalert";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, CustomRouterLink, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput
} from '../../assets/styles/FormCss';
import { apiAuth } from '../../utils/config';


const LoginForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
            .min(5, ({ min }) => `Password must be atleast ${min} characters`)
            .max(8, ({ max }) => `Password must be atleast ${max} characters`),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const loginForm = (data) => {
        setLoading(true);
        const userInfo = {
            accountNo: data.accountNumber,
            password: data.passcode,
        };

        apiAuth.post("/login", userInfo).then((res) => {
            console.log("Login form checker", res.data)
            if(res.data.status ===  false){
                console.log(res.data.message ? res.data.message : "")
            } else {
                localStorage.setItem("b_token", res.data.result.jwt);
                 localStorage.setItem("b_user", JSON.stringify(res.data.result));
                 setTimeout(() => {
                    navigate("/dashboard");
                    swal("Success", "You have successfully logged in", "success");-
                  }, 1000)
                console.log("JWT token checker", res.data.result.jwt);
                console.log("Payload checker", res.data.result);
            }
        });
        console.log("Tracking Login Info", userInfo);
        setLoading(false);
        reset();
    };



    return (
        <>
            <ContentForm onSubmit={handleSubmit(loginForm)}>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput name='accountNumber' type="text" placeholder="User ID/Account Number" maxLength={10} {...register("accountNumber")} />
                        {errors.accountNumber && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.accountNumber.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput name='passcode' type="password" placeholder="Password" maxLength={8} {...register("passcode")} />
                        {errors.passcode && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.passcode.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="flex-end" width="100%">
                            <CustomRouterLink to='/auth/forget-password' fontWeight="400" fontSize="12.5px" lineHeight="16px" color='#f7f7f7' textDecoration="none" margin="0 0 1rem" textAlign="right">Forgot Password?</CustomRouterLink>
                        </CustomDiv>
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                            <DefaultButton>Login</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="column" justifyContent="flex-end" width="100%">
                            <GeneralSmText fontWeight="400" fontSize="15px" lineHeight="25px" color="#F7F7F7" textTransform="unset" opacity="0.8" textAlign="center" margin="1rem 0">Don’t have internet banking?
                                <CustomRouterLink to='/auth/register' fontWeight="400" fontSize="15px" lineHeight="25px" color="#FC7620" textDecoration="none" margin="0 0.3rem">Sign Up</CustomRouterLink>
                            </GeneralSmText>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default LoginForm