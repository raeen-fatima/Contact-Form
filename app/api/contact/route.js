import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Contact from "@/model/Contact";




export async function POST(req) {
  await connectDB();
  const { name, email, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  try {
    const newMsg = await Contact.create({ name, email, message });
    return NextResponse.json(
      { success: true, data: newMsg },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}



export async function GET() {
  return NextResponse.json({ message: "Contact API is live!" });
}
