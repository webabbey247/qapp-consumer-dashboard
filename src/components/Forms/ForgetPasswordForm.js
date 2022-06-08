import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import swal from "sweetalert";
import { apiOperation, apiAuth } from '../../utils/config';

import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormLabel
} from '../../assets/styles/FormCss';

const ForgetPasswordForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [token, setToken] = useState('');

    const validationSchema = yup.object().shape({
        accountNumber: yup
            .string()
            .trim()
            .required("Kindly provide a valid account number!")
            .min(10, ({ min }) => `Password must be atleast ${min} characters`)
            .max(10, ({ max }) => `Password must be atleast ${max} characters`),
        passcode: yup
            .string()
            .trim()
            .required("Kindly provide your unique passcode!")
            .min(5, ({ min }) => `Password must be atleast ${min} characters`)
            .max(8, ({ max }) => `Password must be atleast ${max} characters`),
    });

    const validationTwoSchema = yup.object().shape({
        accountNumber: yup
            .string()
            .trim()
            .required("Kindly provide a valid account number!")
            .min(10, ({ min }) => `Password must be atleast ${min} characters`)
            .max(10, ({ max }) => `Password must be atleast ${max} characters`),
        passcode: yup
            .string()
            .trim()
            .required("Kindly provide your unique passcode!")
            .min(5, ({ min }) => `Password must be atleast ${min} characters`)
            .max(8, ({ max }) => `Password must be atleast ${max} characters`),
        otp: yup
            .string()
            .trim()
            .required("Kindly provide the OTP sent to your email address!")
            .min(6, ({ min }) => `Password must be atleast ${min} characters`)
            .max(6, ({ max }) => `Password must be atleast ${max} characters`),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(stepTwo ? validationTwoSchema : validationSchema),
    });

    const { errors } = formState;

    const stepOneForm = (data) => {
        setLoading(true);

        const userInfo = {
            account_no: data.accountNumber,
            passcode: data.passcode,
            otp_code: data.otp
        };

        apiAuth.post("/password/forgot-password", userInfo).then((res) => {
            console.log("Forget password form checker", res.data)
            if (res.data.success === false) {
                swal("Error", res.data.message, "error");
                console.log(res.data.message ? res.data.message : "")
            } else {
                if (stepTwo) {
                    console.log("step two form result", res.data.message ? res.data.message : "")
                    // swal("Success", res.data.message, "success");
                } else {
                    setStepTwo(true)
                    swal("Success", res.data.message, "success");
                    console.log("step one form result", res.data.message ? res.data.message : "")
                }
            }
        });
        setLoading(false);
        reset();
    };

    return (
        <>
            <ContentForm onSubmit={handleSubmit(stepOneForm)}>
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

                    {stepTwo && (
                        <ContentFullColumn>
                            <FormLabel>OTP</FormLabel>
                            <FormInput name='otp' type="text" placeholder="Card PIN/Secure Passcode" {...register("otp")} />
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
export default ForgetPasswordForm;