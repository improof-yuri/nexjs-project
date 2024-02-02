"use client";

import Navigation from "./Navigation";
import { Heading, Box, Flex } from "@chakra-ui/react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <Box w="100%" p={5} color="white" bg={"black"}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" fontSize={"36px"}>
          React Next ChakraUI Redux
        </Heading>
        <Box>
          <Navigation navLinks={navItems} />
        </Box>
      </Flex>
    </Box>
  );
}
