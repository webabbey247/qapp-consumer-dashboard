import React from 'react';
import styled from "styled-components";
import { ContentRow, ContentFullColumn, DefaultButton, GeneralMdText, GeneralSmText, CustomDiv } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput
} from '../../assets/styles/FormCss';

export const CardContainer = styled.div`
padding: 1rem 2rem;
`;

export const SummaryDivider = styled.div`
border-bottom: 1px solid rgba(0, 122, 130, 0.39);
padding: 0.5rem 0 1rem;
`;

export const ContentButtonWrapper = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`;
const BlockCardForm = () => {
    const [showSummary, setShowSummary] = React.useState(false);
    const [showForm, setShowForm] = React.useState(true);
    const [showPinForm, setPinForm] = React.useState(false);
    return (
        <>
           {showForm && (
                <CardContainer>
                <ContentForm>
                    <ContentRow>
                        <ContentFullColumn>
                            <FormLabel>Please provide reason for card replacement</FormLabel>
                            <FormInput type="text" placeholder="Suspected fraud" />
                        </ContentFullColumn>

                        <ContentFullColumn>
                            <ContentButtonWrapper>
                                <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                                    <DefaultButton width="30%" margin="0 20px 0 0">Back</DefaultButton>
                                    <DefaultButton width="30%" onClick={() => {setPinForm(true);
                                    setShowForm(false)}}>Next</DefaultButton>
                                </CustomDiv>
                            </ContentButtonWrapper>
                        </ContentFullColumn>
                    </ContentRow>
                </ContentForm>
            </CardContainer>
           )}

           {showPinForm && (
               <CardContainer>
               <ContentRow>
                   <ContentFullColumn>
                       <GeneralMdText fontSize="28px" lineHeight="36px" textAlign="center" color="#56C0BF" fontWeight="700" textTransform="Capitalize">OTP Token</GeneralMdText>
                       <GeneralSmText fontSize="12px" lineHeight="16px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="Capitalize" margin="0.5rem 0">Phone verification code</GeneralSmText>
                   </ContentFullColumn>

                   <ContentFullColumn>
                       <CustomDiv display="flex" flexDirection="row" justifyContent="center" margin="2rem 0 0.5rem">
                           <FormInput margin="0 .5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00" />
                           <FormInput margin="0 .5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00" />
                           <FormInput margin="0 .5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00" />
                           <FormInput margin="0 0.5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00" />
                       </CustomDiv>

                       <CustomDiv display="flex" flexDirection="row" justifyContent="center" margin="1rem 0 0.5rem">
                           <GeneralSmText fontSize="13px" lineHeight="25px" textAlign="center" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">Didn’t you receive the OTP?
                               <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="center" color="#56C0BF" fontWeight="400" margin="0">Resend OTP</GeneralSmText>
                           </GeneralSmText>
                       </CustomDiv>
                   </ContentFullColumn>

                   <ContentFullColumn>
                       <ContentButtonWrapper>
                       <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                                    <DefaultButton width="30%" margin="0 20px 0 0">Back</DefaultButton>
                               <DefaultButton width="30%" onClick={() => {setPinForm(false);
                                    setShowForm(false);
                                    setShowSummary(true)}}>Next</DefaultButton>
                           </CustomDiv>
                       </ContentButtonWrapper>
                   </ContentFullColumn>
               </ContentRow>
           </CardContainer>
           )}


            {showSummary && (
                <CardContainer>
                    <ContentRow>
                        <ContentFullColumn>
                            <GeneralMdText fontSize="20px" lineHeight="26px" textAlign="center" color="#56C0BF" fontWeight="700" textTransform="Capitalize">Card Blocked</GeneralMdText>
                            <GeneralMdText fontSize="20px" lineHeight="26px" textAlign="center" color="#56C0BF" fontWeight="700" textTransform="Capitalize">Successful
                            </GeneralMdText>
                        </ContentFullColumn>

                        <ContentFullColumn>
                            <ContentButtonWrapper>
                                <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                                    <DefaultButton width="30%">Continue</DefaultButton>
                                </CustomDiv>
                            </ContentButtonWrapper>
                        </ContentFullColumn>
                    </ContentRow>
                </CardContainer>
            )}
        </>
    )
}

export default BlockCardForm;