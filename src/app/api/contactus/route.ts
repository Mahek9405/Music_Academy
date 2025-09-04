import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Contact from "@/models/contact";

export async function POST(req: Request) {
  try {
    await connect();

    const body = await req.json();
    const { name, email, subject, message } = body;

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    return NextResponse.json({ success: true, message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { success: false, message: "Error saving message" },
      { status: 500 }
    );
  }
}
