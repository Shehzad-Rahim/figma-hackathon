import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; 


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query || query.length < 2) {
    return NextResponse.json({ error: "Invalid query" }, { status: 400 });
  }

  const searchQuery = `*[_type == "product" && (name match $search || description match $search)]{
    _id, "image": image.asset->url, name, price, slug
  }`;

  try {
    const products = await client.fetch(searchQuery, { search: `*${query}*` });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
