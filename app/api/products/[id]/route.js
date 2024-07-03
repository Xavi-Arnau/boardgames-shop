import products from "../data.json";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id; // this is what will grab the string - use an UUID
  console.log(id);

  const product = products.find((item) => item.id === +id); //make sure it's number to number, maybe both should be string
  if (!product) {
    return NextResponse.json({});
  }
  return NextResponse.json(product);
}
