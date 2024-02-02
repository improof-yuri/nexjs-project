"use client";

import { Heading } from "@chakra-ui/react";

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Heading as="h2" fontSize={"24px"} textAlign={"center"} py={"2rem"}>
      {title}
    </Heading>
  );
}
