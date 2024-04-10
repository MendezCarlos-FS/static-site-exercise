import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={inter.className}>
        <header>
          <nav className="flex justify-evenly">
            <Link href={"./"}>Home</Link>
            <Link href={"./helloworld"}>Hello World</Link>
          </nav>
        </header>
        {children}
        <footer className="absolute bottom-0">
          <h4>Made with Next.js</h4>
          <h4>Made by Carlos Mendez as an exercise</h4>
        </footer>
      </body>
    </html>
  );
}
