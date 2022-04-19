import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";

export const SiteWrapper = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const Homepage = () => {
  return (
    <>
      <SiteWrapper>
        <Sidebar />
        <Content />
      </SiteWrapper>
    </>
  );
};

export default Homepage;
