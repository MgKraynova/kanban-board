import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  client: QueryClient;
};

export const QueryProvider = ({ client, children }: TProps) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};