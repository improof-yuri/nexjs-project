"use client";

import { Heading } from "@chakra-ui/react";
import { getAllPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";
import { Posts } from "@/components/Posts";
import { PostsSearch } from "@/components/PostsSearch";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then((result) => setPosts(result))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PostsSearch onSearch={setPosts} />
      {loading ? (
        <Heading as="h3" fontSize={"20px"} textAlign={"center"} py={"2rem"}>
          Loading...
        </Heading>
      ) : (
        <Posts posts={posts} />
      )}
    </>
  );
}
