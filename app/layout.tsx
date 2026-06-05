import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Standard of Excellence | Mentoring and Leadership Society",
  description: "Empowering boys, teenagers, and men through mentorship, character, and leadership development. Led by Dr. Timothy Fairley.",
  keywords: "mentorship, leadership, mentoring non-profit, Timothy Fairley, Standard of Excellence, youth development",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-950 text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
