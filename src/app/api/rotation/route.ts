import { NextResponse } from "next/server";
import { fetchChampionRotation } from "@/utils/serverApi";

export async function GET() {
  try {
    const data = await fetchChampionRotation();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
