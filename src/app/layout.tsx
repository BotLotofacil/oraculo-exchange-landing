// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const title = "Oráculo Exchange – Event Contracts Platform";
const description =
  "Oráculo Exchange is a Brazilian event-contracts platform where you can trade on simple YES/NO questions about the future.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(
    "https://oraculo-exchange-landing-production.up.railway.app"
  ),
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Oráculo Exchange",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
