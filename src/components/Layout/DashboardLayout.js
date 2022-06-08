import React from "react";
import styled from "styled-components";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import Sidebar from "../Sidebar/Sidebar";

export const SiteWrapper = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  background: #063043;
`;


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

export const ContentBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
`;

export const ContenBottomContainerLTR = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  height: 86.7vh;
`;

export const ContentBottomContainerRTL = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
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


const DashboardLayout = ({children}) => {
  const userData = localStorage.getItem("b_user");
  const bioData = JSON.parse(userData);
  console.log("use info checker", bioData);
  return (
    <>
      <SiteWrapper>
        <Sidebar />
        <ContentContainer>
        <ContentTopContainer>
          <ContentTopContainerLTR>
            <ContentTopContainerLTRGreetings>
              Goood Afternoon {bioData.firstname}.
            </ContentTopContainerLTRGreetings>
            <ContentTopContainerLTRLoginInfo>
              Last Login: Yesterday, 2:00pm
            </ContentTopContainerLTRLoginInfo>
          </ContentTopContainerLTR>
          <ProfileHeader data={bioData} />
        </ContentTopContainer>
        {children}
      </ContentContainer>
      </SiteWrapper>
    </>
  );
};

export default DashboardLayout;
