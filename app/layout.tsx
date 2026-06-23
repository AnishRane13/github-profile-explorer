import type { Metadata } from "next";
import localFont from "next/font/local";
import ThemeScript from "./components/ThemeScript";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GitHub Profile Explorer",
  description:
    "A GitHub profile clone built with Next.js that fetches real data from the GitHub REST API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
