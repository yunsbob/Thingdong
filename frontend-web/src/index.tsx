import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '@/styles/GlobalStyle';
import { Provider } from 'jotai';
import '@/styles/font.css';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import AppRouter from '@/router/routes';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
          <GlobalStyle />
          <AppRouter />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
