import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import {isEmpty} from "lodash";
import { depositIcon, withdrawIcon } from "../../assets";
import { apiOperation } from "../../utils/config";

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
  text-transform: capitalize;
`;

export const TransactionHistoryListLTRBottomText = styled.p`
  font-weight: 500;
  font-size: 9px;
  line-height: 16px;
  text-align: left;
  color: #5eaaa8;
  mix-blend-mode: normal;
  opacity: 0.8;
  text-transform: uppercase;
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
  height: 350px;
  border-radius: 10px;
  overflow-x: hidden;
`;

const TransactionHistory = () => {
  const [transactions, setStransactions] = React.useState(''); 

  const totalSpending = () => {
    apiOperation.get("account/transactions/0").then((res) => {
      if(res.data.success === false) {
      } else {   
        setStransactions(res.data.result.transactions)
      console.log("The total spending", res.data.result.transactions);
      }
  });
  }
  
  React.useEffect(() => totalSpending(),[]);

  return (
    <>
      <TransactionHistoryHeader>
        <TransactionHistoryHeaderText>
          Recent Transactions
        </TransactionHistoryHeaderText>
      </TransactionHistoryHeader>
      <TransactionHistoryContainer>
        <TransactionHistoryList>
          {!isEmpty(transactions) && transactions.map((item,index) => {
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

export default TransactionHistory;
