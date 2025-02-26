import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-10">
        <ul className="flex justify-center space-x-8 text-lg font-semibold text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/books" className="hover:text-blue-600 transition">
              Books
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Image */}
      <div className="mt-24 flex justify-center items-center">
        <Image
          src="/main-image.jpg"
          alt="Main Image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
