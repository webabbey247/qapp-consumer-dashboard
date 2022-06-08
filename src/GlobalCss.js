import styled, {createGlobalStyle} from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #09354A;
    --white: #ffffff;
    --deep-gray: #aeaeae;
    --sea-serpent: #64bfb6;
    --success: #20D071;
    --danger: #D24A4A;
    --font-dm-sans: "DM Sans", sans-serif;
    --background-opacity: rgba(234, 234, 234, 0.2);
    --border-opacity: rgba(234, 234, 234, 0.5);

    --linear-gradient-bg: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0.143) -87.84%,
      rgba(255, 255, 255, 0.055) 100%
    );
    --linear-gradient-bg-2: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0.143) -87.84%,
      rgba(255, 255, 255, 0.055) 100%
    );
    --linear-gradient-bg-3: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.19) -108.77%,
      rgba(255, 255, 255, 0) 147.42%
    );
  }
  *,
    *::before,
    *::after {
    box-sizing: border-box;
  }

  body, html{
    font-family: var(--font-dm-sans);    
    margin:0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -moz-text-size-adjust: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: var(--white);
    text-rendering: optimizeLegibility;
    background: var(--primary);
   }

   h1, h2, h3, h4, p {
    font-family: var(--font-dm-sans);
    margin: 0;
    padding: 0;
   }

   h1, h2, h3, h4 {
    color: var(--text-header-color);
   }

   p {
    color: var(--white);
    font-family: var(--font-dm-sans);    
   }
`;

export const SiteContainer = styled.div`
  width: min(100%, 75rem);
`;

export const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  flex: 1;
`;

export const ContentFullColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content2Column2 = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content3Column3 = styled.div`
  flex: 0 0 33.3%;
  max-width: 33.3%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content4Column4 = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const CustomDiv = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || null};
  align-items: ${(props) => props.alignItems || null};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  position: ${(props) => props.position || null};
  right: ${(props) => props.right || null};
  top: ${(props) => props.top || null};
  max-width:  ${(props) => props.maxWidth || "100%"};
  width: ${(props) => props.width || "100%"};
  flex: ${(props) => props.flex || "0 0 100%"};

`;

export const CustomButton = styled.button`
  padding: 0.6rem 2rem;
  background: ${(props) => props.background || "#00b2f0"};
  border-radius: 0;
  border: ${(props) => props.border || "1px solid #00b2f0"};
  margin: ${(props) => props.margin || "0 0 0 1rem"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "47.77px"};
  text-transform: ${(props) => props.textTransform || "unset"};
  color: ${(props) => props.color || "va(--white)"};
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: ${(props) => props.lineHeight || "22px"};
  text-align: ${(props) => props.textAlign || "center"};
  cursor: ${(props) => (props.disabled ? "none" : "pointer")};
  &:first-child {
    margin-left: 0;
  }
  &:disabled:hover {
    background: #b3e8fb;
    border: 1px solid #00b2f0;
    color: var(--white);
  }
  //   &:hover {
    //     background: #252b32;
    //     border: 1px solid #252b32;
    //     color: var(--white);
    //   }
  `;


export const DefaultButton = styled.button`
padding: 1rem 3rem;
background: ${(props) => props.background || "#FC7620"};
border-radius: 5px;
border: 1px solid ${(props) => props.border || "#FC7620"};
font-weight: 700;
font-size: 17px;
line-height: 22px;
text-align: center;
color: #032130;
text-align: center;
width: ${(props) => props.width || "100%"};
margin: ${(props) => props.margin || "0"};
`;

export const CustomLink = styled.a`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "11.9294px"};
  line-height:  ${(props) => props.lineHeight || "17px"};
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "left"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || null};
  display: ${(props) => props.display || 'flex'};
  border-radius: ${(props) => props.borderRadius || null};
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
`;

export const CustomRouterLink = styled(Link)`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "11.9294px"};
  line-height:  ${(props) => props.lineHeight || "17px"};
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "right"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || null};
  // display: ${(props) => props.display || 'flex'};
  border-radius: ${(props) => props.borderRadius || null};
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
`;


export const GeneralLgText = styled.h2`
font-weight: ${(props) => props.fontWeight || "700"};
font-size: ${(props) => props.fontSize || "36px"};
line-height:  ${(props) => props.lineHeight || "47px"};
color: ${(props) => props.color || "inherit"};
text-align: ${(props) => props.textAlign || "left"};
letter-spacing: ${(props) => props.spacing || "0.18px"};
font-family: ${(props) => props.fontFamily || "var(--font-graphix)"};
width: ${(props) => props.width || "100%"};
padding: ${(props) => props.padding || "0"};
margin: ${(props) => props.margin || "0"};
`;

export const GeneralMdText = styled.h4`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height:  ${(props) => props.lineHeight || "31px"};
  color: ${(props) => props.color || "#2b2d42"};
  text-align: ${(props) => props.textAlign || "left"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  text-transform: ${(props) => props.textTransform || "lowercase"};
`;

export const GeneralSmText = styled.p`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "12.7815px"};
  line-height:  ${(props) => props.lineHeight || "15px"};
  text-align: ${(props) => props.textAlign || "left"};
  letter-spacing: ${(props) => props.spacing || "0.18px"};
  color: ${(props) => props.color || ""};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  width: ${(props) => props.width || "100%"};
  text-transform: ${(props) => props.textTransform || "lowercase"};
  cursor: pointer;
`;