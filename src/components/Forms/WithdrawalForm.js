import React, { useEffect, useState } from 'react';
// import { Eye, EyeOff } from 'react-feather';
import { FaChevronCircleDown } from 'react-icons/fa';
import NumberFormat from 'react-number-format';
// import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContentRow, ContentFullColumn, CustomDiv, GeneralMdText, DefaultButton, GeneralSmText } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInputDropdownIcon,
    FormInput,
    BankAccountDropdown,
    BankAccountDropdownList
} from '../../assets/styles/FormCss';
import { AuthTopContainer } from '../../assets/styles/AuthCss';
import { isEmpty } from 'lodash';

const WithdrawalForm = ({setStepTwo, accounts}) => {
    const [loading, setLoading] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState('');
    // const data = localStorage.getItem("accounts");
    // const accounts = JSON.parse(data);

    console.log("account dropdown checker", accounts);


    const validationSchema = yup.object().shape({
        amount: yup
            .string()
            .trim()
            .required("Kindly provide your preferred amount!"),
        bankAccount: yup
            .string()
            .trim()
            .required("Kindly select your preferred bank account!"),
    });

    const { register, handleSubmit, reset, formState } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { errors } = formState;

    const depositForm = (data) => {
        setLoading(true);

        const stepOneInfo = {
            amount: data.amount,
             bankAccount:  selectedAccount.accountId ? selectedAccount.accountId : "",
             accountName:  selectedAccount.accountName ? selectedAccount.accountName : "",
             accountNumber:  selectedAccount.accountNumber ? selectedAccount.accountNumber : "",
             description: data.description
        };

        if (stepOneInfo.amount === "" || stepOneInfo.bankAccount === "") {
            console.log(stepOneInfo)
        } else {
            setStepTwo(true);
            localStorage.setItem("depositData", JSON.stringify(stepOneInfo))
        }
        console.log("Tracking deposit form Info", stepOneInfo);
        setLoading(false);
        reset();
    };

    return (
        <>
            <ContentForm onSubmit={handleSubmit(depositForm)}>
            <AuthTopContainer>
                    <CustomDiv display="flex" flexDirection="column">
                        <GeneralMdText fontWeight="700" fontSize="22px" lineHeight="36px" color="#F7F7F7" textTransform="capitalize" textAlign="center">Withdrawal</GeneralMdText>
                    </CustomDiv>
                </AuthTopContainer>
                <ContentRow>
                    <ContentFullColumn>
                        <FormLabel>Amount</FormLabel>
                        <FormInput name='amount' type="text" placeholder="" {...register("amount")}  />

                        {errors.amount && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.amount.message}
                            </GeneralSmText>)}
                    </ContentFullColumn>

                      <ContentFullColumn>
                        <FormLabel>Preferred Bank Account</FormLabel>
                        <FormInput onClick={() => setAccountDropdown(!accountDropdown)} name='bankAccount' type="text" placeholder="Select bank" readOnly {...register("bankAccount")}
                        value={selectedAccount ? (`${selectedAccount.accountName} (${selectedAccount.accountNumber})`) : ""} />
                        <FormInputDropdownIcon onClick={() => setAccountDropdown(!accountDropdown)}><FaChevronCircleDown fontSize="20px" color='#1A4153' /></FormInputDropdownIcon>
                        {accountDropdown  &&  (
                            <BankAccountDropdown>
                            {(!isEmpty(accounts)) && accounts.map((item, index) => {
                                return (
                                    <BankAccountDropdownList onClick={() => { 
                                        setSelectedAccount(item);
                                        setAccountDropdown(false)
                                    }} key={index}>
                                        <CustomDiv display="flex" flexDirection="row" justifyContent="space-between">
                                            <GeneralSmText color="#F7F7F7" fontWeight="400" textTransform="capitalize"  textAlign="left">{item.accountName} ({item.accountNumber})</GeneralSmText>
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

                        {errors.bankAccount && (
                            <GeneralSmText fontWeight="400" fontSize="13px" lineHeight="19px" color="#FC7620" textTransform="unset" opacity="0.8" textAlign="left" margin="-10px 0 20px">
                                {errors.bankAccount.message}
                            </GeneralSmText>)}
                    </ContentFullColumn>

                    <ContentFullColumn>
                        <FormLabel>Description</FormLabel>
                        <FormInput name='description' type="text" placeholder="" {...register("description")}  />
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
export default WithdrawalForm;