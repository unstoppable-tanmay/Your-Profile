import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { JwtPayload, decode } from "jsonwebtoken";

export const GET = async (req: NextRequest) => {
  try {
    const tokenResponse = req.cookies.get("token");
    if (!tokenResponse) return NextResponse.json({ error: "No JWT Found" });

    const userDetails = decode(tokenResponse.value);
    if (!userDetails) return NextResponse.json({ error: "Wrong JWT" });

    const user = await prisma.developers.findUnique({
      where: { username: (userDetails as JwtPayload).username },
    });

    if (!user)
      return NextResponse.json({ error: "User Not Found" }, { status: 401 });

    const { password: pass, ...rest } = user;

    let response = NextResponse.json(rest);

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
};
