import { routes } from "@/routes";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Flex
      component="header"
      justify="spa
    ce-between"
      p="xl"
    >
      <Flex justify="center" align="center">
        <Image
          src="/kzargentina.png"
          alt="Logo"
          width={500}
          height={50}
          style={{}}
        />
      </Flex>
      <Flex component="nav" gap="lg" align="center">
        {routes.map(({ name, path }) => (
          <Text key={path}>{name.toUpperCase()}</Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
