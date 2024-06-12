"use client";

import { type ReactNode } from "react";
import {
  MantineProvider,
  defaultCssVariablesResolver,
  type MantineColorScheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { theme } from "@/theme";

type ProvidersProps = {
  children: ReactNode;
  defaultColorScheme: MantineColorScheme;
};

export default function Providers({
  defaultColorScheme,
  children,
}: ProvidersProps) {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme={defaultColorScheme}
      cssVariablesResolver={defaultCssVariablesResolver}
    >
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
}
