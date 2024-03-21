import type { Metadata } from "next";
import "./style.css";
import { I18NProvider } from "@/core/i18n/i18n-provider";
import { EnvProvider } from "@/core/providers/env-provider";

export const metadata: Metadata = {
  title: "TakeCare",
  description: "oui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EnvProvider config={JSON.stringify(process.env)}>
          <I18NProvider>{children}</I18NProvider>
        </EnvProvider>
      </body>
    </html>
  );
}
