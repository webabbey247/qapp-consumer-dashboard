import React from 'react';
import styled from 'styled-components';
export const Option3CardsContainer = styled.div`
padding: 0.3rem;
width: min(100%, 33rem);
background: #032130;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 2rem;
max-width: 100%;
`;

export const Option3Card = styled.div`
flex: 0 0 32.5%;
max-width: 32.5%;
width: 100%;
background: #09354A;
padding: 0.3rem;
position:relative;
display:flex;
justify-content: center;
`;

export const OptionCardText = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 25px;
text-align: center;
color: #196589;
`;

export const OptionCardActiveText = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
cursor: none;
cursor: pointer;
`;



const LoanOptionTabs = ({stepOne, stepTwo, stepThree}) => {
    return (
        <>
            <Option3CardsContainer>
                {stepOne ? (<Option3Card><OptionCardActiveText>Loan Option</OptionCardActiveText></Option3Card>) : (<Option3Card><OptionCardText>Loan Option</OptionCardText></Option3Card>)}
                {stepTwo ? (<Option3Card><OptionCardActiveText>Eligibility</OptionCardActiveText></Option3Card>) : (<Option3Card><OptionCardText>Eligibility</OptionCardText></Option3Card>)}
                {stepThree ? (<Option3Card><OptionCardActiveText>Confirm Transaction</OptionCardActiveText></Option3Card>) : (<Option3Card><OptionCardText>Confirm Transaction</OptionCardText></Option3Card>)}
            </Option3CardsContainer>
        </>
    )
}

export default LoanOptionTabs