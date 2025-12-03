// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oráculo Exchange — Brazilian Event Contracts",
  description:
    "Oráculo Exchange is a Brazilian event-contracts platform where you can trade on yes/no questions about the future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
