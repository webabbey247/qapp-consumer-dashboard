import styled from "styled-components";

export const ContentForm = styled.form`
padding: 2rem 4rem;
`;
export const FormLabel = styled.label`
margin-bottom: 0.5rem;
font-size: 12px;
color: #F7F7F7;
font-weight: 400;
line-height: 16px;
display: inline-block;
`;

export const FormInput = styled.input`
height: 56px;
line-height: 50px;
width: 100%;
border-radius: 5px;
background: #032130;
padding: 0 20px;
font-size: 16px;
border: .1px solid #032130;
appearance: none;
margin-bottom: 15px;
color: #F7F7F7;

'&:focus': {
    box-shadow: none !important;
    border-color: #032130;
    color: #F7F7F7;
}
`;


