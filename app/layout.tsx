import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parenting Virtue",
  description: "Calm, thoughtful parenting guidance powered by AI",
  // ADD THIS SECTION:
  icons: {
    icon: "img/favicon.ico",
    // Optional: If you have a png version for better quality
    // apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* IMPORTANT: Wrap children inside Navigation */}
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  );
}