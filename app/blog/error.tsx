"use client";

import { Heading } from "@chakra-ui/react";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <Heading as="h2" fontSize={"24px"}>
      Oops!!! {error.message}
    </Heading>
  );
}
