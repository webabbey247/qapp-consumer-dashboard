import React, { useState } from 'react';
import styled from "styled-components";
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import CardOptionsCard from '../OptionCards/CardOptionsCard';
import { RetrievePinForm, ReplaceCardForm, BlockCardForm } from '../Forms';


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
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ContentFormWrapper = styled.div`
background: linear-gradient(148.41deg, rgba(196, 196, 196, 0.0728) -13.63%, rgba(9, 53, 74, 0.28) 154.42%);
backdrop-filter: blur(8px);
border-radius: 10px;
padding: 1rem 0 0.5rem;
width: min(100%, 45rem);
margin: 2rem 0;

`;


const CardOperationsPage = ({ title, typeUrl }) => {
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(true);
  return (
    <>
      <ContentContainer>
        <ContentTopContainer>
          <ContentTopContainerLTR>
            <ContentTopContainerPageTitle>
              {title}
            </ContentTopContainerPageTitle>
          </ContentTopContainerLTR>
          <ProfileHeader />
        </ContentTopContainer>

        <ContentBottomContainer>
          <CardOptionsCard stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree} />
          <ContentFormWrapper>
            {typeUrl === 'Replace' && (
              <ReplaceCardForm />
            )}

            {typeUrl === 'Retrieve' && (
              <RetrievePinForm />
            )}

            {typeUrl === 'Block' && (
              <BlockCardForm />
            )}


          </ContentFormWrapper>
        </ContentBottomContainer>
      </ContentContainer>
    </>
  )
}

export default CardOperationsPage;