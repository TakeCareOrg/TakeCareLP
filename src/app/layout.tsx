import type { Metadata } from "next";
import "./style.css";

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
      <body>{children}</body>
    </html>
  );
}
