import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";


// Import Roboto font with weights 400, 500, 700
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-roboto", // optional if you want to use as a CSS variable
});

export const metadata: Metadata = {
  title: "Bloomit",
  description: "Bloomit IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
