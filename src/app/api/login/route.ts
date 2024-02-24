import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // checking the parameters
    if (
      !body.password ||
      !body.username
    ) {
      return new Response("Missing parameters", { status: 400 });
    }

    const {
      password,
      username,
    } = body;

    const user = await prisma.developers.findUnique({where:{username:username}})

    if(!user) return NextResponse.json({error:"User Not Found"},{status:401})

    const hashedPassword = compareSync(password, user.password);

    if(!hashedPassword)return NextResponse.json({error:"Password Incorrect"},{status:401})

    const token = sign(
      { id: user.id, username },
      process.env.JWT_SECRETE || "jwtsecretecode",
      { expiresIn: "30d" }
    );

    const {password: pass, ...rest} = user;

    let response = NextResponse.json(rest);
    response.cookies.set("token", token);

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
};
