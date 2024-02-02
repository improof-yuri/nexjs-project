import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SelectSubitem from "@/components/SelectSubitem";

export const metadata: Metadata = {
  title: "About | Next App",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={"About us"} />
      <SelectSubitem />
      {children}
    </>
  );
}
