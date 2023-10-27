import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.color.black1};
        font-family: 'NanumSquareNeo';
    }

    ul, ol, li {
        list-style: none;
    }
`;

export default GlobalStyle;
