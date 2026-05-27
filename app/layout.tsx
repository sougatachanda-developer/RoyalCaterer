import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const interSans = Inter({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const playFairDisplaySerif = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Caterer | Event Organizer",
  description: "Created by the Royal Caterer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${playFairDisplaySerif.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
