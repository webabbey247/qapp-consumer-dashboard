import React, {useState} from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { depositIcon, withdrawIcon } from "../../assets";
import {isEmpty} from "lodash";



export const TransactionHistoryHeader = styled.div`
  padding: 1rem 0;
`;

export const TransactionHistoryHeaderText = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const TransactionHistoryList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const TransactionHistoryListChild = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid rgba(247, 247, 247, 0.12);
  border-top: none;

  &:first-child {
    border-top: 1px solid rgba(247, 247, 247, 0.12);
  }
`;

export const TransactionHistoryListLTR = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TransactionHistoryListLTRIconHolder = styled.div`
  width: 34px;
  height: 34px;
  background: #032130;
  border-radius: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TransactionHistoryListLTRIcon = styled.img`
  width: 15.45px;
  height: 15.45px;
`;

export const TransactionHistoryListLTRText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const TransactionHistoryListLTRTopText = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #f7f7f7;
  mix-blend-mode: normal;
  opacity: 0.8;
  text-align: left;
`;

export const TransactionHistoryListLTRBottomText = styled.p`
  font-weight: 500;
  font-size: 9px;
  line-height: 16px;
  text-align: left;
  color: #5eaaa8;
  mix-blend-mode: normal;
  opacity: 0.8;
`;

export const TransactionHistoryListRTLText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: ${(p) => (p.debit ? "#FF5E5E" : "#00EA5E")};
  mix-blend-mode: normal;
  opacity: 0.8;
`;

export const TransactionHistoryContainer = styled.div`
  margin-bottom: 1rem;
  height: auto;
  border-radius: 10px;
//   overflow-x: hidden;
`;

const AccountHistory = ({data}) => {
    // const [previous, setPrevious] = useState('');
    // const [next, setNext] = useState('');
    // const [count, setCount] = useState('');
    // console.log("data", data)

  return (
    <>
      <TransactionHistoryHeader>
        <TransactionHistoryHeaderText>
           Transactions History 
        </TransactionHistoryHeaderText>
      </TransactionHistoryHeader>
      <TransactionHistoryContainer>
        <TransactionHistoryList>

        {!isEmpty(data.transactions) && data.transactions.map((item,index) => {
            return (
              <TransactionHistoryListChild key={index}>
              <TransactionHistoryListLTR>
                <TransactionHistoryListLTRIconHolder>
                {item.transactionType === "TRANSFER" ? ( <TransactionHistoryListLTRIcon src={withdrawIcon} />) : ( <TransactionHistoryListLTRIcon src={depositIcon} />)}
                </TransactionHistoryListLTRIconHolder>
                <TransactionHistoryListLTRText>
                  <TransactionHistoryListLTRTopText>
                  {item.beneficiaryName ? item.beneficiaryName : "N/A"}
                  </TransactionHistoryListLTRTopText>
                  <TransactionHistoryListLTRBottomText>
                  {item.description} | {item.transactionTime} 
                  </TransactionHistoryListLTRBottomText>
                </TransactionHistoryListLTRText>
              </TransactionHistoryListLTR>
          
              {item.transactionType === "TRANSFER" ? (
                <NumberFormat
                value= {item.amount}
                displayType="text"
                thousandSeparator
                decimalScale={2}
                fixedDecimalScale
                prefix={"N"}
                renderText={(value) =>  <TransactionHistoryListRTLText debit>{`${value}`}</TransactionHistoryListRTLText>} />
              ) : (
                <NumberFormat
            value= {item.amount}
            displayType="text"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            prefix={"N"}
            renderText={(value) =>  <TransactionHistoryListRTLText>{`${value}`}</TransactionHistoryListRTLText>} />
              )}
            </TransactionHistoryListChild>
            )
          })}
        </TransactionHistoryList>
      </TransactionHistoryContainer>

    </>
  );
};

export default AccountHistory;
