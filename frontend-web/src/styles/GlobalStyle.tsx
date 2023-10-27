import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.color.black1};
        font-family: 'NanumSquareNeo';
    }
`;

export default GlobalStyle;
