import React, { useState } from 'react';
import styled from "styled-components";
import { OperationsOptionTabs } from '../../OptionCards';
import { WithdrawalForm } from '../../Forms';
import { OperationsSummary } from '../../Common';

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


// export const


const WithdrawalContent = ({data}) => {
  const [stepTwo, setStepTwo] = useState(false);
  return (
    <>
      <ContentBottomContainer>
      <OperationsOptionTabs stepTwo={stepTwo} />
        <ContentFormWrapper>
          {stepTwo ? (
            <OperationsSummary typeUrl="withdrawal" setStepTwo={setStepTwo} />
          ) : (
            <WithdrawalForm accounts={data} setStepTwo={setStepTwo} />
          )}
        </ContentFormWrapper>
      </ContentBottomContainer>
    </>
  )
}

export default WithdrawalContent;