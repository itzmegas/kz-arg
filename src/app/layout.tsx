import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import Providers from "./_root/providers";
import { theme } from "@/theme";

import "@mantine/core/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kz Argentina",
  description: "La vuelta de Kz Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultColorScheme = "dark";

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <Providers defaultColorScheme={defaultColorScheme}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
