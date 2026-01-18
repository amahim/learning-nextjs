"use client"
import "./globals.css";
import Navbar from "../Components/Navbar";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }) {
  const pathName = usePathname();


  return (
    <html>
      <body className="p-4 ">
       {
        pathName !== "/about" && <Navbar />
       }
        {children}
      </body>
    </html>
  );
}
