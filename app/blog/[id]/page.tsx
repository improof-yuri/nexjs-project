import { getPost } from "@/services/getPosts";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPost(id);

  return (
    <>
      <h3 style={{ marginLeft: "15px", fontWeight: "bold" }}>{post.title}</h3>
      <p style={{ marginLeft: "15px" }}>{post.body}</p>
    </>
  );
}
