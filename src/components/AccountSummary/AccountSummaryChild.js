import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";

export const AccountSummaryChildContainer = styled.div`
  background: rgba(3, 33, 48, 0.32);
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0.45rem 0;
  border-radius: 6px;
`;

export const AccountSummaryChildLTR = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountSummaryChildLTRTopText = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: #f7f7f7;
  mix-blend-mode: normal;
  opacity: 0.8;
`;

export const AccountSummaryChildLTRBottomText = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #5cc4c4;
`;

export const AccountSummaryChildRTL = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountSummaryChildRTLText = styled.p`
  font-weight: 400;
  font-size: 9px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.5px;
  color: #f7f7f7;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin-top: 0.5rem;

  &:last-child {
    margin-top: 0.2rem;
  }
`;

const AccountSummaryChild = ({data, index}) => {
  return (
    <>
      <AccountSummaryChildContainer key={index}>
        <AccountSummaryChildLTR>
          <AccountSummaryChildLTRTopText>Balance</AccountSummaryChildLTRTopText>
          <NumberFormat
            value={data.balance}
            displayType="text"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            prefix={"N"}
            renderText={(value) =>  <AccountSummaryChildLTRBottomText>{`${value}`}</AccountSummaryChildLTRBottomText>} />
          {/* <AccountSummaryChildLTRBottomText>
           {data.balance}
          </AccountSummaryChildLTRBottomText> */}
        </AccountSummaryChildLTR>
        <AccountSummaryChildRTL>
          <AccountSummaryChildRTLText>Account No</AccountSummaryChildRTLText>
         
          <AccountSummaryChildRTLText>  {data.accountNumber}</AccountSummaryChildRTLText>
        </AccountSummaryChildRTL>
      </AccountSummaryChildContainer>
    </>
  );
};

export default AccountSummaryChild;
