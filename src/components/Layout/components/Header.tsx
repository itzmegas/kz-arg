import { routes } from "@/routes";
import { Flex, Text, Image as MantineImage, Center } from "@mantine/core";

import Image from "next/image";
import React from "react";
import KzArgentinaLogo from "./KzArgentinaLogo";

import classes from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <Flex component="header" justify="space-between" className={classes.header}>
      <Center>
        <KzArgentinaLogo className={classes.logo} />
      </Center>
      <Flex component="nav" gap="lg" align="center">
        {routes.map(({ name, path }) => (
          <Link key={name} href={path}>
            <Text key={path}>{name.toUpperCase()}</Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
