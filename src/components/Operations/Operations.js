import React from "react";
import styled from "styled-components";
import {ContentRow, Content4Column4} from "../../GlobalCss";
import {
  sendIcon,
  depositIcon,
  topUpIcon,
  creditCardIcon,
  withdrawIcon,
  qrCodeIcon,
  loanIcon,
  donationIcon,
  utilityIcon,
  fxTransferIcon,
  gamesIcon,
  bettingIcon,
} from "../../assets";

export const OperationsContainer = styled.div`
  background: linear-gradient(
    148.41deg,
    rgba(196, 196, 196, 0.0728) -13.63%,
    rgba(9, 53, 74, 0.28) 154.42%
  );
  backdrop-filter: blur(8px);
  border-radius: 10px;
  padding: 2rem 0.5rem;
`;

export const OperationsCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
`;

export const OperationsCardIconHolder = styled.div`
  width: 100%;
  height: 66px;
  background: #032130;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OperationsCardIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const OperationsCardName = styled.p`
  font-weight: 400;
  font-size: 9px;
  line-height: 16px;
  text-align: center;
  color: #f7f7f7;
  mix-blend-mode: normal;
  opacity: 0.8;
  margin: 8px 0;
`;

const Operations = () => {
  return (
    <>
      <OperationsContainer>
        <ContentRow>
          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={sendIcon} alt='Send' />
              </OperationsCardIconHolder>
              <OperationsCardName>Transfer</OperationsCardName>
            </OperationsCard>
          </Content4Column4>
          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={depositIcon} alt='Deposit' />
              </OperationsCardIconHolder>
              <OperationsCardName>Deposit</OperationsCardName>
            </OperationsCard>
          </Content4Column4>
          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={withdrawIcon} alt='Withdraw' />
              </OperationsCardIconHolder>
              <OperationsCardName>Withdraw</OperationsCardName>
            </OperationsCard>
          </Content4Column4>
         
          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={creditCardIcon} alt='Card' />
              </OperationsCardIconHolder>
              <OperationsCardName>Card</OperationsCardName>
            </OperationsCard>
          </Content4Column4>
         
          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={topUpIcon} alt='Top Up' />
              </OperationsCardIconHolder>
              <OperationsCardName>Top Up</OperationsCardName>
            </OperationsCard>
          </Content4Column4>

          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={qrCodeIcon} alt='QR Code' />
              </OperationsCardIconHolder>
              <OperationsCardName>QR Code</OperationsCardName>
            </OperationsCard>
          </Content4Column4>
          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={loanIcon} alt='Loan' />
              </OperationsCardIconHolder>
              <OperationsCardName>Loan</OperationsCardName>
            </OperationsCard>
          </Content4Column4>
          {/* <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={donationIcon} alt='Donation' />
              </OperationsCardIconHolder>
              <OperationsCardName>Donation</OperationsCardName>
            </OperationsCard>
          </Content4Column4> */}
          <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={utilityIcon} alt='Utility' />
              </OperationsCardIconHolder>
              <OperationsCardName>Utility</OperationsCardName>
            </OperationsCard>
          </Content4Column4>
          {/* <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={fxTransferIcon} alt='FX Transfer' />
              </OperationsCardIconHolder>
              <OperationsCardName>FX Transfer</OperationsCardName>
            </OperationsCard>
          </Content4Column4> */}
          {/* <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={gamesIcon} alt='Games' />
              </OperationsCardIconHolder>
              <OperationsCardName>Games</OperationsCardName>
            </OperationsCard>
          </Content4Column4> */}
          {/* <Content4Column4>
            <OperationsCard>
              <OperationsCardIconHolder>
                <OperationsCardIcon src={bettingIcon} alt='Betting' />
              </OperationsCardIconHolder>
              <OperationsCardName>Betting</OperationsCardName>
            </OperationsCard>
          </Content4Column4> */}
        </ContentRow>
      </OperationsContainer>
    </>
  );
};

export default Operations;
