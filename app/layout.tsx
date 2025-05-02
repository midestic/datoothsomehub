import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "da_ToothSome_Hub",
  description: "We Bake The Best Cakes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 ">
          {" "}
          {children}
        </main>
      </body>
    </html>
  );
}
