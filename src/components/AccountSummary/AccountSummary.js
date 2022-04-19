import React from "react";
import styled from "styled-components";

import AccountSummaryChild from "./AccountSummaryChild";
import TotalAccountBalance from "./TotalAccountBalance";

export const AccountSummaryContainer = styled.div`
  margin-bottom: 1rem;
  height: 307px;
  background: linear-gradient(
    94.78deg,
    #1c556f -14.27%,
    rgba(28, 85, 111, 0) 159.64%
  );
  backdrop-filter: blur(26px);
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const AccountSummaryHistoryWrapper = styled.div`
  width: 70%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountListWrapper = styled.div`
  width: 30%;
  background: linear-gradient(
    148.41deg,
    rgba(196, 196, 196, 0.0728) -13.63%,
    rgba(9, 53, 74, 0.28) 154.42%
  );
  backdrop-filter: blur(8px);
  border-radius: 0px 10px 10px 0px;
  padding: 0 0.5rem;
`;

export const SpendTodayContainer = styled.div`
  width: 136px;
  height: 136px;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 77%, 0.187) -87.84%,
    rgba(9, 53, 74, 0.72)
  );
  border: 3px solid #196589;
  border-radius: 150px;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SpendTodayTopText = styled.p`
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  color: #73c7bf;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;
export const SpendTodayBottomText = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #f7f7f7;
`;

const AccountSummary = () => {
  return (
    <>
      <AccountSummaryContainer>
        <AccountSummaryHistoryWrapper>
          <TotalAccountBalance />
          <SpendTodayContainer>
            <SpendTodayTopText>Today Spend</SpendTodayTopText>
            <SpendTodayBottomText>N500.00</SpendTodayBottomText>
          </SpendTodayContainer>
        </AccountSummaryHistoryWrapper>
        <AccountListWrapper>
          <AccountSummaryChild />
          <AccountSummaryChild />
          <AccountSummaryChild />
          <AccountSummaryChild />
        </AccountListWrapper>
      </AccountSummaryContainer>
    </>
  );
};

export default AccountSummary;
