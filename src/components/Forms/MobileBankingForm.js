import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'react-feather';
import { apiOperationNoToken } from '../../utils/config';
import { isEmpty } from 'lodash';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormInputIcon,
    FormLabel
} from '../../assets/styles/FormCss';

const MobileBankingForm = () => {
    const navigate = useNavigate();
    const { token } = useParams();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);

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


    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const stepOneForm = (data) => {
        setLoading(true);

        const userInfo = {
            account_no: data.accountNumber,
            pass_code: data.passcode,
            otp_code: "",
        };

        console.log("form req", userInfo)

        if (token === "" || token === undefined || token === null) {
            apiOperationNoToken.post("/account/activate-int-banking", userInfo).then((res) => {
                console.log("Enrol for banking without token", res.data)
                if (stepTwo) {
                    if (res.data.success === false) {
                        toast.error(res.data.message ? res.data.message : "");
                    } else {
                        setStepTwo(true)
                        setTimeout(() => {
                            navigate(`/auth/activate-online-banking/${res.data.result.token}`);
                        }, 500)
                    }
                }
        });
    }
        else {
            apiOperationNoToken.post(`/account/activate-int-banking/${token}`, userInfo).then((res) => {
                console.log("Enrol for banking with token", res.data)
                if (res.data.success === false) {
                    toast.error(res.data.message ? res.data.message : "");
                    console.log(res.data.message ? res.data.message : "")
                } else {
                    setTimeout(() => {
                        toast.success(res.data.message ? res.data.message : "");
                        // console.log("step two form result", res.data)
                        navigate("/");
                    }, 500)
                }
            });

        }

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
                        <FormInput name="passcode" type={showPassword ? "text" : "password"} placeholder="Passcode" {...register("passcode")} maxLength={6} />
                        <FormInputIcon onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Eye fontSize="10px" color='#FC7620' /> : <EyeOff fontSize="10px" color='#1A4153' />}
                        </FormInputIcon>
                        {errors.passcode && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.passcode.message}
                            </GeneralSmText>
                        )}
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
export default MobileBankingForm;