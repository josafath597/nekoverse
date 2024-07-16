'use client';
import { AppShell, Container } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';

const queryClient = new QueryClient();

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppShell
        w="100%"
        h="100%"
        pos="relative"
        header={{
          height: '5rem',
          offset: true,
        }}
      >
        <Header />
        <AppShell.Main>
          <Container size="lg" w="100%">
            {children}
          </Container>
          <Footer />
        </AppShell.Main>
      </AppShell>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
