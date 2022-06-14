import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DashboardLayout from "../components/Layout/DashboardLayout";
import AccountSummary from "../components/AccountSummary/AccountSummary";
import Navigations from "../components/Navigations/Navigations";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";
import AccountSummaryChild from "../components/AccountSummary/AccountSummaryChild";
import { Content2Column2, ContentFullColumn, ContentRow, CustomDiv, GeneralMdText } from "../GlobalCss";
import { apiOperation } from "../utils/config";
import { closeIcon } from "../assets";




export const ContentBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
`;

export const ContenBottomContainerLTR = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  height: 86.7vh;
`;

export const ContentBottomContainerRTL = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  height: 86.7vh;
  padding-left: 1.5rem;
`;

export const TransactionHistoryContainer = styled.div`
  margin-bottom: 1rem;
  height: 350px;
  background: linear-gradient(
    91.43deg,
    rgba(255, 255, 255, 0.0728) -19.87%,
    rgba(251, 251, 251, 0.084) 116%
  );
  backdrop-filter: blur(26px);
  border-radius: 10px;
  overflow-x: hidden;
`;

export const ModalContainer = styled.div`
align-items: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(20px);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const ModalWrapper = styled.div`
  max-width: 500px;
  transform: translateY(-100px);
  transition: opacity 0.25s ease-in-out;
  width: 100%;
  z-index: 1;
  background: #2C5060;
  border-radius:10px;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const ModalContent = styled.div`
margin: 1rem 3rem;
position: relative;
`;

export const ModalClose = styled.img`
width: 18px;
height: 17.1px;
cursor: pointer;
`;


const Homepage = () => {
  const [accounts, setAccounts] = React.useState('');
  const [accountModal, setAccountModal] = useState(false)
  console.log("accoutn modal checler", accountModal)

  const getAccount = () => {
    apiOperation.get("/account/accounts").then((res) => {
      // console.log("Account list checker", res.data);
      if (res.data.success === false) {
        console.log(res.data.message ? res.data.message : "");
      } else {
        setAccounts(res.data.result)
        localStorage.setItem("accounts", JSON.stringify(res.data.result));
        console.log("Account query checker", res.data.result ? res.data.result : "");
      }
    });
  };

  useEffect(() => getAccount(), []);

  return (
    <>
      <DashboardLayout>
        <ContentRow>
          <Content2Column2>
            <AccountSummary accountModal={accountModal} setAccountModal={setAccountModal} />
          </Content2Column2>
          <Content2Column2>
            <Navigations />
          </Content2Column2>
        </ContentRow>

        <ContentRow>
          <ContentFullColumn>
            <TransactionHistory />
          </ContentFullColumn>
        </ContentRow>
      </DashboardLayout>
      {accountModal && (
        <ModalContainer>
          <ModalWrapper>
            <ModalContent>
              {accounts.map((item, index) => {
                return (
                  <AccountSummaryChild data={item} index={index} />
                )
              })}

            </ModalContent>
            <CustomDiv display="flex" justifyContent="center">
              <ModalClose src={closeIcon} onClick={() => setAccountModal(false)} />
            </CustomDiv>
          </ModalWrapper>
        </ModalContainer>
      )}

    </>
  );
};

export default Homepage;
