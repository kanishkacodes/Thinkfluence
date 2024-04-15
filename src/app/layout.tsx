import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thinkfluence",
  description: "powered by Explorex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
       
        {children}
        </body>
    </html>
  );
}
