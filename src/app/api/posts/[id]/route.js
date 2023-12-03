import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  // Fetch Data

  const { id } = params;
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error: ${err}`, { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  // Fetch Data

  const { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    return new NextResponse(`Post with ID: ${id} is deleted successfully.`, { status: 200 });
  } catch (err) {
    return new NextResponse(`Database Error: ${err}`, { status: 500 });
  }
};
