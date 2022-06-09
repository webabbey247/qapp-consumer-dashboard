import React, { useEffect, useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import NumberFormat from 'react-number-format';
import { TransferOptionsTabs } from '../OptionCards';
// import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContentRow, ContentFullColumn, CustomDiv, GeneralMdText, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput,
    FormInputIcon,
    BankAccountDropdown,
    BankAccountDropdownList
} from '../../assets/styles/FormCss';
import { AuthTopContainer } from '../../assets/styles/AuthCss';
import swal from 'sweetalert';

const TransferForm = ({ setStepTwo }) => {
    const [loading, setLoading] = useState(false);
    const [toggleBank, setToggleBank] = useState("intra");
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [bankDropdown, setBankDropdown] = useState(false);
    const [bankData, setBankData] = useState('');
    const [bank, setBank] = useState('');
    const data = localStorage.getItem("accounts");
    const accounts = JSON.parse(data);



    useEffect(() => {
        async function fetchData() {
            fetch('https://nigerianbanks.xyz')
                .then(response => response.json())
                .then(responseJson => {
                    setBankData(responseJson);
                })
                .catch(error => {
                    console.error(error);
                });
        }
        fetchData();
    }, []);


    const validationSchema = yup.object().shape({
        amount: yup
            .string()
            .trim()
            .required("Kindly provide your preferred amount!"),
        recipientAccount: yup
            .string()
            .trim()
            .required("Kindly provide recipient account number!"),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const transferForm = (data) => {
        setLoading(true);

        const transferData = {
            amount: data.amount,
            description: data.description,
            accountID: selectedAccount.accountId ? selectedAccount.accountId : "",
            accountName: selectedAccount.accountName ? selectedAccount.accountName : "",
            accountNumber: selectedAccount.accountNumber ? selectedAccount.accountNumber : "",
            beneficiary_name: data.recipientHolder,
            destination_account: data.recipientAccount,
            destination_bank: toggleBank === "inter" ? bank ? (`${bank.name}`) : "" : "",
            transactionType: toggleBank === "inter" ? "inter" : "intra",
        };

        if (selectedAccount === "") {
            swal("Error", "Kindly select preferred funding account", "error");
        } else if (toggleBank === "inter" &&  bank === ""){
            swal("Error", "Kindly select recipient account", "error");  
        } else {
            setStepTwo(true);
            localStorage.setItem("depositData", JSON.stringify(transferData))
        }
        console.log("Tracking transfer form Info", transferData);
        setLoading(false);
        reset();
    };

    return (
        <>
            <ContentForm onSubmit={handleSubmit(transferForm)}>
                <AuthTopContainer>
                    <CustomDiv display="flex" flexDirection="column">
                        <GeneralMdText fontWeight="700" fontSize="22px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="center">Deposit</GeneralMdText>
                    </CustomDiv>
                </AuthTopContainer>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>Amount</FormLabel>
                        <FormInput name='amount' type="text" placeholder="" {...register("amount")} />

                        {errors.amount && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.amount.message}
                            </GeneralSmText>)}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>Preferred Bank Account</FormLabel>
                        <FormInput onClick={() => setAccountDropdown(!accountDropdown)} name='bankAccount' type="text" placeholder="Select Account" readOnly {...register("bankAccount")}
                            value={selectedAccount ? (`${selectedAccount.accountName} (${selectedAccount.accountNumber})`) : ""} />
                        <FormInputIcon onClick={() => setAccountDropdown(!accountDropdown)}><FaChevronCircleDown fontSize="20px" color='#1A4153' /></FormInputIcon>
                        {accountDropdown && (
                            <BankAccountDropdown>
                                {accounts.map((item, index) => {
                                    return (
                                        <BankAccountDropdownList onClick={() => {
                                            setSelectedAccount(item);
                                            setAccountDropdown(false)
                                        }} key={index}>
                                            <CustomDiv display="flex" flexDirection="row" justifyContent="space-between">
                                                <GeneralSmText color="#F7F7F7" fontWeight="400" textTransform="capitalize" textAlign="left">{item.accountName} ({item.accountNumber})</GeneralSmText>
                                                <NumberFormat
                                                    value={item.balance}
                                                    displayType="text"
                                                    thousandSeparator
                                                    decimalScale={2}
                                                    fixedDecimalScale
                                                    prefix={"N"}
                                                    renderText={(value) => <GeneralSmText color="#F7F7F7" fontWeight="400" textTransform="capitalize" textAlign="right">{`${value}`}</GeneralSmText>} />
                                            </CustomDiv>
                                        </BankAccountDropdownList>

                                    )
                                })}
                            </BankAccountDropdown>
                        )}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <CustomDiv display="flex" justifyContent="center" flexDirection="column">
                            <TransferOptionsTabs toggleBank={toggleBank} setToggleBank={setToggleBank} />
                        </CustomDiv>
                    </ContentFullColumn>


                    <ContentFullColumn>
                        <FormLabel>Recipient Account Number</FormLabel>
                        <FormInput name='recipientAccount' type="text" placeholder="Recipient Account Number" {...register("recipientAccount")} maxLength="10" />

                        {errors.recipientAccount && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.recipientAccount.message}
                            </GeneralSmText>)}
                    </ContentFullColumn>

                    {toggleBank === "inter" && (
                        <ContentFullColumn>
                            <FormLabel>Recipient Bank</FormLabel>
                            <FormInput onClick={() => setBankDropdown(!bankDropdown)} name='recipientBank' type="text" placeholder="Select Bank" readOnly {...register("recipientBank")}
                                value={bank ? (`${bank.name}`) : ""} />
                            <FormInputIcon onClick={() => setBankDropdown(!bankDropdown)}><FaChevronCircleDown fontSize="20px" color='#1A4153' /></FormInputIcon>
                            {bankDropdown && (
                                <BankAccountDropdown>
                                    {bankData.map((item, index) => {
                                        return (
                                            <BankAccountDropdownList onClick={() => {
                                                setBank(item);
                                                setBankDropdown(false)
                                            }} key={index}>
                                                <CustomDiv display="flex" flexDirection="row" justifyContent="space-between">
                                                    <GeneralSmText color="#F7F7F7" fontWeight="400" textTransform="capitalize" textAlign="left">{item.name}</GeneralSmText>
                                                </CustomDiv>
                                            </BankAccountDropdownList>

                                        )
                                    })}
                                </BankAccountDropdown>
                            )}
                        </ContentFullColumn>
                    )}


                    <ContentFullColumn>
                        <FormLabel>Recipient Account Holder</FormLabel>
                        <FormInput name='recipientHolder' type="text" placeholder="Account Holder Name" value="Abiodun Balogun" {...register("recipientHolder")} readOnly />
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>Description</FormLabel>
                        <FormInput name='description' type="text" placeholder="" {...register("description")} />
                        {errors.description && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.description.message}
                            </GeneralSmText>)}
                    </ContentFullColumn>



                    <ContentFullColumn>
                        <CustomDiv display="flex" flexDirection="row" justifyContent="center" width="100%" margin="1rem 0 0">
                            <DefaultButton>{loading ? "Loading" : "Continue"}</DefaultButton>
                        </CustomDiv>
                    </ContentFullColumn>
                </ContentRow>
            </ContentForm>
        </>
    )
}
export default TransferForm;