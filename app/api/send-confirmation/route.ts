import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, zipcode, message } = body;

    // 1️⃣ Send confirmation email to customer
    if (email) {
      await resend.emails.send({
        from: "Nova Runner & Binding <info@novarunnerbinding.com>",
        to: [email],
        subject: "We received your request",
        replyTo: "novarunnerbinding@gmail.com",
        html: `
          <div style="font-family: Arial; line-height: 1.6;">
            <h2>Thanks for reaching out to Nova Runner & Binding Co.</h2>
            <p>Hi ${name?.trim() ? name : "there"},</p>
            <p>
              We received your request${
                serviceType ? ` for <strong>${serviceType}</strong>` : ""
              } and will follow up shortly.
            </p>
            <p>
              If you have photos or measurements, replying to this email helps us prepare faster.
            </p>
            <p>— Nova Runner & Binding Co.</p>
          </div>
        `,
      });
    }

    // 2️⃣ Send INTERNAL notification email
    await resend.emails.send({
      from: "Nova Runner & Binding <info@novarunnerbinding.com>",
      to: [
        "miguelamezcua987@gmail.com",
        "miguel1971amezcua@gmail.com",
        "geovana0676@gmail.com",
      ],
      subject: `NEW LEAD: ${serviceType} (${zipcode})`,
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <h2>New Website Lead Received</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Service:</strong> ${serviceType}</p>
          <p><strong>ZIP:</strong> ${zipcode}</p>
          <p><strong>Message:</strong> ${message || "None"}</p>

          <hr />

          <p>Submitted via novarunnerbinding.com</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email route error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}