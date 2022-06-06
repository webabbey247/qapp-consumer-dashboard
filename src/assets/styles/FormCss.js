import styled from "styled-components";

export const ContentForm = styled.form`
padding: 1rem 2rem;
margin-bottom: 3rem
`;
export const FormLabel = styled.label`
margin-bottom: 0.5rem;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #F7F7F7;
mix-blend-mode: normal;
opacity: 0.8;
display: inline-block;
`;

export const FormInput = styled.input`
height: ${(props) => props.height || "56px"};
line-height: 50px;
border-radius: 5px;
background: #032130;
padding: 0 20px;
font-size: 16px;
border: .1px solid #032130;
appearance: none;
margin: ${(props) => props.margin || "0 0 15px 0"};
color: #196589;
width: ${(props) => props.width || "100%"};

'&:focus': {
    box-shadow: none !important;
    border-color: #032130;
    color: #F7F7F7;
}`;




