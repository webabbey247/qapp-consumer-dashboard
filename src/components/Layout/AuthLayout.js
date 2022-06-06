import React from "react";
import styled from "styled-components";

export const SiteWrapper = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const AuthLayout = ({children}) => {
  return (
    <>
      <SiteWrapper>
      {children}
      </SiteWrapper>
    </>
  );
};

export default AuthLayout;
