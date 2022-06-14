import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { toast } from 'react-toastify';
import { ContentRow, ContentFullColumn, CustomDiv, GeneralMdText, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput
} from '../../assets/styles/FormCss';
import { AuthTopContainer } from '../../assets/styles/AuthCss';

const UpdatePasswordForm = () => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object().shape({
        currentPass: yup
            .string()
            .trim()
            .required("Kindly provide your active password!")
            .min(6, ({ min }) => `Password must be atleast ${min} characters`)
            .max(6, ({ max }) => `Password must be atleast ${max} characters`),

            newPass: yup
            .string()
            .trim()
            .required("Kindly provide your new password!")
            .min(6, ({ min }) => `Password must be atleast ${min} characters`)
            .max(6, ({ max }) => `Password must be atleast ${max} characters`),
            
            confirmPass: yup
            .string()
            .trim()
            .required("Kindly confirm your new passcode!")
            .min(6, ({ min }) => `Password must be atleast ${min} characters`)
            .max(6, ({ max }) => `Password must be atleast ${max} characters`)
            .oneOf([yup.ref('newPass'), null], 'Passcode must match'),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const changePasswordForm = (data) => {
        setLoading(true);
        const userInfo = {
            currentPass: data.currentPass,
            newPass: data.newPass,
            confirmPass: data.confirmPass,
        };

        console.log("Tracking Update pass Info", userInfo);
        setLoading(false);
        reset();
    };

    return (
        <>
            <ContentForm onSubmit={handleSubmit(changePasswordForm)}>
                <AuthTopContainer>
                    <CustomDiv display="flex" flexDirection="column">
                        <GeneralMdText fontWeight="700" fontSize="22px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="center">Udpate Password</GeneralMdText>
                    </CustomDiv>
                </AuthTopContainer>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>Current Password</FormLabel>
                        <FormInput name='currentPass' type="password" placeholder="" {...register("currentPass")}  maxLength={6} />
                        {errors.currentPass && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.currentPass.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>New Password</FormLabel>
                        <FormInput name='newPass' type="password" placeholder="" {...register("newPass")} maxLength={6} />
                        {errors.newPass && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.newPass.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormInput name='confirmPass' type="password" placeholder="" {...register("confirmPass")} maxLength={6} />
                        {errors.confirmPass && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.confirmPass.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%" margin="1rem 0 0">
                            <DefaultButton>{loading ? "Loading" : "Login"}</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default UpdatePasswordForm