import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { posts } from "../posts";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = headers();

  const type = headerList.get("Content-type");

  const cookiesList = cookies();

  const coo2 = cookiesList.get("Cookie_1")?.value;

  // logic delete post
  // redirect("/blog");

  return NextResponse.json({ id, type, coo2 });
}

export async function GET(req: Request) {
  const id = parseInt(req.url.slice(-1));

  const post = posts[id - 1];

  if (!post) {
    return NextResponse.json({});
  }

  return NextResponse.json(post);
}
