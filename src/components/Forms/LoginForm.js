import React from 'react';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, CustomRouterLink, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormInput
} from '../../assets/styles/FormCss';

const LoginForm = () => {
    return (
        <>
            <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput type="text" placeholder="User ID/Account Number" />
                        <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText>
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput type="text" placeholder="Password" />
                        <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText>
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