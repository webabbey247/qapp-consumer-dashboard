import React from "react";
import styled from "styled-components";
import {dummyProfileImg, notificationIcon} from "../../assets";

import Operations from "../Operations/Operations";
import AccountSummary from "../AccountSummary/AccountSummary";
import Ads from "../Ads/Ads";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

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
export const ContentTopContainerLTRGreetings = styled.h2`
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
`;

export const ContenBottomContainerLTR = styled.div`
  flex: 0 0 65%;
  max-width: 65%;
  height: 86.7vh;
`;

export const ContentBottomContainerRTL = styled.div`
  flex: 0 0 35%;
  max-width: 35%;
  height: 86.7vh;
  padding-left: 1.5rem;
`;

export const TransactionHistoryContainer = styled.div`
  margin-bottom: 1rem;
  height: 307px;
  background: linear-gradient(
    91.43deg,
    rgba(255, 255, 255, 0.0728) -19.87%,
    rgba(251, 251, 251, 0.084) 116%
  );
  backdrop-filter: blur(26px);
  border-radius: 10px;
  overflow-x: hidden;
`;

const Content = () => {
  return (
    <>
      <ContentContainer>
        <ContentTopContainer>
          <ContentTopContainerLTR>
            <ContentTopContainerLTRGreetings>
              Goood Afternoon Kuti.
            </ContentTopContainerLTRGreetings>
            <ContentTopContainerLTRLoginInfo>
              Last Login: Yesterday, 2:00pm
            </ContentTopContainerLTRLoginInfo>
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
          <ContenBottomContainerLTR>
            <AccountSummary />
            <TransactionHistoryContainer>
              <TransactionHistory />
            </TransactionHistoryContainer>
          </ContenBottomContainerLTR>
          <ContentBottomContainerRTL>
            <Ads />
            <Operations />
          </ContentBottomContainerRTL>
        </ContentBottomContainer>
      </ContentContainer>
    </>
  );
};

export default Content;
