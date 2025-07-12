import NavBar from "@/components/reuseables/nav-bar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/reuseables/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O. Agbeleshebioba & Co. | Expert Legal Services in Nigeria",
  description:
    "Professional legal services by Barrister Omolaja Agbeleshe. Specializing in immigration law, property development, and human rights advocacy in Nigeria.",
  keywords:
    "Nigerian lawyer, immigration law, property law, human rights, legal services, barrister, solicitor, Lagos lawyer",
  authors: [{ name: "Barrister Omolaja Agbeleshe" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "O. Agbeleshebioba & Co. | Expert Legal Services",
    description:
      "Professional legal services specializing in immigration law, property development, and human rights advocacy.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="max-w-[100vw] mt-5 overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
