import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import Providers from "./_root/providers";
import { theme } from "@/theme";

import "@mantine/core/styles.css";
import "./globals.css";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kz Argentina",
  description: "La vuelta de Kz Argentina",
  icons: {
    icon: "/kz.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const defaultColorScheme = "light";

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/kz-lg.svg" />
      </head>
      <body className={inter.className}>
        <Providers defaultColorScheme={defaultColorScheme}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Layout>{children}</Layout>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
