import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Enroll from "@/models/enroll";

export async function POST(req: Request) {
  try {
    await connect();

    const body = await req.json();
    const { name, email, phone, age, experience, schedule, course } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Name, Email, and Phone are required" },
        { status: 400 }
      );
    }

    const newEnroll = new Enroll({
      name,
      email,
      phone,
      age,
      experience,
      schedule,
      course,
    });

    await newEnroll.save();

    return NextResponse.json({
      success: true,
      message: `Successfully enrolled in ${course}`,
    });
  } catch (error) {
    console.error("Error saving enrollment:", error);
    return NextResponse.json(
      { success: false, message: "Error saving enrollment" },
      { status: 500 }
    );
  }
}
