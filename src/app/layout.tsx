import type { Metadata } from "next";
import { Figtree, Gloock } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const gloock = Gloock({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gloock',
});

export const metadata: Metadata = {
  title: "Faces By Adunni | Makeup Artist Studio",
  description: "Professional makeup artistry services in Lagos. Book your appointment today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} ${gloock.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
