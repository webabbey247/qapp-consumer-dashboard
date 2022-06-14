import React, {useEffect, useState} from "react";
import styled from "styled-components";
import NumberFormat from 'react-number-format';
import TotalAccountBalance from "./TotalAccountBalance";
import { apiOperation } from "../../utils/config";
import { Content2Column2, ContentRow, CustomDiv } from "../../GlobalCss";

export const AccountSummaryContainer = styled.div`
  margin-bottom: 1rem;
  height: 307px;
  background: transparent;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border: 1px solid rgba(247,247,247,0.12);
  `;

export const AccountSummaryHistoryWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
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

const AccountSummary = ({accountModal, setAccountModal}) => {
const [presentSpending, setPresentSpending] = useState('');  
const getBankAcc = localStorage.getItem("accounts");
const accounts = JSON.parse(getBankAcc);

const todaySpent = () => {
  apiOperation.get("/account/today-spend").then((res) => {
    if(res.data.success === false) {
    } else {   
      setPresentSpending(res.data.result.today_spent)
    }
});
}

useEffect(() => todaySpent());

  return (
    <>
      <AccountSummaryContainer>
      <AccountSummaryHistoryWrapper>
        <ContentRow>
          <Content2Column2>
          <TotalAccountBalance accountModal={accountModal} setAccountModal={setAccountModal} summaryData={accounts} />
          </Content2Column2>
          <Content2Column2>
         <CustomDiv display="flex" justifyContent="flex-end" margin="3rem 0 2rem">
         <SpendTodayContainer>
            <SpendTodayTopText>Today Spend</SpendTodayTopText>
            <NumberFormat
            value={presentSpending}
            displayType="text"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            prefix={"N"}
            renderText={(value) =>  <SpendTodayBottomText>{`${value}`}</SpendTodayBottomText>} />
          </SpendTodayContainer>
         </CustomDiv>
          </Content2Column2>
        </ContentRow>
         </AccountSummaryHistoryWrapper> 
      </AccountSummaryContainer>
    </>
  );
};

export default AccountSummary;
