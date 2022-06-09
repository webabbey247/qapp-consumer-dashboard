import React, { useState } from 'react';
import styled from 'styled-components';

export const OptionCardsContainer = styled.div`
padding: 0.3rem;
width: min(100%, 25rem);
background: #032130;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 1rem 0;
width: 100%;
justify-content: center;
`;

export const Option2Card = styled.div`
max-width: 49.5%;
width: 50%;
background: transparent;
// background: #09354A;
padding: 0.3rem;
display:flex;
justify-content: center;
`;

export const Option2ActiveCard = styled.div`
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



const TransferOptionsTabs = ({ toggleBank, setToggleBank }) => {
    const [interBank, setInterBank] = useState("false");
    return (
        <>
            <OptionCardsContainer>
              
              {interBank ? (
                    <Option2ActiveCard onClick={() => {
                        setInterBank(true)
                        setToggleBank("intra")
                    }}>
                    <OptionCardActiveText>To Bank One</OptionCardActiveText>
                    </Option2ActiveCard>
                ) : (
                    <Option2Card 
                    onClick={() => {
                        setInterBank(true)
                        setToggleBank("intra")
                    }}>
                        <OptionCardText>To Bank One</OptionCardText>
                    </Option2Card>
                )}

                {!interBank ? (
                    <Option2ActiveCard onClick={() => {
                        setInterBank(false)
                        setToggleBank("inter")
                    }}>
                    <OptionCardActiveText>To Other Banks</OptionCardActiveText>
                    </Option2ActiveCard>
                ) : (
                    <Option2Card onClick={() => {
                        setInterBank(false)
                        setToggleBank("inter")
                    }}>
                       <OptionCardText>To Other Banks</OptionCardText>  
                    </Option2Card>
                )}


            </OptionCardsContainer>
        </>
    )
}

export default TransferOptionsTabs