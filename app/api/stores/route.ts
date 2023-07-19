import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId } = auth();
    const { name } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    if (!name) return new NextResponse("Name is required", { status: 400 });

    const existingStore = await prismadb.store.findMany({ where: { name } });
    if (existingStore)
      return new NextResponse("Store already exist", { status: 400 });

    const newStore = await prismadb.store.create({ data: { name, userId } });
    return NextResponse.json(newStore);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
