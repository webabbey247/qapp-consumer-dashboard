import React from "react";
import styled from "styled-components";

export const TotalAccountBalanceContainer = styled.div`
  width: 235px;
  height: 235px;
  border: 12px solid rgba(22, 227, 255, 0.32);
  border-radius: 250px;
`;

export const TotalAccountBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4.5rem;
`;

export const TotalAccountBalanceTopText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  text-align: center;
  color: #f7f7f7;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

export const TotalAccountBalanceMiddleText = styled.h4`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -1.5px;
  color: #5cc4c4;
`;

export const TotalAccountBalanceBottomText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #5cc4c4;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin-top: 0.5rem;
`;

const TotalAccountBalance = () => {
  return (
    <>
      <TotalAccountBalanceContainer>
        <TotalAccountBalanceWrapper>
          <TotalAccountBalanceTopText>Total Balance</TotalAccountBalanceTopText>
          <TotalAccountBalanceMiddleText>
            N75,000.00
          </TotalAccountBalanceMiddleText>
          <TotalAccountBalanceBottomText>
            3 Accounts
          </TotalAccountBalanceBottomText>
        </TotalAccountBalanceWrapper>
      </TotalAccountBalanceContainer>
    </>
  );
};

export default TotalAccountBalance;
