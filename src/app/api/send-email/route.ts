import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { to, subject, text, attachments } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
      attachments: attachments?.map((attachment: any) => ({
        filename: attachment.filename,
        content: attachment.content,
      })),
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." + error },
      { status: 500 },
    );
  }
}
