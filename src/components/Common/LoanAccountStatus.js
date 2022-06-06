import React from 'react';
import styled from "styled-components";
import { ContentRow, ContentFullColumn, DefaultButton, GeneralMdText, GeneralSmText, CustomDiv } from '../../GlobalCss';
export const ContentButtonWrapper = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`;

export const LoanCard = styled.div`
padding: 2rem 3rem;
`;

export const LoanCardContainer = styled.div`
background: rgba(3, 33, 48, 0.57);
border-radius: 6px;
padding: 1rem  1rem 0.5rem;
margin: 1rem 2rem;
`;


const LoanAccountStatus = ({setStepOne, setStepTwo, setStepThree}) => {
    return (
        <>
            <LoanCard>
                <ContentRow>
                    <ContentFullColumn>
                        <GeneralMdText fontSize="14px" lineHeight="18px" textAlign="center" color="#FFFFFF" fontWeight="400" textTransform="Capitalize" margin="1rem 0">Please select the source account </GeneralMdText>
                    </ContentFullColumn>
                    <ContentFullColumn>
                        <LoanCardContainer>
                            <CustomDiv display="flex">
                                <GeneralMdText fontSize="14px" lineHeight="21px" textAlign="left" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Ellem Kuti</GeneralMdText>
                                <GeneralSmText fontSize="10px" lineHeight="13px" textAlign="right" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Account No.0342880912</GeneralSmText>
                            </CustomDiv>

                            <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem">
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="11px" lineHeight="16px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Balance</GeneralSmText>
                                    <GeneralMdText fontSize="20px" lineHeight="24px" textAlign="left" color="#FFFFFF" fontWeight="600" textTransform="Capitalize">N5,000.00</GeneralMdText>
                                </CustomDiv>

                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="14px" lineHeight="18px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">Status</GeneralSmText>
                                    <GeneralMdText fontSize="14px" lineHeight="18px" textAlign="right" color="#E32121" fontWeight="400" textTransform="Capitalize">Not Eligible</GeneralMdText>
                                </CustomDiv>
                            </CustomDiv>
                        </LoanCardContainer>

                        <LoanCardContainer>
                            <CustomDiv display="flex">
                                <GeneralMdText fontSize="14px" lineHeight="21px" textAlign="left" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Ellem Kuti</GeneralMdText>
                                <GeneralSmText fontSize="10px" lineHeight="13px" textAlign="right" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Account No.0342880912</GeneralSmText>
                            </CustomDiv>

                            <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem">
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="11px" lineHeight="16px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Balance</GeneralSmText>
                                    <GeneralMdText fontSize="20px" lineHeight="24px" textAlign="left" color="#FFFFFF" fontWeight="600" textTransform="Capitalize">N5,000.00</GeneralMdText>
                                </CustomDiv>

                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="14px" lineHeight="18px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">Status</GeneralSmText>
                                    <GeneralMdText fontSize="14px" lineHeight="18px" textAlign="right" color="#1B9419" fontWeight="700" textTransform="Capitalize">Eligible</GeneralMdText>
                                </CustomDiv>
                            </CustomDiv>
                        </LoanCardContainer>

                        <LoanCardContainer>
                            <CustomDiv display="flex">
                                <GeneralMdText fontSize="14px" lineHeight="21px" textAlign="left" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Ellem Kuti</GeneralMdText>
                                <GeneralSmText fontSize="10px" lineHeight="13px" textAlign="right" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Account No.0342880912</GeneralSmText>
                            </CustomDiv>

                            <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem">
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="11px" lineHeight="16px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Balance</GeneralSmText>
                                    <GeneralMdText fontSize="20px" lineHeight="24px" textAlign="left" color="#FFFFFF" fontWeight="600" textTransform="Capitalize">N5,000.00</GeneralMdText>
                                </CustomDiv>

                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="14px" lineHeight="18px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">Status</GeneralSmText>
                                    <GeneralMdText fontSize="14px" lineHeight="18px" textAlign="right" color="#1B9419" fontWeight="700" textTransform="Capitalize">Eligible</GeneralMdText>
                                </CustomDiv>
                            </CustomDiv>
                        </LoanCardContainer>
                    </ContentFullColumn>
                   
                    <ContentButtonWrapper>
                        <CustomDiv display="flex" flexDirection="row">
                        <DefaultButton
                        onClick={() => {
                            setStepOne(true);
                            setStepTwo(false);
                            setStepThree(false);
                        }}
                        >Back</DefaultButton>
                        <DefaultButton 
                        onClick={() => {
                            setStepOne(false);
                            setStepTwo(false);
                            setStepThree(true);
                        }}
                        >Continue</DefaultButton>
                        </CustomDiv>
                    </ContentButtonWrapper>


                </ContentRow>
            </LoanCard>
        </>
    )
}
export default LoanAccountStatus