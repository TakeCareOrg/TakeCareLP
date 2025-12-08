import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation avec Zod
    const validatedData = contactFormSchema.parse(body);

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true pour le port 465, false pour les autres ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "takecareaimedical@gmail.com",
      subject: `Nouveau message de contact: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message de contact</h2>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${
              validatedData.firstName
            } ${validatedData.lastName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${
              validatedData.email
            }</p>
            <p style="margin: 10px 0;"><strong>Sujet:</strong> ${
              validatedData.subject
            }</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="color: #666; line-height: 1.6;">${validatedData.message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

          <p style="color: #999; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact du site.
          </p>
        </div>
      `,
      text: `
Nouveau message de contact

Nom: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Sujet: ${validatedData.subject}

Message:
${validatedData.message}
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Données invalides", errors: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
