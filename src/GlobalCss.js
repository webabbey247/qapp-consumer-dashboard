import styled, {createGlobalStyle} from "styled-components";

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
