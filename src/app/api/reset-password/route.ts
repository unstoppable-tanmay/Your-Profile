import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { JwtPayload, verify } from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // checking the parameters
    if (!body.email || !body.password || !body.username) {
      return new Response("Missing parameters", { status: 400 });
    }

    const { email, password, username } = body;

    const tokenResponse = req.cookies.get("token");
    if (!tokenResponse) return NextResponse.json({ error: "No JWT Found" });

    const verified = verify(
      tokenResponse.value,
      process.env.JWT_SECRETE || "jwtsecretecode"
    );
    if (!verified) return NextResponse.json({ error: "Not A User" });

    const user = await prisma.developers.update({
      where: { username: username, email: email },
      data: { password: password },
    });

    if (!user)
      return NextResponse.json({ error: "Can Not Reset Password" }, { status: 401 });

    const { password: pass, ...rest } = user;

    let response = NextResponse.json(rest);

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
};
