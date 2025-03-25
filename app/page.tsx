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
  <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center max-w-2xl">
    <h1 className="text-5xl font-bold"> Standard of Excellence: Mentoring and Leadership Society</h1>
    <p className="mt-4 text-lg">
      Empowering boys, teenagers, and men through mentorship and leadership development.
    </p>
    <Link href="/about">
      <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
        Learn More
      </button>
    </Link>
  </div>
</div>
    </div>
  );
}
