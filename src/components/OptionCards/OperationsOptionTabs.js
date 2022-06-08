import React from 'react';
import styled from 'styled-components';

export const OptionCardsContainer = styled.div`
padding: 0.3rem;
width: min(100%, 25rem);
background: #032130;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 2rem;
max-width: 100%;
`;

export const Option2Card = styled.div`
max-width: 49.5%;
width: 50%;
background: #09354A;
padding: 0.3rem;
display:flex;
justify-content: center;
`;

export const Option3Card = styled.div`
flex: 0 0 32.5%;
max-width: 32.5%;
width: 100%;
background: #09354A;
padding: 0.6rem;
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



const OperationsOptionTabs = ({stepTwo}) => {
    return (
        <>
            <OptionCardsContainer>
            <Option2Card>
                            {
                            stepTwo ? (
                                <OptionCardText>Transaction Detail</OptionCardText>) : (
                                <OptionCardActiveText>Transaction Detail</OptionCardActiveText>  
                                )
                            }
                            </Option2Card>
            <Option2Card>
                            {
                            stepTwo ? (
                                <OptionCardActiveText>Confirm Transaction</OptionCardActiveText>) : (
                                <OptionCardText>Confirm Transaction</OptionCardText>  
                                )
                            }                            
                            </Option2Card>
            </OptionCardsContainer>
        </>
    )
}

export default OperationsOptionTabs