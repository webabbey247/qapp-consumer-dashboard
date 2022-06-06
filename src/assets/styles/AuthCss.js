import styled from "styled-components";

export const AuthSection = styled.section`
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
width: 100%;
`;

export const AuthContainer = styled.div`
width: min(100%,33rem);
margin: 1rem 0 3rem;
padding: 2rem 2rem 1rem;
background: linear-gradient(148.41deg, rgba(196, 196, 196, 0.0728) -13.63%, rgba(9, 53, 74, 0.28) 154.42%);
backdrop-filter: blur(8px);
border-radius: 10px;
`;

export const AuthLogoContainer = styled.div`
padding: 2rem 0;
position: relative;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
`;

export const AuthLogo = styled.img`
width: 235px;
margin-top: 4rem;
height: auto;
`;

export const AuthTopContainer = styled.div`
padding: 1rem 3rem;
display: flex;
justify-content: space-between;
flex-Direction: row;
`;

export const AuthTopLTR = styled.div`
flex: 0 0 70;
max-width: 70%;
`;

export const AuthTopRTL = styled.div`
flex: 0 0 30;
max-width: 30%;
`;

export const AuthBottomContainer = styled.div`
`;
export const FlagContainer = styled.div`
background: #032130;
border-radius: 5px;
padding: 1rem;
`;

export const FlagImg = styled.img`
width: 25px;
height: 12.5px;
`;
