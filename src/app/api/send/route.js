import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    console.log("Received data:", { email, subject, message });

    try {
      const data = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        react: (
          <>
            <h1>{subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>{message}</p>
          </>
        ),
      });

      console.log("Email sent:", data);
      res.status(200).json(data);
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
