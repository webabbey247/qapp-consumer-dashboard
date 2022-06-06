import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { MobileBankingForm } from "../../components/Forms";
import { dummyThemeLogo } from "../../assets";
import { CustomDiv, GeneralMdText, GeneralSmText } from "../../GlobalCss";
import { AuthSection, AuthLogoContainer, AuthLogo, AuthContainer, AuthTopContainer, AuthBottomContainer } from "../../assets/styles/AuthCss";


const MobileBanking = () => {
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
                                <GeneralMdText fontWeight="700" fontSize="28px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="center">Mobile Banking</GeneralMdText>
                                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#F7F7F7" textTransform="unset" opacity="0.6" textAlign="center" margin="0.4rem 0" padding="0 2rem">Please provide following details to set up your
mobile Banking</GeneralSmText>
                            </CustomDiv>
                        </AuthTopContainer>
                        <AuthBottomContainer>
                            <MobileBankingForm />
                        </AuthBottomContainer>
                    </AuthContainer>
                </AuthSection>
            </AuthLayout>
        </>
    );
};

export default MobileBanking;
