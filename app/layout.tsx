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

export const metadata: Metadata = {
  title: "Nildo G. Lopes | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Nildo G. Lopes, desenvolvedor Full Stack especializado em aplicações web, APIs, automação e integrações.",
  keywords: [
    "Nildo Lopes",
    "Nildo G Lopes",
    "Desenvolvedor Full Stack",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
