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
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
