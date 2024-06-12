"use client";

import { createTheme } from "@mantine/core";

const colors = {
  primaryColor: "blue",
  secondaryColor: "green",
  stateColors: {
    error: "red",
    warning: "yellow",
  },
} as const;

export const theme = createTheme({
  primaryColor: colors.primaryColor,
  primaryShade: {
    light: 6,
    dark: 8,
  },
  fontFamily: "Roboto, system-ui",
});

export type AppTheme = typeof theme;
