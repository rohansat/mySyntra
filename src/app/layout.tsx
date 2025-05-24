import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syntra - Healthcare Administration Solutions",
  description:
    "Advanced AI-powered healthcare administration solutions that eliminate administrative burdens so you can focus on patient care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            <ClientBody>{children}</ClientBody>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
