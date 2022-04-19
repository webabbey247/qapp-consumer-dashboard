import React from "react";
import styled from "styled-components";
import {dummyAdsImg} from "../../assets";

export const AdsContainer = styled.img`
  width: 100%;
  height: 212px;
  backdrop-filter: blur(8px);
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const Ads = () => {
  return (
    <>
      <AdsContainer src={dummyAdsImg} alt='Ads' />
    </>
  );
};

export default Ads;
