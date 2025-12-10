import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/core/components/providers/lang-provider";

export const metadata: Metadata = {
  title: "TakeCare AI - Votre santé, notre priorité",
  description:
    "Votre compagnon IA de confiance pour le diagnostic et les conseils santé.",
  icons: { icon: `/favicon.png` },
  openGraph: {
    title: "TakeCare AI - Votre santé, notre priorité",
    description:
      "Votre compagnon IA de confiance pour le diagnostic et les conseils santé.",
    images: `/alloappart-cover.jpg`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LangProvider defaultLang="fr">{children}</LangProvider>
      </body>
    </html>
  );
}
