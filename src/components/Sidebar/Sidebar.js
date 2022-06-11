import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dummyThemeLogo, dashboardIcon, cardIcon, loanNavIcon, serviceIcon, settingIcon, menuDropdownIcon, menuDropRightIcon } from "../../assets";
import { CustomDiv } from "../../GlobalCss";



const SidebarContainer = styled.div`
position: sticky;
display: flex;
flex-direction: column;
flex: 1 0 auto;
top: 0;
width: 280px;
min-width: 250px;
max-width: 250px;
height: 100vh;
min-height: 100vh;
max-height: 100vh;
z-index: 200;
background: linear-gradient(
    91.43deg,
    rgba(255, 255, 255, 0.143) -19.87%,
    rgba(251, 251, 251, 0.165) 116%
  );
backdrop-filter: blur(26px);
`;

const SidebarNavContainer = styled.div`
position: absolute;
display: flex;
flex: 1 1 auto;
flex-direction: column;
top: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;
z-index: 10;
background: inherit;
left: 0;
`;

const SidebarNavHeader = styled.div`
display: flex;
align-items: center;
width: 100%;
padding-left: 1.5rem;
// box-shadow: 0 0 10px rgba(0, 0, 0, .35);
`;

const SidebarNavContent = styled.div`
  flex: 1 1 auto;
  overscroll-behavior: contain;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  touch-action: auto;
  overflow-anchor: none;
  padding: 1rem 0;
  `;

const SidebarLogoLink = styled(Link)`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SidebarLogo = styled.img`
  width: 149px;
  height: 38px;
`;

const SidebarWrapper = styled.div`
  width: 100%;
`;

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-top: 1px solid rgba(185, 185, 185, 0.5);
`;

// const SidebarFooterNav = styled.div`
// height: 80px;
// display: flex;
// justify-content: center;
// align-items: center;
// `;


const SidebarFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 0.5rem 1rem;
`;

const SidebarFooterBtn = styled.button`
  padding: 0.6rem 2rem;
  background: #5eaaa8;
  border-radius: 62px;
  border: 1px solid #5eaaa8;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: #032130;
  cursor: pointer;
`;

const SidebarFooterBottomText = styled.div`
  text-align: center;
  margin-bottom: 0.3rem;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ced7da;
`;


const SidebarNavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  padding: 1.3rem 1rem;
  list-style: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 13.8701px;
  line-height: 21px;
  color: #fefeff;

  &:active {
    border-left: 4px solid #2f9d9a;
  }

  &:hover {
    background: #063043;
    border-left: 4px solid #2f9d9a;
    cursor: pointer;
  }
`;

const SidebarNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SidebarNavLabel = styled.span`
  font-weight: 600;
  font-size: 13.8701px;
  line-height: 21px;
  color: rgb(254, 254, 255);
  margin-left: 16px;
  width: 150px;
`;

const SidebarNavIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const DropdownLink = styled(Link)`
  background: #063043;
  padding: 0.8rem 0 0.8rem 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-left: 4px solid #2f9d9a;

  &:hover {
    background: #063043;
    cursor: pointer;
  }
`;

const SidebarSubMenuLabel = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #bdf0ec;
  margin-left: 16px;
`;

const Sidebar = () => {
  const [dropDownOne, setDropDownOne] = React.useState(false);
  const [dropDownTwo, setDropDownTwo] = React.useState(false);

  return (
    <>
      <SidebarContainer>
        <SidebarNavContainer>
          <SidebarNavHeader>
            <SidebarLogoLink to='/'>
              <SidebarLogo src={dummyThemeLogo} alt='Bank One' />
            </SidebarLogoLink>
          </SidebarNavHeader>

          <SidebarNavContent>
            <SidebarWrapper>

              <SidebarNavLink to="/dashboard">
                <SidebarNavWrapper>
                  <SidebarNavIcon src={dashboardIcon} alt="Dashboard" />
                  <SidebarNavLabel>Dashboard</SidebarNavLabel>
                </SidebarNavWrapper>
              </SidebarNavLink>

              <SidebarNavLink onClick={() => setDropDownOne(!dropDownOne)} to="#"
                style={{
                  borderLeft: dropDownOne ? "4px solid rgb(47, 157, 154)" : "",
                  background: dropDownOne ? "#063043" : "",
                }}

              >
                <SidebarNavWrapper>
                  <SidebarNavIcon src={serviceIcon} alt="Operations" />
                  <SidebarNavLabel>Operations</SidebarNavLabel>
                  {dropDownOne ?  <SidebarNavIcon src={menuDropdownIcon} /> : <SidebarNavIcon src={menuDropRightIcon} />}
                  {/* <SidebarNavIcon src={menuDropdownIcon} /> */}
                </SidebarNavWrapper>
              </SidebarNavLink>
              {dropDownOne && (
                <CustomDiv onClick={() => setDropDownOne(!dropDownOne)} flexDirection="column" display="flex">
                  <DropdownLink to="/dashboard/deposit">
                    <SidebarSubMenuLabel>Deposit</SidebarSubMenuLabel>
                  </DropdownLink>
                  <DropdownLink to="/dashboard/withdrawal">
                    <SidebarSubMenuLabel>Withdrawal</SidebarSubMenuLabel>
                  </DropdownLink>
                  <DropdownLink to="/dashboard/transfer">
                    <SidebarSubMenuLabel>Transfer</SidebarSubMenuLabel>
                  </DropdownLink>
                  {/* <DropdownLink to="">
                    <SidebarSubMenuLabel>Utility</SidebarSubMenuLabel>
                  </DropdownLink> */}
                </CustomDiv>
              )}

              <SidebarNavLink to="/dashboard/cards">
                <SidebarNavWrapper>
                  <SidebarNavIcon src={cardIcon} alt="Cards" />
                  <SidebarNavLabel>Cards</SidebarNavLabel>
                </SidebarNavWrapper>
              </SidebarNavLink>


              <SidebarNavLink to="/dashboard/cards">
                <SidebarNavWrapper>
                  <SidebarNavIcon src={cardIcon} alt="Utility" />
                  <SidebarNavLabel>Utility</SidebarNavLabel>
                </SidebarNavWrapper>
              </SidebarNavLink>


              <SidebarNavLink to="/dashboard/loans">
                <SidebarNavWrapper>
                  <SidebarNavIcon src={loanNavIcon} alt="Loans" />
                  <SidebarNavLabel>Loans</SidebarNavLabel>
                </SidebarNavWrapper>
              </SidebarNavLink>

            </SidebarWrapper>
          </SidebarNavContent>


          <SidebarFooter>
            <SidebarWrapper>
            <SidebarNavLink onClick={() => setDropDownTwo(!dropDownTwo)} to="#"
                style={{
                  borderLeft: dropDownTwo ? "4px solid rgb(47, 157, 154)" : "",
                  background: dropDownTwo ? "#063043" : "",
                }}>
                <SidebarNavWrapper>
                  <SidebarNavIcon src={settingIcon} alt="Settings" />
                  <SidebarNavLabel>Settings</SidebarNavLabel>
                </SidebarNavWrapper>
              </SidebarNavLink>
              {dropDownTwo && (
                 <CustomDiv onClick={() => setDropDownTwo(!dropDownTwo)} flexDirection="column" display="flex" padding="0 0 1rem">
                 <DropdownLink to="/dashboard/settings/update-password">
                   <SidebarSubMenuLabel>Change Password</SidebarSubMenuLabel>
                 </DropdownLink>
                 <DropdownLink to="/dashboard/settings/update-transaction-pin">
                   <SidebarSubMenuLabel>Change Transaction Pin</SidebarSubMenuLabel>
                 </DropdownLink>
                 <DropdownLink to="/dashboard/settings/update-security-questions">
                   <SidebarSubMenuLabel>Security Question</SidebarSubMenuLabel>
                 </DropdownLink>
               </CustomDiv>
              )}
             
            </SidebarWrapper>
            <SidebarFooterTop>
              <SidebarFooterBtn>Logout</SidebarFooterBtn>
              <SidebarFooterBtn>Support</SidebarFooterBtn>
            </SidebarFooterTop>
            <SidebarFooterBottomText>v 1.0.0</SidebarFooterBottomText>
          </SidebarFooter>
        </SidebarNavContainer>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
