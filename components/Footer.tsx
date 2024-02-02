"use client";

import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      pos="fixed"
      w="100%"
      bottom={0}
      textAlign={"center"}
      py={"1rem"}
      bg={"white"}
    >
      Created by &copy;improof
    </Box>
  );
}
