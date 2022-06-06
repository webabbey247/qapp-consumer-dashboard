import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { ForgetPasswordForm } from "../../components/Forms";
import { dummyThemeLogo } from "../../assets";
import { CustomDiv, GeneralMdText, GeneralSmText } from "../../GlobalCss";
import { AuthSection, AuthLogoContainer, AuthLogo, AuthContainer, AuthTopContainer, AuthBottomContainer } from "../../assets/styles/AuthCss";


const ForgetPassword = () => {
    return (
        <>
            <AuthLayout>
                <AuthSection>
                    <AuthLogoContainer>
                        <AuthLogo src={dummyThemeLogo} alt="Bank One" />
                    </AuthLogoContainer>
                    <AuthContainer>
                        <AuthTopContainer>
                            <CustomDiv display="flex" flexDirection="column">
                                <GeneralMdText fontWeight="700" fontSize="28px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="center">Forgot password</GeneralMdText>
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#F7F7F7" textTransform="unset" opacity="0.6" textAlign="center" margin="0.4rem 0" padding="0 2rem">Please provide following details to reset  your
password</GeneralSmText>
                            </CustomDiv>
                        </AuthTopContainer>
                        <AuthBottomContainer>
                            <ForgetPasswordForm />
                        </AuthBottomContainer>
                    </AuthContainer>
                </AuthSection>
            </AuthLayout>
        </>
    );
};

export default ForgetPassword;
