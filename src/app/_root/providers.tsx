"use client";

import { type ReactNode } from "react";

import {
  MantineProvider,
  defaultCssVariablesResolver,
  type MantineColorScheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { theme } from "@/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

type ProvidersProps = {
  children: ReactNode;
  defaultColorScheme: MantineColorScheme;
};

export default function Providers({
  defaultColorScheme,
  children,
}: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={theme}
        defaultColorScheme={defaultColorScheme}
        cssVariablesResolver={defaultCssVariablesResolver}
      >
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
