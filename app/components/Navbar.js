import Link from "next/link";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
