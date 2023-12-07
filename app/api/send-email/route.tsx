import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_123456789");

export async function POST() {
  await resend.emails.send({
    from: "you@example.com",
    to: "user@gmail.com",
    subject: "hello world",
    react: <WelcomeTemplate name="Prince" />,
  });

  return NextResponse.json({});
}
