import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleDown } from 'react-icons/fa';
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { apiLoan } from '../../utils/config';
import { ContentRow, ContentFullColumn, Content2Column2, DefaultButton, CustomDiv, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput,
    FormInputIcon,
    BankAccountDropdown,
    BankAccountDropdownList
} from '../../assets/styles/FormCss';
import { TenureData } from '../../data/DummyData';

export const ContentButtonWrapper = styled.div`
padding: 1rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`;

export const LoanCardContainer = styled.div`
background: rgba(3, 33, 48, 0.57);
border-radius: 6px;
padding: 1rem  1rem 0.5rem;
margin: 1rem 3rem;
`;


const LoanOptionsForm = ({ setStepTwo, loanData }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loanDropdown, setLoanDropdown] = useState(false);
    const [tenureDropdown, setTenureDropdown] = useState(false);
    const [selectedLoan, setSelectedLoan] = useState('');
    const [selectedTenure, setSelectedTenure] = useState('');
    const [amortizationForm, setAmortizationForm] = useState(false);
    const [amortization, setAmortization] = useState(false);


    const validationSchema = yup.object().shape({
        amount: yup
            .string()
            .trim()
            .required("Kindly provide your preferred amount!"),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const loanForm = (data) => {
        setLoading(true);

        const stepOneData = {
            amount: data.amount,
            interestRate: selectedLoan ? (`${selectedLoan.interestRate}`) : "",
            tenor: selectedTenure ? (`${selectedTenure.value}`) : ""
        };

        

        if (stepOneData.interestRate === "") {
            console.log(stepOneData.interestRate);
            swal("Error", "Kindly select your preferred loan", "error");
        } else if (stepOneData.tenor === "") {
            swal("Error", "Kindly select your preferred loan tenure", "error");
        } else {
            apiLoan.post("/calculate-monthly-repayment", stepOneData).then((res) => {
                if (res.data === "" || res.data === undefined || res.data == null) {
                    swal("Error", "Something went wrong! Kindly confirm your inputs and try again", "error");
                } else {

                    const savedData = {
                        amount: data.amount,
                        tenor_in_months: selectedTenure ? (`${selectedTenure.value}`) : "",
                        loan_id: selectedLoan ? (`${selectedLoan.id}`) : "",
                        monthlyRepayment: res.data ? (`${res.data.monthlyRepayment}`) : "",
                        totalRepayment: res.data ? (`${res.data.totalRepayment}`) : "",
                    }
                    console.log("Hello Saveded Info", savedData);              
                    localStorage.setItem("savedData", JSON.stringify(savedData))
                    setAmortization(res.data ? res.data : "")
                    setAmortizationForm(true);
                }
            });
            console.log("Hello Form", stepOneData);
        }
        setLoading(false);
        reset();
    }

    return (
        <>
            <ContentForm onSubmit={handleSubmit(loanForm)}>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>Select Loan</FormLabel>
                        <FormInput onClick={() => setLoanDropdown(!loanDropdown)} name='loanType' type="text" placeholder="Select Loan" readOnly {...register("loanType")}
                            value={selectedLoan ? (`${selectedLoan.title}`) : ""} />
                        <FormInputIcon onClick={() => setLoanDropdown(!loanDropdown)}><FaChevronCircleDown fontSize="20px" color='#1A4153' /></FormInputIcon>
                        {loanDropdown && (
                            <BankAccountDropdown>
                                {loanData.map((item, index) => {
                                    return (
                                        <BankAccountDropdownList onClick={() => {
                                            setSelectedLoan(item);
                                            setLoanDropdown(false)
                                        }} key={index}>
                                            <CustomDiv display="flex" flexDirection="row" justifyContent="space-between">
                                                <GeneralSmText color="#F7F7F7" fontWeight="400" textTransform="capitalize" textAlign="left">{item.title}</GeneralSmText>
                                            </CustomDiv>
                                        </BankAccountDropdownList>

                                    )
                                })}
                            </BankAccountDropdown>
                        )}

                        {errors.loanType && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.loanType.message}
                            </GeneralSmText>)}
                    </ContentFullColumn>

                    <Content2Column2>
                        <FormLabel>Amount</FormLabel>
                        <FormInput type="text" name='amount' placeholder="0" {...register("amount")} />
                        {errors.amount && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.amount.message}
                            </GeneralSmText>)}
                    </Content2Column2>

                    <Content2Column2>
                        <FormLabel>Interest rate</FormLabel>
                        <FormInput type="text" name='interestRate' placeholder="Interest rate" readOnly {...register("interestRate")} value={selectedLoan ? (`${selectedLoan.interestRate}`) : ""} />
                    </Content2Column2>



                    <ContentFullColumn>
                        <FormLabel>Maximum Tenor (Months)</FormLabel>
                        <FormInput onClick={() => setTenureDropdown(!tenureDropdown)} type="text" name='tenure' placeholder="Select Loan" {...register("tenure")} readOnly value={selectedTenure ? (`${selectedTenure.value}`) : ""} />
                        {tenureDropdown && (
                            <BankAccountDropdown>
                                {TenureData.map((item, index) => {
                                    return (
                                        <BankAccountDropdownList onClick={() => {
                                            setSelectedTenure(item);
                                            setTenureDropdown(false)
                                        }} key={index}>
                                            <CustomDiv display="flex" flexDirection="row" justifyContent="space-between">
                                                <GeneralSmText color="#F7F7F7" fontWeight="400" textTransform="capitalize" textAlign="left">{item.Tenure}</GeneralSmText>
                                            </CustomDiv>
                                        </BankAccountDropdownList>

                                    )
                                })}
                            </BankAccountDropdown>
                        )}
                    </ContentFullColumn>

                    {amortizationForm && (
                        <>
                            <Content2Column2>
                                <FormLabel>Monthly Repayment</FormLabel>
                                <FormInput type="text" name='monthlyRepayment' placeholder="N0.00" value={amortization ? (`${amortization.monthlyRepayment}`) : ""} readOnly />
                            </Content2Column2>

                            <Content2Column2>
                                <FormLabel>Total Repayment</FormLabel>
                                <FormInput type="text" name='totalRepayment' placeholder="N0.00" value={amortization ? (`${amortization.totalRepayment}`) : ""} readOnly/>
                            </Content2Column2>
                        </>
                    )}


                    <ContentFullColumn>
                        <ContentButtonWrapper>
                        {amortizationForm ? (
                            <DefaultButton type='button' onClick={() => navigate("/dashboard/loans/eligibility")}>Check Eligibility</DefaultButton>
                            ) : (
                                <DefaultButton>{loading ? "Loading" : "Calculate Amortization"}</DefaultButton>
                            )}
                        </ContentButtonWrapper>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default LoanOptionsForm