import "./globals.css"; // Ensures Tailwind is loaded
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer

export const metadata = {
  title: "Standard of Excellence",
  description: "A mentorship program to guide boys, teenagers, and men toward success.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Navbar at the top */}
        <main className="min-h-screen">{children}</main>
        <Footer /> {/* ✅ Footer at the bottom */}
      </body>
    </html>
  );
}
