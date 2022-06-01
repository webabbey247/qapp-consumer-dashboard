import React from 'react';
import styled from "styled-components";
import { UpdatePasswordForm, UpdatePinForm, UpdateQAForm } from '../Forms';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
export const ContentContainer = styled.div`
  flex: 0 0 80%;
  max-width: 80;
  background: #063043;
  backdrop-filter: blur(26px);
  height: 100vh;
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
  flex-direction: row;
  padding-top: 1rem;
  justify-content: center;
  align-content: center;
`;

export const ContentFormWrapper = styled.div`
background: linear-gradient(148.41deg, rgba(196, 196, 196, 0.0728) -13.63%, rgba(9, 53, 74, 0.28) 154.42%);
backdrop-filter: blur(8px);
border-radius: 10px;
padding: 2rem 0;
width: min(100%, 45rem);
margin-top: 4rem;
`;


const SettingsPageContent = ({ title, typeUrl }) => {
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
                    <ContentFormWrapper>
                        {typeUrl === "Pin" && (
                            <UpdatePinForm />
                        )}
                        {typeUrl === "Password" && (
                        <UpdatePasswordForm />
                        )}
                         {typeUrl === "QA" && (
                        <UpdateQAForm />
                        )}
                    </ContentFormWrapper>
                </ContentBottomContainer>
            </ContentContainer>
        </>
    )
}

export default SettingsPageContent;