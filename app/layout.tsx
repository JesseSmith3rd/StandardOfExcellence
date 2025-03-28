import "./globals.css";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Standard of Excellence: Mentoring and Leadership Society",
  description: "Empowering boys, teenagers, and men through mentorship and leadership development.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />  {/* This makes Navbar appear on all pages */}
        <main>{children}</main>
      </body>
    </html>
  );
}
