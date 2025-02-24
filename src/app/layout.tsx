"use client";

import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import { ChatbotScript } from "@/components/ChatbotScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} antialiased`}>
      <body className="min-h-screen bg-background">
        {children}
        <ChatbotScript />
      </body>
    </html>
  );
}
