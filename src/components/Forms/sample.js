import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, CustomRouterLink, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput
} from '../../assets/styles/FormCss';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, reset } from '../../features/auth/authSlice';


const LoginForm = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    // const { loginInfo, isError, isSuccess } = useSelector(
    //     (state) => state.auth
    //   );

      React.useEffect(() => {
        // if (isError) {
        //     console.log(loginInfo.message ? loginInfo.message : "This isError message is null");
        //   }

        //   if (isSuccess) {
        //     // localStorage.setItem("b_token", loginInfo.result.token);
        //     // localStorage.setItem("b_user", loginInfo.result);
        //     console.log(loginInfo.message ? loginInfo.message : "This isSuccess message is null");
        //   }
      
      });
    

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
        //   .min(6, "Password must be at least 6 characters!"),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const loginForm = (data) => {
        const userInfo = {
            accountNo: data.accountNumber,
            password: data.passcode,
        };
        console.log("Tracking Login Info", userInfo);
        // dispatch(login(userInfo));

        // reset();
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
                        <FormInput name='passcode' type="pqassword" placeholder="Password" maxLength={6} {...register("passcode")} />
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
