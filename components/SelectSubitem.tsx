"use client";

import {
  Text,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
} from "@chakra-ui/react";

export default function SelectSubitem() {
  return (
    <>
      <Text fontSize={"20px"} ml={2}>
        Select subitem:
      </Text>
      <UnorderedList>
        <ListItem m={2} color={"black"}>
          <ChakraLink
            href={`/about/contacts`}
            _hover={{ textDecoration: "underline" }}
          >
            Contacts
          </ChakraLink>
        </ListItem>
        <ListItem m={2} color={"black"}>
          <ChakraLink
            href={`/about/team`}
            _hover={{ textDecoration: "underline" }}
          >
            Team
          </ChakraLink>
        </ListItem>
      </UnorderedList>
    </>
  );
}
