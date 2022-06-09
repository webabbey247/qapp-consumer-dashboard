import React, { useState } from 'react';
import styled from "styled-components";
import NumberFormat from 'react-number-format';
import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContentRow, ContentFullColumn, DefaultButton, GeneralMdText, GeneralSmText, CustomDiv } from '../../GlobalCss';
import { FormInput } from '../../assets/styles/FormCss';
import { apiOperation, apiLoan } from '../../utils/config';
import { useNavigate } from 'react-router-dom';

export const SummaryContainer = styled.div`
padding: 0.5rem 2rem;
`;

export const SummaryDivider = styled.div`
border-bottom: 1px solid rgba(0, 122, 130, 0.39);
padding: 0.5rem 0 1rem;
`;

export const ContentButtonWrapper = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`;

export const OTPFormContainer = styled.form`
margin: 2rem 0 0.5rem;
display: flex;
flex-direction: column;
justify-content: center;

`;

const OperationsSummary = ({ setStepTwo, typeUrl, setStepThree }) => {
    // console.log(typeUrl);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const depositInfo = JSON.parse(localStorage.getItem('depositData'));
    const savedData = JSON.parse(localStorage.getItem("savedData"))

    const validationSchema = yup.object().shape({
        otp: yup
            .string()
            .trim()
            .required("Kindly provide your Transaction PIN!")
            .min(4, ({ min }) => `Transaction PIN must be atleast ${min} characters`)
            .max(4, ({ max }) => `Transaction PIN must be atleast ${max} characters`),
    });


    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });


    const { errors } = formState;

    const verifyOTPForm = (data) => {
        setLoading(true);

        const stepTwoInfo = {
            amount: depositInfo.amount,
            account_id: depositInfo.bankAccount ? depositInfo.bankAccount : "",
            description: depositInfo.description,
            transaction_pin: data.otp
        };

        const loanData = {
            account_id: savedData.account_id,
            amount: savedData.amount,
            tenor_in_months: savedData.tenor_in_months,
            loan_id: savedData.loan_id,
        }

        const transferInfo = {
            amount: depositInfo.amount,
            description: depositInfo.description,
            account_id: depositInfo.accountID,
            beneficiary_name: depositInfo.beneficiary_name,
            destination_account: depositInfo.destination_account,
            destination_bank: depositInfo.destination_bank,
            transaction_pin: data.otp
        }

        if (typeUrl === "withdrawal") {
            apiOperation.post("/withdrawal", stepTwoInfo).then((res) => {
                console.log("withdrawal form response checker", res.data)
                if (res.data.success === false) {
                    swal("Error", res.data.message ? res.data.message : "", "error");
                    console.log(res.data.message ? res.data.message : "")
                } else {
                    localStorage.setItem("operation", JSON.stringify(res.data.result))
                    setTimeout(() => {
                        navigate("/dashboard/withdrawal/summary");
                    }, 1000)
                }
            });
        }
        else if (typeUrl === "deposit") {
            apiOperation.post("/deposit", stepTwoInfo).then((res) => {
                console.log("deposit form response checker", res.data)
                if (res.data.success === false) {
                    swal("Error", res.data.message ? res.data.message : "", "error");
                    console.log(res.data.message ? res.data.message : "")
                } else {
                    localStorage.setItem("operation", JSON.stringify(res.data.result))
                    setTimeout(() => {
                        navigate("/dashboard/deposit/summary");
                    }, 1000)
                }
            });
        } else if (typeUrl === "transfer") {
            if (depositInfo.transactionType  === "inter"){
                apiOperation.post("/transfer/inter", transferInfo).then((res) => {
                    // console.log("apply form Info", transferInfo);
                    // console.log("intra transfer response", res.data);
                    // console.log("deposit form response checker", res.data)
                    if (res.data.success === false) {
                        swal("Error", res.data.message ? res.data.message : "", "error");
                        console.log(res.data.message ? res.data.message : "")
                    } else {
                        swal("Success", res.data.message ? res.data.message : "", "success");
                        localStorage.setItem("operation", JSON.stringify(res.data.result))
                        setTimeout(() => {
                            navigate("/dashboard/transfer/summary");
                        }, 1000)
                    }
                });

            } else {
                apiOperation.post("/transfer/intra", transferInfo).then((res) => {
                    // console.log("apply form Info", transferInfo);
                    // console.log("inter transfer response", res.data);
                    // console.log("deposit form response checker", res.data)
                    if (res.data.success === false) {
                        swal("Error", res.data.message ? res.data.message : "", "error");
                        console.log(res.data.message ? res.data.message : "")
                    } else {
                        swal("Success", res.data.message ? res.data.message : "", "success");
                        localStorage.setItem("operation", JSON.stringify(res.data.result))
                        setTimeout(() => {
                            navigate("/dashboard/transfer/summary");
                        }, 1000)
                    }
                });
            }
        } else {
            apiLoan.post("/apply", loanData).then((res) => {
                console.log("apply form Info", loanData);
                // console.log("deposit form response checker", res.data)
                if (res.data.success === false) {
                    swal("Error", res.data.message ? res.data.message : "", "error");
                    console.log(res.data.message ? res.data.message : "")
                } else {
                    swal("Success", res.data.message ? res.data.message : "", "success");
                    setTimeout(() => {
                        navigate("/dashboard/loans/summary");
                    }, 1000)
                }
            });
        }
        setLoading(false);
        reset();
    };


    return (
        <>
            <SummaryContainer>
                <ContentRow>

                    {typeUrl === "withdrawal" && (
                        <>
                            <ContentFullColumn>
                                <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="capitalize">Withdraw from</GeneralSmText>
                                <GeneralMdText fontSize="30px" lineHeight="46px" textAlign="center" color="#5CC4C4" fontWeight="700" textTransform="Capitalize" margin="0.2rem 0 0.2rem">{depositInfo.accountName}</GeneralMdText>
                                <GeneralSmText fontSize="18px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="unset">{depositInfo.accountNumber}</GeneralSmText>
                                <SummaryDivider />
                            </ContentFullColumn>
                            <ContentFullColumn>
                                <CustomDiv display="flex" flexDirection="column" justifyContent="center" margin="1rem 0 0.5rem">
                                    <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Amount</GeneralSmText>
                                    <NumberFormat
                                        value={depositInfo.amount}
                                        displayType="text"
                                        thousandSeparator
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix={"N"}
                                        renderText={(value) => <GeneralMdText fontSize="30px" lineHeight="46px" textAlign="center" color="#5CC4C4" fontWeight="700" textTransform="Capitalize">{`${value}`}</GeneralMdText>} />

                                </CustomDiv>
                                <SummaryDivider />
                            </ContentFullColumn>
                        </>)}

                    {typeUrl === "deposit" && (
                        <>
                            <ContentFullColumn>
                                <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="capitalize">Deposit to</GeneralSmText>
                                <GeneralMdText fontSize="30px" lineHeight="46px" textAlign="center" color="#5CC4C4" fontWeight="700" textTransform="Capitalize" margin="0.2rem 0 0.2rem">{depositInfo.accountName}</GeneralMdText>
                                <GeneralSmText fontSize="18px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="unset">{depositInfo.accountNumber}</GeneralSmText>
                                <SummaryDivider />
                            </ContentFullColumn>
                            <ContentFullColumn>
                                <CustomDiv display="flex" flexDirection="column" justifyContent="center" margin="1rem 0 0.5rem">
                                    <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="Capitalize">Amount</GeneralSmText>
                                    <NumberFormat
                                        value={depositInfo.amount}
                                        displayType="text"
                                        thousandSeparator
                                        decimalScale={2}
                                        fixedDecimalScale
                                        prefix={"N"}
                                        renderText={(value) => <GeneralMdText fontSize="30px" lineHeight="46px" textAlign="center" color="#5CC4C4" fontWeight="700" textTransform="Capitalize">{`${value}`}</GeneralMdText>} />

                                </CustomDiv>
                                <SummaryDivider />
                            </ContentFullColumn>
                        </>)}


                    {typeUrl === "transfer" && (
                        <>
                            <ContentFullColumn>
                                <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#5CC4C4" fontWeight="400" textTransform="capitalize">Source Account </GeneralSmText>
                                <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="700" textTransform="Capitalize" margin="0.1rem 0">{depositInfo.accountName} ({depositInfo.accountNumber})</GeneralMdText>
                                <SummaryDivider />
                            </ContentFullColumn>
                            <ContentFullColumn>
                                <CustomDiv margin="1rem 0 0.5rem" display="flex" justifyContent="space-between" flexDirection="row">
                                    {depositInfo.transactionType === "Inter" ? (
                                        <>
                                            <CustomDiv display="flex" flexDirection="column" justifyContent="center" maxWidth="50%" flex="0 0 50%">
                                                <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Recipient Account</GeneralSmText>
                                                <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="400" textTransform="Capitalize" margin="0.1rem 0">{depositInfo.beneficiary_name}  ({depositInfo.destination_account})</GeneralSmText>
                                            </CustomDiv>
                                            <CustomDiv display="flex" flexDirection="column" justifyContent="center" maxWidth="50%" flex="0 0 50%">
                                                <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="right" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Bank</GeneralSmText>
                                                <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize" margin="0.1rem 0">{depositInfo.destination_bank}</GeneralSmText>
                                            </CustomDiv>
                                        </>

                                    ) : (
                                        <CustomDiv display="flex" flexDirection="column" justifyContent="center">
                                            <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Recipient Account</GeneralSmText>
                                            <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="400" textTransform="Capitalize" margin="0.1rem 0">{depositInfo.beneficiary_name}  ({depositInfo.destination_account})</GeneralSmText>
                                        </CustomDiv>
                                    )}

                                </CustomDiv>
                                <SummaryDivider />
                            </ContentFullColumn>
                            <ContentFullColumn>
                                <CustomDiv margin="1rem 0 0.5rem" display="flex" justifyContent="space-between" flexDirection="row">
                                    <CustomDiv display="flex" flexDirection="column" justifyContent="center" maxWidth="50%" flex="0 0 50%">
                                        <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Amount</GeneralSmText>
                                        <NumberFormat
                                            value={depositInfo.amount}
                                            displayType="text"
                                            thousandSeparator
                                            decimalScale={2}
                                            fixedDecimalScale
                                            prefix={"N"}
                                            renderText={(value) => <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">{`${value}`}</GeneralSmText>} />
                                    </CustomDiv>

                                    <CustomDiv display="flex" flexDirection="column" justifyContent="center" maxWidth="50%" flex="0 0 50%">
                                        <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="right" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Description</GeneralSmText>
                                        <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize" margin="0.1rem 0">{depositInfo.description}</GeneralMdText>
                                    </CustomDiv>
                                </CustomDiv>
                                <SummaryDivider />
                            </ContentFullColumn>

                        </>)}



                    {typeUrl === "Loan" && (
                        <>
                            <ContentFullColumn>
                                <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="center" color="#56C0BF" fontWeight="400" textTransform="Capitalize">{savedData.accountName} ({savedData.accountNumber})</GeneralMdText>
                                <NumberFormat
                                    value={savedData.accountBalance}
                                    displayType="text"
                                    thousandSeparator
                                    decimalScale={2}
                                    fixedDecimalScale
                                    prefix={"N"}
                                    renderText={(value) => <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="center" color="#F7F7F7" fontWeight="400" textTransform="Capitalize" margin="0.3rem 0">{`${value}`}</GeneralSmText>} />
                                <SummaryDivider />
                            </ContentFullColumn>
                            <ContentFullColumn>
                                <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem">
                                    <CustomDiv display="flex" flexDirection="column" maxWidth="50%" flex="0 0 50%">
                                        <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Loan Amount</GeneralSmText>
                                        <NumberFormat
                                            value={savedData.amount}
                                            displayType="text"
                                            thousandSeparator
                                            decimalScale={2}
                                            fixedDecimalScale
                                            prefix={"N"}
                                            renderText={(value) => <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">{`${value}`}</GeneralSmText>} />
                                    </CustomDiv>

                                    <CustomDiv display="flex" flexDirection="column" maxWidth="50%" flex="0 0 50%">
                                        <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="right" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Tenor</GeneralSmText>
                                        <GeneralMdText fontSize="20px" lineHeight="25px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">3 Months</GeneralMdText>
                                    </CustomDiv>
                                </CustomDiv>
                            </ContentFullColumn>

                            <ContentFullColumn>
                                <CustomDiv display="flex" flexDirection="row" justifyContent="space-between" margin="1rem 0 0.5rem">
                                    <CustomDiv display="flex" flexDirection="column" maxWidth="50%" flex="0 0 50%">
                                        <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="left" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Monthly Repayment</GeneralSmText>
                                        <NumberFormat
                                            value={savedData.monthlyRepayment}
                                            displayType="text"
                                            thousandSeparator
                                            decimalScale={2}
                                            fixedDecimalScale
                                            prefix={"N"}
                                            renderText={(value) => <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="left" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">{`${value}`}</GeneralSmText>} />
                                    </CustomDiv>

                                    <CustomDiv display="flex" flexDirection="column" maxWidth="50%" flex="0 0 50%">
                                        <GeneralSmText fontSize="15px" lineHeight="25px" textAlign="right" color="#56C0BF" fontWeight="400" textTransform="Capitalize">Total Repayment</GeneralSmText>
                                        <NumberFormat
                                            value={savedData.totalRepayment}
                                            displayType="text"
                                            thousandSeparator
                                            decimalScale={2}
                                            fixedDecimalScale
                                            prefix={"N"}
                                            renderText={(value) => <GeneralSmText fontSize="20px" lineHeight="25px" textAlign="right" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">{`${value}`}</GeneralSmText>} />

                                    </CustomDiv>
                                </CustomDiv>
                                <SummaryDivider />
                            </ContentFullColumn>
                        </>)}



                    <ContentFullColumn>
                        <OTPFormContainer onSubmit={handleSubmit(verifyOTPForm)}>
                            <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%">
                                <FormInput name='otp' textAlign="center" width="100px" type="text" placeholder="OTP" {...register("otp")} maxLength={4} />
                            </CustomDiv>

                            <CustomDiv display="flex" flexDirection="row" justifyContent="center" margin="0.5rem 0">
                                {errors.otp ? (
                                    <GeneralSmText fontSize="13px" lineHeight="25px" textAlign="center" color="#FC7620" textTransform="unset" opacity="0.8" >
                                        {errors.otp.message}
                                    </GeneralSmText>) : (
                                    <GeneralSmText fontSize="13px" lineHeight="25px" textAlign="center" color="#FFFFFF" fontWeight="400" textTransform="Capitalize">Enter your Transaction PIN</GeneralSmText>
                                )}
                            </CustomDiv>

                            <ContentButtonWrapper>
                                <CustomDiv display="flex" flexDirection="row" width="100%">
                                    {typeUrl === "Loan" ? (
                                        <DefaultButton type='button' margin="10px"
                                            onClick={() => {
                                                setStepThree(false)
                                                    (setStepTwo(true));
                                            }}>Back</DefaultButton>
                                    ) : (
                                        <DefaultButton type='button' margin="10px" onClick={() => setStepTwo(false)}>Back</DefaultButton>
                                    )}
                                    <DefaultButton margin="10px">{loading ? "loading" : "Confirm"}</DefaultButton>
                                </CustomDiv>
                            </ContentButtonWrapper>
                        </OTPFormContainer>


                    </ContentFullColumn>


                </ContentRow>
            </SummaryContainer>
        </>
    )
}

export default OperationsSummary;