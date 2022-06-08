import React from 'react';
import styled from "styled-components";
import { dummyProfileImg, notificationIcon } from "../../assets";

export const ContentTopContainerRTL = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentTopContainerBvnNin = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
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

const ProfileHeader = ({data}) => {
    return (
        <>
            <ContentTopContainerRTL>
                <ContentTopContainerBvnNin>
                    <ContentTopContainerBvnNinText>
                        BNV {data.bvn ? data.bvn : "N/A"}
                    </ContentTopContainerBvnNinText>
                    <ContentTopContainerBvnNinText>
                        NIN {data.nin ? data.nin : "N/A"}
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


        </>
    )
}

export default ProfileHeader;