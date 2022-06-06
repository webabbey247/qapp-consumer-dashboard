import React from 'react';
import styled from "styled-components";
import { ContentRow, ContentFullColumn, DefaultButton, GeneralMdText, GeneralSmText, CustomDiv } from '../../GlobalCss';
import { FormInput } from '../../assets/styles/FormCss';

export const SummaryContainer = styled.div`
padding: 0.5rem 2rem;
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


const TransactionSummary = ({setStepOne, setStepTwo, setStepThree}) => {
    return (
        <>
            <SummaryContainer>
                <ContentRow>
                    <ContentFullColumn>
                        <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="center" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Ellem Kuti (0213452345)</GeneralMdText>
                        <GeneralSmText fontSize="24px" lineHeight="24px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="Capitalize" margin="0.5rem 0">N75,000</GeneralSmText>
                        <SummaryDivider />
                    </ContentFullColumn>
                    <ContentFullColumn>
                    <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem">
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Loan Amount</GeneralSmText>
                                    <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="600" textTransform="Capitalize">N105,000</GeneralMdText>
                                </CustomDiv>

                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="right" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Tenor</GeneralSmText>
                                    <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">3 Months</GeneralMdText>
                                </CustomDiv>
                            </CustomDiv>
                    </ContentFullColumn>

                    <ContentFullColumn>
                    <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem">
                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Monthly Repayment</GeneralSmText>
                                    <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="600" textTransform="Capitalize">N15,000</GeneralMdText>
                                </CustomDiv>

                                <CustomDiv display="flex" flexDirection="column">
                                    <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="right" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Total Repayment</GeneralSmText>
                                    <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">N150,000</GeneralMdText>
                                </CustomDiv>
                            </CustomDiv>
                            <SummaryDivider />
                    </ContentFullColumn>

                    <ContentFullColumn>
                    <CustomDiv display="flex" flexDirection="row" justifyContent="center" margin="2rem 0 0.5rem">
                    <FormInput margin="0 .5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00"  />
                    <FormInput margin="0 .5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00"  />
                    <FormInput margin="0 .5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00"  />
                    <FormInput margin="0 0.5rem" width="30px" height="40px" type="text" name='amount' placeholder="N0.00"  />   
                    </CustomDiv>

                    <CustomDiv display="flex" flexDirection="row" justifyContent="center" margin="1rem 0 0.5rem">
                    <GeneralSmText fontSize="13px" lineHeight="25px" textAlign="center" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">Enter your Transaction PIN</GeneralSmText>
                    </CustomDiv>
                    </ContentFullColumn>

                    <ContentButtonWrapper>
                        <CustomDiv display="flex" flexDirection="row" width="100%">
                        <DefaultButton
                        onClick={() => {
                            setStepOne(false);
                            setStepTwo(true);
                            setStepThree(false);
                        }}
                        >Back</DefaultButton>
                        <DefaultButton>Get Loan</DefaultButton>
                        </CustomDiv>
                    </ContentButtonWrapper>
                </ContentRow>
            </SummaryContainer>
        </>
    )
}

export default TransactionSummary;