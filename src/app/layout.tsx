import type { Metadata } from "next";
import { Roboto, Cardo } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const cardo = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Woodendot | Home of your furniture",
  description: "Award winning furniture design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${cardo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
