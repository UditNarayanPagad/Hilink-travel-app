import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hilink",
  description: "A travelling guide app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[100vw] overflow-x-hidden">
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
