import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, serviceType } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Missing email" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Nova Runner & Binding <onboarding@resend.dev>",
      to: email,
      subject: "We received your request",
      replyTo: "novarunnerbinding@gmail.com",
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <h2>Thanks for reaching out to Nova Runner & Binding Co.</h2>

          <p>Hi ${name || "there"},</p>

          <p>
            We received your request
            ${serviceType ? ` for <strong>${serviceType}</strong>` : ""}
            and will follow up shortly.
          </p>

          <p>
            If you have photos or measurements, replying to this email helps us respond faster.
          </p>

          <p>
            — Nova Runner & Binding Co.
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });

  } catch {
    return NextResponse.json(
      { error: "Email failed" },
      { status: 500 }
    );
  }
}