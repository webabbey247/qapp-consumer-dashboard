import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { RegisterForm } from "../../components/Forms";
import { dummyThemeLogo } from "../../assets";
import { CustomDiv, GeneralMdText, GeneralSmText } from "../../GlobalCss";
import { AuthSection, AuthLogoContainer, AuthLogo, AuthContainer, AuthTopContainer, AuthBottomContainer } from "../../assets/styles/AuthCss";


const Register = () => {
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
                                <GeneralMdText fontWeight="700" fontSize="28px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="center">Sign Up</GeneralMdText>
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#F7F7F7" textTransform="unset" opacity="0.6" textAlign="center" margin="0.4rem 0" padding="0 2rem">Please provide following details to set up your
                                    mobile banking</GeneralSmText>
                            </CustomDiv>
                        </AuthTopContainer>
                        <AuthBottomContainer>
                            <RegisterForm />
                        </AuthBottomContainer>
                    </AuthContainer>
                </AuthSection>
            </AuthLayout>
        </>
    );
};

export default Register;
