import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import swal from "sweetalert";
import { Eye, EyeOff } from 'react-feather';
import { apiAuth } from '../../utils/config';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormInputIcon
} from '../../assets/styles/FormCss';

const NewPasswordForm = () => {
    const {token} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

    const resetData = JSON.parse(localStorage.getItem("resetPassDump"));

    const validationSchema = yup.object().shape({
        password: yup.string()
            .trim()
            .required("kindly provide your secured passcode!")
            .min(6, ({ min }) => `Passcode must be atleast ${min} characters!`)
            .max(8, ({ max }) => `Passcode must be atleast ${max} characters!`),

        confirmPassword: yup.string()
            .trim()
            .required("kindly provide your secured passcode!")
            .min(6, ({ min }) => `Passcode must be atleast ${min} characters!`)
            .max(8, ({ max }) => `Passcode must be atleast ${max} characters!`)
            .oneOf([yup.ref('password'), null], 'Passcode must match'),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const newPassForm = (data) => {
        setLoading(true);

        const userInfo = {
            account_no: resetData.account_no,
            passcode: resetData.passcode,
            password: data.password,
            confirm_password: data.confirmPassword,
            is_confirm_password: true
        };

        apiAuth.post(`/password/reset-password/${token}`, userInfo).then((res) => {
            // console.log("new password form checker", res.data)
           if (res.data.success === false) {
                swal("Error", res.data.message, "error");
                console.log(res.data.message ? res.data.message : "")
            } else {
                    swal("Success", res.data.message, "success");
                    localStorage.removeItem("resetPassDump")
                    navigate('/');
            }
        });
        setLoading(false);
        reset();
    };





        return (
            <>
                <ContentForm onSubmit={(handleSubmit(newPassForm))}>
                    <ContentRow>
                        <ContentFullColumn>
                            <FormInput name="password" type={showPassword ? "text" : "password"} placeholder="New Password" {...register("password")} maxLength={8} />
                            <FormInputIcon onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ?  <Eye fontSize="10px" color='#FC7620' /> :   <EyeOff fontSize="10px" color='#1A4153' />}
                                </FormInputIcon>
                            {errors.password && (
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                    {errors.password.message}
                                </GeneralSmText>
                            )}
                        </ContentFullColumn>

                        <ContentFullColumn>
                            <FormInput name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" {...register("confirmPassword")} maxLength={8} />
                            <FormInputIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ?  <Eye fontSize="20px" color='#FC7620' /> :   <EyeOff fontSize="20px" color='#1A4153' />}
                                </FormInputIcon>
                            {errors.confirmPassword && (
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                    {errors.confirmPassword.message}
                                </GeneralSmText>
                            )}
                        </ContentFullColumn>


                        <ContentFullColumn>
                            <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                                <DefaultButton>{loading ? "Loading...." : "Reset Password"}</DefaultButton>
                            </CustomDiv>
                        </ContentFullColumn>
                    </ContentRow>
                </ContentForm>
            </>
        )
    }
    export default NewPasswordForm;