"use client";

import {
  Burger,
  Button,
  Center,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "./components/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Stack>
      <Header />
      <Center>{children}</Center>
    </Stack>
  );
}
