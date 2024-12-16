import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata Configuration
export const metadata: Metadata = {
  title: "Kakarotsol | Unleash the Power of Kakarot",
  description:
    "Join the ultimate journey with Goku as we explore the origins, transformations, and achievements of the legendary Saiyan warrior.",
  metadataBase: new URL("https://www.kakarotsol.com"), // Replace with your domain
  openGraph: {
    title: "Kakarotsol | Unleash the Power of Kakarot",
    description:
      "Join the ultimate journey with Goku as we explore the origins, transformations, and achievements of the legendary Saiyan warrior.",
    url: "https://www.kakarotsol.com",
    siteName: "Kakarotsol",
    images: [
      {
        url: "/images/goku.png", // Path to your meta image in the "public" folder
        width: 1200,
        height: 630,
        alt: "Kakarotsol - Unleash the Power of Kakarot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kakarotsol | Unleash the Power of Kakarot",
    description:
      "Join the ultimate journey with Goku as we explore the origins, transformations, and achievements of the legendary Saiyan warrior.",
    images: ["/images/goku2.png"], // Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
