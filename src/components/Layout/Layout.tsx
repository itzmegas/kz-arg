"use client";

import {
  AppShell,
  Burger,
  Button,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" flex={1}>
            KZ ARG
            <Group ml="xl" justify="space-between" visibleFrom="sm">
              <UnstyledButton>Home</UnstyledButton>
              <UnstyledButton>Blog</UnstyledButton>
              <UnstyledButton>Contacts</UnstyledButton>
              <UnstyledButton>Support</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      {/*   <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
      <AppShell.Aside p="md">ASIDE</AppShell.Aside>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
