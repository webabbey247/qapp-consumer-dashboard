import React from 'react';
import styled from "styled-components";
import NumberFormat from 'react-number-format';
import { ContentRow, ContentFullColumn, GeneralMdText, GeneralSmText, CustomDiv, DefaultButton } from '../../../GlobalCss';

export const ContentBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ContentFormWrapper = styled.div`
background: linear-gradient(148.41deg, rgba(196, 196, 196, 0.0728) -13.63%, rgba(9, 53, 74, 0.28) 154.42%);
backdrop-filter: blur(8px);
border-radius: 10px;
padding: 1rem 0 0;
width: min(100%, 33rem);
margin: 2rem 0;
`;

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

export const SummaryCardContainer = styled.div`
background: #245973;
border-radius: 5px;
padding: 1rem 0;
margin: 1rem 0;
`;


const LoanFinalSummary = () => {
    const LoanData = JSON.parse(localStorage.getItem("savedData"));

    return (
        <>
            <ContentBottomContainer>
                <ContentFormWrapper>
                    <SummaryContainer>
                        <ContentRow>
                            <ContentFullColumn>
                                <GeneralMdText fontSize="30px" lineHeight="46px" textAlign="center" color="#5CC4C4" fontWeight="700" textTransform="Capitalize" margin="0.5rem 0 0">Loan Successful</GeneralMdText>
                                <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="unset">This is subjected to approval and you will be be notified when approved.</GeneralSmText>
                                {/* <SummaryDivider /> */}
                            </ContentFullColumn>
                            <ContentFullColumn>
                                <SummaryCardContainer>
                                    <CustomDiv flexDirection="column" display="flex" margin="0 0 1rem">
                                        <GeneralSmText fontSize="22px" lineHeight="29px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="unset">{LoanData.accountName}
                                          </GeneralSmText>
                                            <GeneralSmText fontSize="18px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="unset">
                                            ({LoanData.accountNumber})</GeneralSmText>
                                            <NumberFormat
                                                    value={LoanData.accountBalance}
                                                    displayType="text"
                                                    thousandSeparator
                                                    decimalScale={2}
                                                    fixedDecimalScale
                                                    prefix={"N"}
                                                    renderText={(value) => <GeneralMdText fontSize="30px" lineHeight="46px" textAlign="center" color="#5CC4C4" fontWeight="700" textTransform="Capitalize" margin="0 0 0.5rem">{`${value}`}</GeneralMdText>} />
                                    </CustomDiv>

                                    <CustomDiv flexDirection="column" display="flex" margin="0">
                                        <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="unset">Transaction ID</GeneralSmText>
                                        <GeneralMdText fontSize="15px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="unset" margin="0 0 0.5rem">-</GeneralMdText>
                                    </CustomDiv>

                                </SummaryCardContainer>
                            </ContentFullColumn>

                            <ContentFullColumn>
                                <CustomDiv display="flex" flexDirection="row" width="100%" padding="0 0 2rem">
                                    <DefaultButton type='button' margin="10px" background="#5EAAA8" border="#5EAAA8">Share</DefaultButton>
                                    <DefaultButton type='button' margin="10px" background="#5EAAA8" border="#5EAAA8">Download</DefaultButton>
                                </CustomDiv>
                            </ContentFullColumn>
                        </ContentRow>
                    </SummaryContainer>
                </ContentFormWrapper>
            </ContentBottomContainer>
        </>
    )
}
export default LoanFinalSummary;