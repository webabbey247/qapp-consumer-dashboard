import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";

export const SiteWrapper = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const DashboardLayout = ({children}) => {
  return (
    <>
      <SiteWrapper>
        <Sidebar />
      {children}
      </SiteWrapper>
    </>
  );
};

export default DashboardLayout;
