import prisma from "@/app/utils/db";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { crop, market, quantity } = body;

    if (!crop || !market || !quantity) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const response = await prisma.VoiceResponse.create({
      data: { crop, market, quantity },
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save response", details: error.message },
      { status: 500 }
    );
  }
}
