import "./globals.css"; // Ensures Tailwind is loaded
import Navbar from "./components/Navbar"; // Import the Navbar

export const metadata = {
  title: "Standard of Excellence",
  description: "A mentorship program to guide boys, teenagers, and men toward success.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Navbar added globally */}
        {children}
      </body>
    </html>
  );
}


