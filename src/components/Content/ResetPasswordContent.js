import React from 'react';
import styled from "styled-components";
import {dummyProfileImg, notificationIcon} from "../../assets";
import { UpdatePasswordForm } from '../Forms';

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

export const ContentTopContainerRTL = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentTopContainerBvnNin = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;

export const ContentTopContainerBvnNinText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  &:first-child {
    margin-right: 2rem;
  }
`;

export const ContentTopProfileNotification = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4rem;
`;

export const ContentTopNotification = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.19) -108.77%,
    rgba(255, 255, 255, 0) 147.42%
  );
  border-radius: 7px;
  width: 32px;
  height: 30px;
  margin-top: 0.5rem;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const ContentTopNotificationImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const ContentTopProfile = styled.div`
  width: 44px;
  height: 44px;
  border: 2px solid #64bfb6;
  box-sizing: border-box;
  border-radius: 50%;
  margin-left: 1rem;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const ContentTopProfileImg = styled.img`
  width: 38px;
  height: 38px;
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


const ResetPasswordContent = () => {
  return (
    <>
     <ContentContainer>
        <ContentTopContainer>
          <ContentTopContainerLTR>
            <ContentTopContainerPageTitle>
            Change Pin
            </ContentTopContainerPageTitle>
          </ContentTopContainerLTR>
          <ContentTopContainerRTL>
            <ContentTopContainerBvnNin>
              <ContentTopContainerBvnNinText>
                BNV 0345267383
              </ContentTopContainerBvnNinText>
              <ContentTopContainerBvnNinText>
                NIN 6949759594
              </ContentTopContainerBvnNinText>
            </ContentTopContainerBvnNin>
            <ContentTopProfileNotification>
              <ContentTopNotification>
                <ContentTopNotificationImg src={notificationIcon} />
              </ContentTopNotification>
              <ContentTopProfile>
                <ContentTopProfileImg src={dummyProfileImg} />
              </ContentTopProfile>
            </ContentTopProfileNotification>
          </ContentTopContainerRTL>
        </ContentTopContainer>
        
        <ContentBottomContainer>
        <ContentFormWrapper>
           <UpdatePasswordForm />
        </ContentFormWrapper>
        </ContentBottomContainer>
      </ContentContainer>
    </>
  )
}

export default ResetPasswordContent;