import React from 'react';
import { ContentRow, ContentFullColumn, CustomDiv, DefaultButton, GeneralSmText, CustomRouterLink } from '../../GlobalCss';
import {
    ContentForm,
    FormInput,
    FormLabel
} from '../../assets/styles/FormCss';
import { FlagContainer, FlagImg } from '../../assets/styles/AuthCss';
import { dummyThemeLogo, dummyFlag } from "../../assets";


const RegisterForm = () => {
    return (
        <>
            <ContentForm>
                <ContentRow>
                    <ContentFullColumn>
                        <FormInput type="text" placeholder="First Name" />
                        {/* <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText> */}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput type="text" placeholder="Last Name" />
                        {/* <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText> */}
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <CustomDiv display="flex" justifyContent="flex-start" flexDirection="row" >
                            <CustomDiv maxWidth="17%" flex="0 0 17%" margin="0 10px 0 0">
                                <FlagContainer style={{
                                    width: "100%",
                                    height: "56px",
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0,

                                }}>
                                    <FlagImg src={dummyFlag} />
                                </FlagContainer>
                            </CustomDiv>

                            <CustomDiv maxWidth="80%" flex="0 0 80%">
                                <FormInput type="text" placeholder="Mobile Number" style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                }} />
                            </CustomDiv>

                        </CustomDiv>
                        {/* <FormInput type="text" placeholder="Email Address" /> */}
                        {/* <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText> */}
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <FormInput type="text" placeholder="Email Address" />
                        {/* <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText> */}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormInput type="text" placeholder="Home Address" />
                        {/* <GeneralSmText fontWeight="400" fontSize="10px" lineHeight="13px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                        Enter the 6 digit code sent to +234703***34 or joh***de@gmail.com
                        </GeneralSmText> */}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                            <DefaultButton>Continue</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>

                    <ContentFullColumn>
                    <CustomDiv display="flex" flexDirection="column" justifyContent="flex-end" width="100%">
                    <GeneralSmText fontWeight="400" fontSize="15px" lineHeight="25px" color="#F7F7F7" textTransform="unset" opacity="0.8" textAlign="center" margin="1rem 0">Already have an account? 
                    <CustomRouterLink to='/' fontWeight="400" fontSize="15px" lineHeight="25px" color="#FC7620" textDecoration="none" margin="0 0.3rem">Sign In</CustomRouterLink>
                    </GeneralSmText>  
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default RegisterForm;