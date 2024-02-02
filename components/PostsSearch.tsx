"use client";

import { getSearchPosts } from "@/services/getPosts";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};

export const PostsSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLDivElement> = async (event) => {
    event.preventDefault();

    const posts = await getSearchPosts(search);

    onSearch(posts);
  };

  return (
    <FormControl as="form" onSubmit={handleSubmit}>
      <FormLabel htmlFor="myInput" ml={"4px"}>
        Find posts
      </FormLabel>
      <Flex w="50%" ml={"4px"}>
        <Box flex="1" mr={2}>
          <Input
            id="myInput"
            type="search"
            placeholder="search"
            onChange={(event) => setSearch(event.target.value)}
          />
        </Box>
        <Button type="submit" colorScheme="blue" size="md">
          Search
        </Button>
      </Flex>
    </FormControl>
  );
};
