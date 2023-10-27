import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from '@/styles/GlobalStyle';
import { Provider } from 'jotai';
import '@/styles/font.css';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
