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
height: ${(props) => props.height || "48px"};
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
text-align: ${(props) => props.textAlign || "left"};

&.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }
  
  &::placeholder {
    font-size: 13px;
    line-height: 25px;
    font-weight: 400;
    color: #196589;
    opacity: 0.6;
  }
  &:focus {
    color: #032130;
    background-color: #fff;
    border-color: #f7f7f7;
    outline: 0;
    box-shadow: none !important;
  }
`;



export const DialingCodeInputWrapper = styled.div`
display:flex;
flex-direction: row,
justify-content: flex-start;
`;

export const DialingCodeInput = styled.div`
  background: #032130;
  border: 1px solid #032130;
  height: 48px;
  margin-bottom: 1rem;
  margin-right: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    width: 30%;
  }
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 40%;
  }
`;

export const CountryFlag = styled.img`
  width: 35px;
  height: 20px;
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 30px;
    height: 19px;
  }
`;

export const CountryCode = styled.span`
  display: block;
  align-items: center;
  margin: auto 0.5rem;
`;

export const DialingCodeModalWrapper = styled.ul`
  position: absolute;
  z-index: 2;
  list-style: none;
  text-align: left;
  padding: 0;
  margin: 0 0 0 -1px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  background: #032130;
  border: 1px solid #032130;
  white-space: nowrap;
  max-height: 200px;
  overflow-y: scroll;
  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  @media only screen and (min-device-width: 360px) and (max-device-width: 763px) {
    max-width: 100px;
    overflow-x: hidden;
  }
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    max-width: 90px;
    overflow-x: hidden;
  }
`;

export const DialingCodeModalList = styled.li`
  line-height: initial;
  min-height: auto;
  text-align: center;
  padding: 5px 10px;
  background-color: transparent;
  margin-top: 0;
  list-style: none;
  border-bottom: 0.5px solid rgba(129, 129, 129, 0.5);
  outline: none;
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    padding: 3px 8px;
  }
`;

export const DialingCodeModalListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
`;

export const DialingCodeModalListIcon = styled.img`
  width: 35px;
  height: 20px;
  @media only screen and (min-device-width: 218px) and (max-device-width: 359px) {
    width: 30px;
    height: 19px;
  }
`;
export const DialingCodeModalListName = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  color: #ffffff;
  margin-left: 0.5rem;
`;

export const FormInputIcon = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
margin: 0px;
padding: 0px;
position: absolute;
right: 5%;
top: 13%;
font-size: 12px;
`;

export const BankAccountDropdown = styled.ul`
position: absolute;
z-index: 2;
list-style: none;
text-align: left;
padding: 0;
margin: 0 0 0 -1px;
box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
background: #032130;
border: 1px solid #032130;
white-space: nowrap;
max-height: 100px;
overflow-y: scroll;
transition: all 0.2s cubic-bezier(0.5,0,0,1.25),opacity 0.15s ease-out;
width: 95%;
top: 90px;
// border-radius: 5px;
`;

export const BankAccountDropdownList = styled.li`
line-height: initial;
min-height: auto;
text-align: center;
padding: 15px 10px;
background-color: transparent;
margin-top: 0;
list-style: none;
border-bottom: 0.5px solid rgba(129,129,129,0.5);
outline: none;

`;







