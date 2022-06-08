import React from "react";
import styled from "styled-components";
import NumberFormat from 'react-number-format';


export const TotalAccountBalanceContainer = styled.div`
  width: 235px;
  height: 235px;
  // background: linear-gradient(180deg, rgba(151, 255, 252, 0.8448) -87.84%, rgba(47, 157, 154, 0.96) 100%);
  border: 12px solid rgba(22, 227, 255, 0.32);
  border-radius: 250px;
  box-shadow: rgba(22, 227, 255, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px 18px inset;
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

const TotalAccountBalance = ({ summaryData }) => {
  // console.log("this is my summmary check", summaryData)
  const totalBalance = summaryData.map(account => account.balance).reduce((a, b) => a + b)
  const totalAccount = summaryData.length;

  return (
    <>
      <TotalAccountBalanceContainer>
        <TotalAccountBalanceWrapper>
          <TotalAccountBalanceTopText>Total Balance</TotalAccountBalanceTopText>
          <NumberFormat
            value={totalBalance}
            displayType="text"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            prefix={"N"}
            renderText={(value) => <TotalAccountBalanceMiddleText>{`${value}`}</TotalAccountBalanceMiddleText>} />
          <TotalAccountBalanceBottomText>
            {totalAccount}  {totalAccount <= 1 ? "Account" : "Accounts"}
          </TotalAccountBalanceBottomText>
        </TotalAccountBalanceWrapper>
      </TotalAccountBalanceContainer>
    </>
  );
};

export default TotalAccountBalance;
