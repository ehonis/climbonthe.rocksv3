import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const ropes = await prisma.RopeRoute.findMany();
  return NextResponse.json({ ropes });
}
