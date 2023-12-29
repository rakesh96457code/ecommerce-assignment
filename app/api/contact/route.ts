import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { firstname, lastname, email, phone, message } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!firstname) {
      return new NextResponse("First Name is required", { status: 400 });
    }
    if (!lastname) {
      return new NextResponse("Last Name is required", { status: 400 });
    }

    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }

    if (!message) {
      return new NextResponse("Message is required", { status: 400 });
    }

    const form = await prismadb.contactMessage.create({
      data: {
        firstname,
        lastname,
        email,
        phone,
        message,
        userId,
      },
    });

    return NextResponse.json(form);
  } catch (error) {
    console.log("[CONTACT_FORM_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
