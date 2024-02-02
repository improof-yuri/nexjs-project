"use client";

import { ListItem, UnorderedList, Link as ChakraLink } from "@chakra-ui/react";

type Props = {
  posts: any[];
};

export const Posts = ({ posts }: Props) => {
  return (
    <UnorderedList>
      {posts.map((post: { id: string; title: string }) => (
        <ListItem key={post.id} m={3} color={"black"}>
          <ChakraLink
            href={`blog/${post.id}`}
            _hover={{ textDecoration: "underline" }}
          >
            {post.title}
          </ChakraLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
