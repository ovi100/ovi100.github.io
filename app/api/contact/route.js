import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // Can use other services like Outlook, SMTP, etc.
    auth: {
      user: "sayeed.abu02@gmail.com", // Your email
      pass: "sjaq tnkd jaoo prsg", // Your gmail app password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: "sayeed.abu02@gmail.com", // Your email to receive messages
      subject: subject
        ? subject
        : `New message from ${name.charAt(0).toUpperCase() + name.slice(1)}`,
      text: message,
      html: subject
        ? `
          <p>New message from <strong>${
            name.charAt(0).toUpperCase() + name.slice(1)
          }</strong></p> 
          <p><strong>Name:</strong> ${
            name.charAt(0).toUpperCase() + name.slice(1)
          }</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>`
        : `
          <p><strong>Name:</strong> ${
            name.charAt(0).toUpperCase() + name.slice(1)
          }</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
}
