import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '@/styles/GlobalStyle';
import { Provider } from 'jotai';
import '@/styles/font.css';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import AppRouter from '@/router/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spinner } from '@/components/molecules/Spinner/Spinner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      staleTime: 1 * 60 * 1000,
    },
    mutations: {
      retry: 0,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider>
            <GlobalStyle />
            <AppRouter />
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  </Suspense>
);
