import { createGlobalStyle } from 'styled-components';

import OpenSansLight from '../assets/fonts/OpenSans-Light.ttf';
import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf';
import OpenSansMedium from '../assets/fonts/OpenSans-Medium.ttf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';
import OpenSansItalic from '../assets/fonts/OpenSans-Italic.ttf';
import OpenSansExtraBold from '../assets/fonts/OpenSans-ExtraBold.ttf';

export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansLight}') format('ttf');
    font-weight: 300;
    font-style: normal;
    font-display: 'swap';
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansRegular}') format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: 'swap';
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansMedium}') format('ttf');
    font-weight: 500;
    font-style: normal;
    font-display: 'swap';
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansItalic}') format('ttf');
    font-weight: 700;
    font-style: italic;
    font-display: 'swap';
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansSemiBold}') format('ttf');
    font-weight: 600;
    font-style: normal;
    font-display: 'swap';
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansBold}') format('ttf');
    font-weight: 700;
    font-style: normal;
    font-display: 'swap';
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansExtraBold}') format('ttf');
    font-weight: 800;
    font-style: normal;
    font-display: 'swap';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontPrimary};
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .fullscreen-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }
`;
