import React from 'react';
import styled from "styled-components";
import { ContentRow, ContentFullColumn, Content2Column2, DefaultButton, GeneralMdText, CustomDiv } from '../../GlobalCss';
import {
    ContentForm,
    FormLabel,
    FormInput
} from '../../assets/styles/FormCss';

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


const LoanOptionsForm = ({setStepOne, setStepTwo, setStepThree}) => {
    return (
        <>
            <ContentForm>
                <ContentRow>
                  
                    <ContentFullColumn>
                        <FormLabel>Bank Name</FormLabel>
                        <FormInput type="text" name='bankName' placeholder="Access Bank"  />
                    </ContentFullColumn>

                    <Content2Column2>
                        <FormLabel>Amount</FormLabel>
                        <FormInput type="text" name='amount' placeholder="N0.00"  />
                    </Content2Column2>

                    <Content2Column2>
                        <FormLabel>Interest rate</FormLabel>
                        <FormInput type="text" name='interestRate' placeholder="Interest rate"  />
                    </Content2Column2>

                    <ContentFullColumn>
                        <FormLabel>Maximum Tenor (Months)</FormLabel>
                        <FormInput type="text" name='maximumTenor' placeholder="3"  />
                    </ContentFullColumn>

                    <Content2Column2>
                        <FormLabel>Monthly Repayment</FormLabel>
                        <FormInput type="text" name='monthlyRepayment' placeholder="N0.00"  />
                    </Content2Column2>

                    <Content2Column2>
                        <FormLabel>Total Repayment</FormLabel>
                        <FormInput type="text" name='totalRepayment' placeholder="N0.00"  />
                    </Content2Column2>

                    <ContentButtonWrapper>
                        <DefaultButton 
                        onClick={() => {
                            setStepOne(false);
                            setStepTwo(true);
                            setStepThree(false);
                        }}
                        >Continue</DefaultButton>
                        {/* <ContentRow>
                            <Content2Column2>
                                <DefaultButton>Back</DefaultButton>
                            </Content2Column2>

                            <Content2Column2>
                                <DefaultButton>Next</DefaultButton>
                            </Content2Column2>
                           
                        </ContentRow> */}
                    </ContentButtonWrapper>



                </ContentRow>
            </ContentForm>
        </>
    )
}
export default LoanOptionsForm