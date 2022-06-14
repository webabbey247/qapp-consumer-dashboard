import React from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { CustomDiv, CustomRouterLink, GeneralLgText, GeneralMdText, GeneralSmText } from "../../GlobalCss";

export const AccountSummaryChildContainer = styled.div`
  background: rgba(3, 33, 48, 0.32);
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0.5rem 0;
  border-radius: 6px;
`;


const AccountSummaryChild = ({data, index}) => {
  const pageNumber = 0;
  return (
    <>
      <AccountSummaryChildContainer key={index}>
       <CustomRouterLink to={{pathname: `/dashboard/transactions/${data.accountId}/${pageNumber}`}}>
       <CustomDiv display="flex" justifyContent="center" flexDirection="column">
          <GeneralMdText fontSize="18px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="600" textTransform="capitalize"> {data.accountName}</GeneralMdText>
          <NumberFormat
            value={data.balance}
            displayType="text"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            prefix={"N"}
            renderText={(value) =>  <GeneralLgText fontSize="37px" lineHeight="44px" textAlign="center" color="#5CC4C4" margin="5px 0" fontWeight="600">{`${value}`}</GeneralLgText>} />
          <GeneralSmText fontSize="13px" lineHeight="16px" textAlign="center" color="#F7F7F7" fontWeight="400" opacity="0.8" textTransform="capitalize"> {data.accountNumber}</GeneralSmText>
        </CustomDiv>
       </CustomRouterLink>
      </AccountSummaryChildContainer>
    </>
  );
};

export default AccountSummaryChild;
