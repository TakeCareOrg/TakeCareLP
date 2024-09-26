import type { Metadata } from "next";
import { I18NProvider } from "@/app/i18n/i18n-provider";
import { EnvProvider } from "@/app/providers/env-provider";

import "./styles/globals.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const techna = localFont({
  src: "../../public/fonts/techna_regular-webfont.woff",
  variable: "--font-techna",
});

export const metadata: Metadata = {
  title: "TakeCare",
  description:
    "Meet Andrew, the first AI medical doctor, and browse the whole app to take care of your physical and mental health.",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "TakeCare",
    description:
      "Meet Andrew, the first AI medical doctor, and browse the whole app to take care of your physical and mental health.",
    type: "website",
    images: "/preview-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${techna.variable} ${jakarta.variable}`}>
        <EnvProvider config={JSON.stringify(process.env)}>
          <I18NProvider>{children}</I18NProvider>
        </EnvProvider>
      </body>
    </html>
  );
}
