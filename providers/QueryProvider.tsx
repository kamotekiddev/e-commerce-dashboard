"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const queryClient = new QueryClient();

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
