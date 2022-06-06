import React from 'react';
import styled from 'styled-components';

export const OptionCardsContainer = styled.div`
padding: 0.5rem;
width: min(100%, 35rem);
background: #032130;
border-radius: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 2rem;
`;

export const Option2Card = styled.div`
flex: 0 0 49%;
max-width: 49%;
width: 100%;
background: #09354A;
padding: 0.5rem;
position:relative;
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

// export const Option2ActiveCard = styled.div`
// flex: 0 0 50%;
// max-width: 50%;
// background: #09354A;
// padding: 0.8rem;
// `;

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



const CardOptionsCard = ({stepOne, stepTwo, stepThree}) => {
    return (
        <>
            <OptionCardsContainer>
            <Option3Card>
                            {
                            stepOne ? (
                                <OptionCardActiveText >Select Card</OptionCardActiveText>) : (
                                <OptionCardText>Select Card</OptionCardText>  
                                )
                            }
                            </Option3Card>
            <Option3Card>
                            {
                            stepTwo ? (
                                <OptionCardActiveText>Action</OptionCardActiveText>) : (
                                <OptionCardText>Action</OptionCardText>  
                                )
                            }                            
                            </Option3Card>
            <Option3Card>
                             {
                            stepThree? (
                                <OptionCardActiveText>Verification</OptionCardActiveText> ) : (
                                <OptionCardText>Verification</OptionCardText>  
                                )
                            }  
                           
                            </Option3Card>
            </OptionCardsContainer>
        </>
    )
}

export default CardOptionsCard