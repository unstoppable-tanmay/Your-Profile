import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    console.log(body);

    if (!body.username) return new Response("Enter User Name", { status: 400 });
    if (!body.password) return new Response("Enter Password", { status: 400 });
    if (!body.name) return new Response("Enter Display Name", { status: 400 });
    if (!body.designation)
      return new Response("Enter Designation", { status: 400 });
    if (!body.about) return new Response("Enter About", { status: 400 });
    if (!body.talksAbout)
      return new Response("Enter talksAbout", { status: 400 });
    if (!body.profileImage)
      return new Response("Enter Profile Image", { status: 400 });
    
    const {
      email,
      password,
      username,
      name,
      designation,
      profileImage,
      coverImage,
      about,
      talksAbout,
      socialProfiles,
      projects,
    } = body;

    const hashedPassword = hashSync(password, 10);

    const user = await prisma.developers.create({
      data: {
        email,
        password: hashedPassword,
        username,
        name,
        designation,
        profileImage,
        coverImage,
        about,
        talksAbout,
        socialProfiles: socialProfiles,
        projects,
      },
    });

    const token = sign(
      { id: user.id, username },
      process.env.JWT_SECRETE || "jwtsecretecode",
      { expiresIn: "30d" }
    );

    const { password: pass, ...rest } = user;

    let response = NextResponse.json(rest);
    response.cookies.set("token", token);

    return response;
  } catch (error) {
    return NextResponse.json({ error });
  }
};
