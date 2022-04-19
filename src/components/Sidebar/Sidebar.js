import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {dummyThemeLogo} from "../../assets";
import SubMenu from "./SubMenu";
import {SidebarData} from "../../data/SidebarData";

const SidebarContainer = styled.div`
  flex: 0 0 20%;
  max-width: 20;
  background: linear-gradient(
    91.43deg,
    rgba(255, 255, 255, 0.143) -19.87%,
    rgba(251, 251, 251, 0.165) 116%
  );
  backdrop-filter: blur(26px);
  height: 100vh;
`;

const SidebarLogoLink = styled(Link)`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SidebarLogo = styled.img`
  width: 149px;
  height: 38px;
`;

const SidebarWrapper = styled.div`
  width: 100%;
`;

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1rem;
  border-top: 1px solid rgba(185, 185, 185, 0.5);
`;

const SidebarFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 0.4rem;
`;

const SidebarFooterBtn = styled.button`
  padding: 0.6rem 2rem;
  background: #5eaaa8;
  border-radius: 62px;
  border: 1px solid #5eaaa8;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: #032130;
  cursor: pointer;
`;

const SidebarFooterBottomText = styled.div`
  text-align: center;
  margin-top: 0.8rem;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ced7da;
`;

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarLogoLink to='#'>
          <SidebarLogo src={dummyThemeLogo} alt='Bank One' />
        </SidebarLogoLink>

        <SidebarWrapper>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrapper>
        <SidebarFooter>
          <SidebarFooterTop>
            <SidebarFooterBtn>Logout</SidebarFooterBtn>
            <SidebarFooterBtn>Support</SidebarFooterBtn>
          </SidebarFooterTop>
          <SidebarFooterBottomText>v 1.0.0</SidebarFooterBottomText>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
