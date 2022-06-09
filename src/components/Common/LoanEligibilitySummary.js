import React, { useState } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import swal from 'sweetalert';
import NumberFormat from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { ContentRow, ContentFullColumn, DefaultButton, GeneralMdText, GeneralSmText, CustomDiv } from '../../GlobalCss';
import { FormInput } from '../../assets/styles/FormCss';
export const ContentButtonWrapper = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`;

export const LoanCard = styled.div`
padding: 0 1rem 2rem;
`;

export const LoanCardContainer = styled.div`
background: rgba(3, 33, 48, 0.57);
border-radius: 6px;
padding: 1rem  1rem 0.5rem;
margin: 1rem;
cursor: pointer;
`;

export const LoanFormContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`;

const LoanEligibilitySummary = ({ eligibleData, setStepTwo, setStepThree }) => {
    const navigate = useNavigate();
    const [preferredAccount, setPreferredAccount] = useState('');
    // console.log("account ID checker", preferredAccount.accountId ? preferredAccount.accountId : "")
    const { register, handleSubmit } = useForm();
    const loanForm = () => {
        if(preferredAccount === ''){
            swal("Error", "Kindly select preferred account required for processing the loan", "error");
            // console.log("error with card")
        } else {
        const savedData = JSON.parse(localStorage.getItem('savedData'));
        savedData["account_id"] = preferredAccount.accountId ? preferredAccount.accountId : "";
        savedData["accountBalance"] = preferredAccount.accountBalance ? preferredAccount.accountBalance : "";
        savedData["accountName"] = preferredAccount.accountName ? preferredAccount.accountName : "";
        savedData["accountNumber"] = preferredAccount.accountName ? preferredAccount.accountNumber : "";
        localStorage.setItem('savedData', JSON.stringify(savedData));
        setStepTwo(false);
        setStepThree(true);
        }
    }



    return (
        <>
            <LoanCard>
                <LoanFormContainer onSubmit={handleSubmit(loanForm)}>
                    <FormInput type="hidden" value={preferredAccount ? (`${preferredAccount.accountId}`) : ""} name="accountID" {...register("accountID")} />
                    <FormInput type="hidden" value={preferredAccount ? (`${preferredAccount.accountBalance}`) : ""} name="accountBalance" {...register("accountBalance")} />
                    <FormInput type="hidden" value={preferredAccount ? (`${preferredAccount.accountName}`) : ""} name="accountName" {...register("accountName")} />
                    <FormInput type="hidden" value={preferredAccount ? (`${preferredAccount.accountNumber}`) : ""} name="accountNumber"{...register("accountNumber")} />
                    <ContentRow>
                        <ContentFullColumn>
                            <GeneralMdText fontSize="14px" lineHeight="18px" textAlign="center" color="#FFFFFF" fontWeight="400" textTransform="unset" margin="1rem 0" padding="0 2rem">Please select account by clicking any of the eligibilty accounts</GeneralMdText>
                        </ContentFullColumn>
                        <ContentFullColumn>
                            {eligibleData.map((item, index) => {
                                return (
                                    <LoanCardContainer key={index}
                                        onClick={() => setPreferredAccount(item)}>
                                        <CustomDiv display="flex">
                                            <GeneralMdText fontSize="14px" lineHeight="21px" textAlign="left" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">{item.accountName}</GeneralMdText>
                                            <GeneralSmText fontSize="10px" lineHeight="13px" textAlign="right" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Account NO. {item.accountNumber}</GeneralSmText>
                                        </CustomDiv>

                                        <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem" width="100%">
                                            <CustomDiv display="flex" flexDirection="column" maxWidth="50%" flex="0 0 50%">
                                                <GeneralSmText fontSize="11px" lineHeight="16px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Balance</GeneralSmText>
                                                <NumberFormat
                                                    value={item.accountBalance}
                                                    displayType="text"
                                                    thousandSeparator
                                                    decimalScale={2}
                                                    fixedDecimalScale
                                                    prefix={"N"}
                                                    renderText={(value) => <GeneralMdText fontSize="20px" lineHeight="24px" textAlign="left" color="#FFFFFF" fontWeight="600" textTransform="Capitalize">{`${value}`}</GeneralMdText>} />
                                            </CustomDiv>

                                            <CustomDiv display="flex" flexDirection="column" maxWidth="50%" flex="0 0 50%">
                                                <GeneralSmText fontSize="14px" lineHeight="18px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">Status</GeneralSmText>

                                                <GeneralMdText fontSize="16px" lineHeight="18px" textAlign="right" color={item.status !== "Eligible" ? "#E32121" : "#1B9419"} fontWeight="700" textTransform="Capitalize">{item.status}</GeneralMdText>
                                            </CustomDiv>
                                        </CustomDiv>
                                    </LoanCardContainer>
                                )
                            })}

                        </ContentFullColumn>

                        <ContentFullColumn>
                            <ContentButtonWrapper>
                                <CustomDiv display="flex" flexDirection="row" width="100%">
                                    <DefaultButton onClick={(e) => navigate('/dashboard/loans')} type='button' margin="10px"> Back</DefaultButton>
                                    <DefaultButton margin="10px">Apply</DefaultButton>
                                </CustomDiv>
                            </ContentButtonWrapper>
                        </ContentFullColumn>
                    </ContentRow>
                </LoanFormContainer>
            </LoanCard>
        </>
    )
}
export default LoanEligibilitySummary