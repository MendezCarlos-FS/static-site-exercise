import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Static Site Exercise",
  description: "A basic static site made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " mx-auto max-w-5xl"}>
        <header>
          <nav className="flex justify-evenly">
            <Link href={"/"}>Home</Link>
          </nav>
        </header>
        <Suspense>
          {children}
        </Suspense>
        <footer className="bottom-0">
          <h4>Made with Next.js</h4>
          <h4>Made by Carlos Mendez</h4>
        </footer>
      </body>
    </html>
  );
}
