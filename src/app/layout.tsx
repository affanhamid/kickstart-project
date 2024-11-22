import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import CustomCursor from "@/components/components/CustomCursor";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.className} antialiased w-screen h-screen overflow-hidden cursor-none`}
      >
        <CustomCursor />
        <main className="bg-[#18181b] w-screen h-screen">{children}</main>

        <Navbar />
      </body>
    </html>
  );
}
