import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

export const GET = async (
  req: NextRequest,
  { params }: { params: { username: string } }
) => {
  try {
    const username = params.username;

    const user = await prisma.developers.findUnique({ where: { username } });

    if (!user)
      return NextResponse.json({ error: "No User Found" }, { status: 401 });

    const { password, email, id, ...rest } = user;

    let response = NextResponse.json(rest);

    return response;
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
};
