import React from "react";
import styled from "styled-components";

import {depositIcon, topUpIcon, withdrawIcon} from "../../assets";

export const TransactionHistoryHeader = styled.div`
  padding: 1rem;
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
  padding: 1rem 0 0.5rem;
  border-bottom: 1px solid rgba(247, 247, 247, 0.12);
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

const TransactionHistory = () => {
  return (
    <>
      <TransactionHistoryHeader>
        <TransactionHistoryHeaderText>
          Recent Transactions
        </TransactionHistoryHeaderText>
        <TransactionHistoryList>
          <TransactionHistoryListChild>
            <TransactionHistoryListLTR>
              <TransactionHistoryListLTRIconHolder>
                <TransactionHistoryListLTRIcon src={depositIcon} />
              </TransactionHistoryListLTRIconHolder>
              <TransactionHistoryListLTRText>
                <TransactionHistoryListLTRTopText>
                  RYAN BALOGUN
                </TransactionHistoryListLTRTopText>
                <TransactionHistoryListLTRBottomText>
                  9:00PM
                </TransactionHistoryListLTRBottomText>
              </TransactionHistoryListLTRText>
            </TransactionHistoryListLTR>
            <TransactionHistoryListRTLText>
              N2,000.00
            </TransactionHistoryListRTLText>
          </TransactionHistoryListChild>

          <TransactionHistoryListChild>
            <TransactionHistoryListLTR>
              <TransactionHistoryListLTRIconHolder>
                <TransactionHistoryListLTRIcon src={depositIcon} />
              </TransactionHistoryListLTRIconHolder>
              <TransactionHistoryListLTRText>
                <TransactionHistoryListLTRTopText>
                  YEMI SALEM
                </TransactionHistoryListLTRTopText>
                <TransactionHistoryListLTRBottomText>
                  9:00PM
                </TransactionHistoryListLTRBottomText>
              </TransactionHistoryListLTRText>
            </TransactionHistoryListLTR>
            <TransactionHistoryListRTLText>
              N2,000.00
            </TransactionHistoryListRTLText>
          </TransactionHistoryListChild>

          <TransactionHistoryListChild>
            <TransactionHistoryListLTR>
              <TransactionHistoryListLTRIconHolder>
                <TransactionHistoryListLTRIcon src={topUpIcon} />
              </TransactionHistoryListLTRIconHolder>
              <TransactionHistoryListLTRText>
                <TransactionHistoryListLTRTopText>
                  MTN 07031306196
                </TransactionHistoryListLTRTopText>
                <TransactionHistoryListLTRBottomText>
                  9:00PM
                </TransactionHistoryListLTRBottomText>
              </TransactionHistoryListLTRText>
            </TransactionHistoryListLTR>
            <TransactionHistoryListRTLText debit>
              N2,000.00
            </TransactionHistoryListRTLText>
          </TransactionHistoryListChild>

          <TransactionHistoryListChild>
            <TransactionHistoryListLTR>
              <TransactionHistoryListLTRIconHolder>
                <TransactionHistoryListLTRIcon src={withdrawIcon} />
              </TransactionHistoryListLTRIconHolder>
              <TransactionHistoryListLTRText>
                <TransactionHistoryListLTRTopText>
                  FRANK OBIADI
                </TransactionHistoryListLTRTopText>
                <TransactionHistoryListLTRBottomText>
                  9:00PM
                </TransactionHistoryListLTRBottomText>
              </TransactionHistoryListLTRText>
            </TransactionHistoryListLTR>
            <TransactionHistoryListRTLText debit>
              N2,000.00
            </TransactionHistoryListRTLText>
          </TransactionHistoryListChild>
          <TransactionHistoryListChild>
            <TransactionHistoryListLTR>
              <TransactionHistoryListLTRIconHolder>
                <TransactionHistoryListLTRIcon src={depositIcon} />
              </TransactionHistoryListLTRIconHolder>
              <TransactionHistoryListLTRText>
                <TransactionHistoryListLTRTopText>
                  BALOGUN ABIODUN
                </TransactionHistoryListLTRTopText>
                <TransactionHistoryListLTRBottomText>
                  9:00PM
                </TransactionHistoryListLTRBottomText>
              </TransactionHistoryListLTRText>
            </TransactionHistoryListLTR>
            <TransactionHistoryListRTLText>
              N2,000.00
            </TransactionHistoryListRTLText>
          </TransactionHistoryListChild>
        </TransactionHistoryList>
      </TransactionHistoryHeader>
    </>
  );
};

export default TransactionHistory;
