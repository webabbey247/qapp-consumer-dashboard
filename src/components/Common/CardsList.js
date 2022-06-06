import React from 'react';
import styled from "styled-components";
import { ContentRow, ContentFullColumn, DefaultButton, GeneralMdText, GeneralSmText, CustomDiv } from '../../GlobalCss';
import {
    dummyProfileImg, dummyBankOne,
    dummyBankTwo,
    dummyBankThree
} from "../../assets";


export const SummaryContainer = styled.div`
padding: 1rem 1rem;
`;

export const ContentButtonWrapper = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`;

export const CardContainer = styled.div`
background: #0D2E3E;
border-radius: 10px;
display: flex;
flex-direction: row,
justify-content: space-between;
padding: 1rem;
margin: 20px 0;
`;


export const CardIconWrapper = styled.div`
  width: 75px;
  height: 53px;
  justify-content: center;
  display: flex;
  align-items: center;
  background: #FFFFFF;
border-radius: 44px;
`;

export const CardIconImg = styled.img`
  width: 36px;
  height: 36px;
`;


const CardsList = ({ setStepOne, setStepTwo, setStepThree }) => {
    return (
        <>
            <SummaryContainer>
                <ContentRow>
                    <ContentFullColumn>
                        <CardContainer  onClick={() => {
                                setStepOne(false);
                                setStepTwo(true);
                                setStepThree(false);
                            }}>
                            <CustomDiv display="flex" flexDirection="row" justifyContent="flex-start" margin="0">
                                <CardIconWrapper>
                                    <CardIconImg src={dummyBankThree} />
                                </CardIconWrapper>
                                <CustomDiv display="flex" flexDirection="column" margin="0.5rem 1rem">
                                    <GeneralMdText fontSize="16px" lineHeight="16px" textAlign="left" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">First bank</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="16px" textAlign="left" color="#5EAAA8" fontWeight="400" margin="5px 0 0">1234 56789 2345 1121</GeneralSmText>
                                </CustomDiv>
                            </CustomDiv>
                            <CustomDiv margin="1rem 0">
                                <GeneralSmText fontSize="14px" lineHeight="16px" textAlign="right" color="#F7F7F7" fontWeight="500" textTransform="Capitalize">Verve</GeneralSmText>
                            </CustomDiv>
                        </CardContainer>

                        <CardContainer  onClick={() => {
                                setStepOne(false);
                                setStepTwo(true);
                                setStepThree(false);
                            }}>
                            <CustomDiv display="flex" flexDirection="row" justifyContent="flex-start" margin="0">
                                <CardIconWrapper>
                                    <CardIconImg src={dummyBankTwo} />
                                </CardIconWrapper>
                                <CustomDiv display="flex" flexDirection="column" margin="0.5rem 1rem">
                                    <GeneralMdText fontSize="16px" lineHeight="16px" textAlign="left" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Zenith Bank</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="16px" textAlign="left" color="#5EAAA8" fontWeight="400" margin="5px 0 0">1234 56789 2345 1121</GeneralSmText>
                                </CustomDiv>
                            </CustomDiv>
                            <CustomDiv margin="1rem 0">
                                <GeneralSmText fontSize="14px" lineHeight="16px" textAlign="right" color="#F7F7F7" fontWeight="500" textTransform="Capitalize">Visa</GeneralSmText>
                            </CustomDiv>
                        </CardContainer>

                        <CardContainer  onClick={() => {
                                setStepOne(false);
                                setStepTwo(true);
                                setStepThree(false);
                            }}>
                            <CustomDiv display="flex" flexDirection="row" justifyContent="flex-start" margin="0">
                                <CardIconWrapper>
                                    <CardIconImg src={dummyBankOne} />
                                </CardIconWrapper>
                                <CustomDiv display="flex" flexDirection="column" margin="0.5rem 1rem">
                                    <GeneralMdText fontSize="16px" lineHeight="16px" textAlign="left" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Access Bank</GeneralMdText>
                                    <GeneralSmText fontSize="11px" lineHeight="16px" textAlign="left" color="#5EAAA8" fontWeight="400" margin="5px 0 0">1234 56789 2345 1121</GeneralSmText>
                                </CustomDiv>
                            </CustomDiv>
                            <CustomDiv margin="1rem 0">
                                <GeneralSmText fontSize="14px" lineHeight="16px" textAlign="right" color="#F7F7F7" fontWeight="500" textTransform="Capitalize">Verve</GeneralSmText>
                            </CustomDiv>
                        </CardContainer>
                    </ContentFullColumn>


                    <ContentButtonWrapper>
                        <DefaultButton>Cancel</DefaultButton>
                    </ContentButtonWrapper>
                </ContentRow>
            </SummaryContainer>
        </>
    )
}

export default CardsList;