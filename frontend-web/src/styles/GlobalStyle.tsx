import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.color.black1};
        font-family: 'NanumSquareNeo';
        /* overflow-y: scroll; */
    }
/* 
    body {
        margin: 0;
        font-family: 'NanumSquareNeo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ::-webkit-scrollbar {
        display: none;
        }
    } */

`;

export default GlobalStyle;
