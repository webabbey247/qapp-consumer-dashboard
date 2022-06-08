import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import swal from "sweetalert";
import { ContentRow, ContentFullColumn, CustomDiv, GeneralMdText, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput
} from '../../assets/styles/FormCss';
import { AuthTopContainer } from '../../assets/styles/AuthCss';

const UpdateQAForm = () => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object().shape({
        currentPin: yup
            .string()
            .trim()
            .required("Kindly provide your active Pin!")
            .min(6, ({ min }) => `Transaction Pin must be atleast ${min} characters`)
            .max(6, ({ max }) => `Transaction Pin must be atleast ${max} characters`),

            newPin: yup
            .string()
            .trim()
            .required("Kindly provide your new pin!")
            .min(6, ({ min }) => `Transaction Pin must be atleast ${min} characters`)
            .max(6, ({ max }) => `Transaction Pin must be atleast ${max} characters`),
            
            confirmPin: yup
            .string()
            .trim()
            .required("Kindly confirm your new pin!")
            .min(6, ({ min }) => `Transaction Pin must be atleast ${min} characters`)
            .max(6, ({ max }) => `Transaction Pin must be atleast ${max} characters`)
            .oneOf([yup.ref('newPin'), null], 'Transaction Pin must match'),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const updatePinForm = (data) => {
        setLoading(true);
        const userInfo = {
            currentPin: data.currentPin,
            newPin: data.newPin,
            confirmPin: data.confirmPin,
        };

        console.log("Tracking Update pin Info", userInfo);
        setLoading(false);
        reset();
    };

    return (
        <>
            <ContentForm onSubmit={handleSubmit(updatePinForm)}>
                <AuthTopContainer>
                    <CustomDiv display="flex" flexDirection="column">
                        <GeneralMdText fontWeight="700" fontSize="22px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="center">Udpate Security &amp; Answers</GeneralMdText>
                    </CustomDiv>
                </AuthTopContainer>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>New Secret Question</FormLabel>
                        <FormInput name='currentPin' type="password" placeholder="" {...register("currentPin")}  maxLength={6} />
                        {errors.currentPin && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.currentPin.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>New Secret Answer</FormLabel>
                        <FormInput name='newPin' type="password" placeholder="" {...register("newPin")} maxLength={6} />
                        {errors.newPin && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.newPin.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>New Secret Question</FormLabel>
                        <FormInput name='confirmPin' type="password" placeholder="" {...register("confirmPin")} maxLength={6} />
                        {errors.confirmPin && (
                             <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                            {errors.confirmPin.message}
                         </GeneralSmText>)}
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%" margin="1rem 0 0">
                            <DefaultButton>{loading ? "Loading" : "Save Questions"}</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default UpdateQAForm