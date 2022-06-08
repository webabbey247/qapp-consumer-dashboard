import React, { useState } from 'react';
import styled from "styled-components";
import { LoanOptionsForm } from '../Forms';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import OptionCards from '../OptionCards/OptionCards';
import { LoanAccountStatus, TransactionSummary } from '../Common';


export const ContentContainer = styled.div`
  flex: 0 0 80%;
  max-width: 80;
  background: #063043;
  backdrop-filter: blur(26px);
  height: 100%;
  padding: 0 2rem;
`;

export const ContentTopContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentTopContainerLTR = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentTopContainerPageTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;
`;
export const ContentTopContainerLTRLoginInfo = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #5dc6c6;
  margin-top: 5px;
`;

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
width: min(100%, 45rem);
margin: 2rem 0;

`;


const LoanPage = ({ title }) => {
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    return (
        <>
            <ContentBottomContainer>
                    <OptionCards stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree} />
                    <ContentFormWrapper>
                        {stepOne && (
                            <LoanOptionsForm setStepOne={setStepOne} setStepTwo={setStepTwo} setStepThree={setStepThree} />
                        )}

                        {stepTwo && (
                            <LoanAccountStatus setStepOne={setStepOne} setStepTwo={setStepTwo} setStepThree={setStepThree} />
                        )}

                        {stepThree && (
                            <TransactionSummary setStepOne={setStepOne} setStepTwo={setStepTwo} setStepThree={setStepThree} />
                        )}

                    </ContentFormWrapper>
                </ContentBottomContainer>
        </>
    )
}

export default LoanPage;