import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RandomNews from "./components/RandomNews";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IBS.Com",
  description:
    "Berita Seputar Negara Indonesia Dimana Anda Bisa Menemukan Apa Yang Anda Butuhkan",
  icons: {
    icon: [
      { url: "/img/facivon-32x32.png", sizes: "32x32" },
      { url: "/img/facivon-16x16.png", sizes: "16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "IBS.Com",
    description:
      "Berita Seputar Negara Indonesia Dimana Anda Bisa Menemukan Apa Yang Anda Butuhkan",
    type: "article",
    authors: "HambaAllah",
  },
  keywords: ["IBS.Com", "Berita", "Berita Tentang Segalanya"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className="px-2 md:px-20">
          <Header />
          <Navbar />
          <section className="flex justify-between">
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  );
}
