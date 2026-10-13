import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/lib/tina";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await getSettings();
    return {
      title: data.settings.metaTitle ?? data.settings.siteName,
      description:
        data.settings.metaDescription ?? data.settings.tagline ?? undefined,
    };
  } catch {
    return {
      title: "CFMC WebCompany SpA",
      description:
        "Desarrollo de software, soluciones web, aplicaciones y consultoría tecnológica en Talca, Chile.",
    };
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
