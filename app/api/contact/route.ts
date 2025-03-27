import { Resend } from "resend";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import ContactEmail from "@/utils/email/contact";
import { contactSchema } from "@/components/ContactDrawer/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // ✅ Parse JSON body correctly in Next.js 13+
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // ✅ Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact form <${process.env.EMAIL_FROM}>`,
      to: [`${process.env.EMAIL_TO}`],
      subject: "Portfolio Contact form",
      react: ContactEmail(validatedData),
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email: " + error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { fields: err.flatten().fieldErrors, message: "Validation failed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
