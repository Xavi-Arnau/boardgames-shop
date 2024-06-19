import products from "../data.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredProducts = products.filter((course) => {
    return course.name.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredProducts);
}
