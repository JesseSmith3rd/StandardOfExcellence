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
            <Link href="about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="books" className="hover:text-blue-600 transition">
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

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center bg-blue-600 text-white text-center px-6">
        <h1 className="text-5xl font-bold">Welcome to Standard of Excellence</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Empowering boys, teenagers, and men through mentorship and leadership development.
        </p>
        <Link href="about">
          <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
            Learn More
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About Dr. Timothy Fairley</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Dr. Fairley is dedicated to guiding young men toward success through mentorship and education.
        </p>
        <div className="mt-6">
          <Image src="/dr-fairley.jpg" alt="Dr. Fairley" width={250} height={250} className="rounded-full mx-auto shadow-lg" />
        </div>
        <Link href="#books">
          <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Featured Books
          </button>
        </Link>
      </section>

      {/* Books Section */}
      <section id="books" className="bg-gray-100 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Featured Books</h2>
        <p className="mt-4 text-lg text-gray-600">Explore books by Dr. Timothy Fairley.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 max-w-sm transform transition-transform hover:scale-105 hover:shadow-lg">
            <Image src="/book1.jpg" alt="Book 1" width={200} height={300} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Book Title 1</h3>
            <p className="text-gray-600 mt-2">Short description of Book 1.</p>
            <Link href="https://www.amazon.com" target="_blank">
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-transform duration-300">
                Buy on Amazon
              </button>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 max-w-sm transform transition-transform hover:scale-105 hover:shadow-lg">
            <Image src="/book2.jpg" alt="Book 2" width={200} height={300} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Book Title 2</h3>
            <p className="text-gray-600 mt-2">Short description of Book 2.</p>
            <Link href="https://www.amazon.com" target="_blank">
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-transform duration-300">
                Buy on Amazon
              </button>
            </Link>
          </div>
        </div>
      </section>

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
