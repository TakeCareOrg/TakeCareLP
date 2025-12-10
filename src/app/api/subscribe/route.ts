import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

export const dynamic = "force-dynamic";

const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = subscribeSchema.parse(body);

    // Configuration de l'authentification Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Vérifier si l'email existe déjà
    const checkResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:A", // Colonne A contient les emails
    });

    const existingEmails = checkResponse.data.values?.flat() || [];
    if (existingEmails.includes(email)) {
      return NextResponse.json(
        { success: false, message: "Cet email est déjà inscrit" },
        { status: 400 }
      );
    }

    // Ajouter l'email avec la date et l'heure
    const timestamp = new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:B", // Colonnes A (email) et B (date)
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, timestamp]],
      },
    });

    return NextResponse.json(
      { success: true, message: "Email enregistré avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Email invalide" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'enregistrement de l'email",
      },
      { status: 500 }
    );
  }
}
