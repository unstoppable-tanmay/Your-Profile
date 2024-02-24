import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { JwtPayload, decode, verify } from "jsonwebtoken";
import { hashSync } from "bcrypt";

export const GET = async (
  req: NextRequest,
  { params }: { params: { username: string } }
) => {
  try {
    const username = params.username;

    const tokenResponse = req.cookies.get("token");
    if (!tokenResponse) {
      const isAvailableUser = await prisma.developers.findUnique({
        where: { username },
      });

      return NextResponse.json(isAvailableUser ? false : true);
    }

    const userDetails = decode(tokenResponse!.value);
    if (!userDetails) return NextResponse.json({ error: "Wrong JWT" });

    const isAvailableUser = await prisma.developers.findUnique({
      where: { username },
    });

    if (isAvailableUser?.username === (userDetails as JwtPayload).username)
      return NextResponse.json(true);

    return NextResponse.json(isAvailableUser ? false : true);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
