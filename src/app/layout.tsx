import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco Nouvelle Aquitaine - Isolez votre bien",
  description:
    "Isolez votre bien avec Eco Nouvelle Aquitaine et bénéficiez d'un financement à 0% d'intérêt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-TB8QF4NV" />
    </html>
  );
}
