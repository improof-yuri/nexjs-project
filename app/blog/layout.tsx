import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default function AboutBlog({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title={"About Blog"} />
      {children}
    </>
  );
}
