import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    // Email content
    const mailOptions = {
      from: email,
      to: "zahidhuzaifa006@gmail.com", // Your email
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
