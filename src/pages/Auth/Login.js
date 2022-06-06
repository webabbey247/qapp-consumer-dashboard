import React from "react";
import AuthLayout from "../../components/Layout/AuthLayout";
import { LoginForm } from "../../components/Forms";
import { dummyThemeLogo, dummyFlag} from "../../assets";
import { GeneralMdText, GeneralSmText } from "../../GlobalCss";
import { AuthSection, AuthLogoContainer, AuthLogo, AuthContainer, AuthTopContainer, AuthTopLTR, AuthTopRTL, FlagContainer, FlagImg, AuthBottomContainer } from "../../assets/styles/AuthCss";


const Login = () => {
  return (
    <>
      <AuthLayout>
        <AuthSection>
          <AuthLogoContainer>
            <AuthLogo src={dummyThemeLogo} alt="Bank One" />
          </AuthLogoContainer>
          <AuthContainer>
            <AuthTopContainer>
              <AuthTopLTR>
                <GeneralMdText fontWeight="700" fontSize="28px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize">Mobile Banking</GeneralMdText>
                <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="16px" color="#F7F7F7" textTransform="unset" opacity="0.8" textAlign="left" margin="0.3rem 0">Login to continue</GeneralSmText>
              </AuthTopLTR>
              <AuthTopRTL>
                <FlagContainer>
                  <FlagImg src={dummyFlag} />
                </FlagContainer>
              </AuthTopRTL>
            </AuthTopContainer>
            <AuthBottomContainer>
              <LoginForm />
            </AuthBottomContainer>
          </AuthContainer>
        </AuthSection>
      </AuthLayout>
    </>
  );
};

export default Login;
