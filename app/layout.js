"use client";
import "./globals.css";
import Navbar from "../Components/Navbar";
import { usePathname } from "next/navigation";

import { Macondo } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

const bitcount = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-bitcount",
  weight: ["400", "700"],
});

const macondo = Macondo({
  subsets: ["latin"],
  variable: "--font-macondo",
  weight: "400",
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={`p-4 ${bitcount.variable} ${macondo.variable}`}>
        {pathName !== "/about" && <Navbar />}
        {children}
      </body>
    </html>
  );
}
