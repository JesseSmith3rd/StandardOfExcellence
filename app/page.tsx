import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 py-4">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/books" className="hover:text-gray-300 transition">
              Books
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div
  className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
  {/* Navigation */}
  <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 py-4">
    <ul className="flex justify-center space-x-8 text-lg font-semibold">
      <li>
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>
      </li>
      <li>
        <Link href="/books" className="hover:text-gray-300 transition">
          Books
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>
      </li>
    </ul>
  </nav>

  {/* Hero Content */}
 
</div>
    </div>
  );
}
