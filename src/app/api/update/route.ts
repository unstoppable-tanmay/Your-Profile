import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import { hashSync } from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const {
      email,
      username,
      password,
      name,
      designation,
      profileImage,
      coverImage,
      about,
      talksAbout,
      socialProfiles,
      projects,
    } = body;

    const tokenResponse = req.cookies.get("token");
    if (!tokenResponse) return NextResponse.json({ error: "No JWT Found" });

    const verified = verify(
      tokenResponse.value,
      process.env.JWT_SECRETE || "jwtsecretecode"
    );
    if (!verified) return NextResponse.json({ error: "Not A User" });

    const hashedPassword = hashSync(password, 10);

    const user = await prisma.developers.update({
      where: { username: username, email: email },
      data: {
        email,
        username,
        password: hashedPassword,
        name,
        designation,
        profileImage,
        coverImage,
        about,
        talksAbout,
        socialProfiles,
        projects,
      },
    });

    if (!user)
      return NextResponse.json(
        { error: "Can Not Update Data Retry" },
        { status: 401 }
      );

    const { password: pass, ...rest } = user;

    let response = NextResponse.json(rest);

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
};
