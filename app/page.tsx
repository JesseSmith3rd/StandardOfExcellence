import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center bg-blue-600 text-white text-center px-6">
        <h1 className="text-5xl font-bold">Welcome to Standard of Excellence</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Empowering boys, teenagers, and men through mentorship and leadership development.
        </p>
        <Link href="/about">
          <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
            Learn More
          </button>
        </Link>
      </section><section className="relative w-full h-screen flex flex-col justify-center items-center bg-blue-600 text-white text-center px-6">
  <h1 className="text-5xl font-bold opacity-0 animate-fade-in-up">
    Welcome to Standard of Excellence
  </h1>
  <p className="mt-4 text-lg max-w-2xl opacity-0 animate-fade-in-up delay-200">
    Empowering boys, teenagers, and men through mentorship and leadership development.
  </p>
  <Link href="/about">
    <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
      Learn More
    </button>
  </Link>
</section>


      {/* About Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About Dr. Timothy Fairley</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Dr. Fairley is dedicated to guiding young men toward success through mentorship and education.
        </p>
        <div className="mt-6">
          <Image src="/dr-fairley.jpg" alt="Dr. Fairley" width={250} height={250} className="rounded-full mx-auto shadow-lg" />
        </div>
        <Link href="/about">
          <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Read More
          </button>
        </Link>
      </section>

      {/* Books Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Featured Books</h2>
        <p className="mt-4 text-lg text-gray-600">Explore books by Dr. Timothy Fairley.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">
            <Image src="/book1.jpg" alt="Book 1" width={200} height={300} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Book Title 1</h3>
            <p className="text-gray-600 mt-2">Short description of Book 1.</p>
            <Link href="/books">
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                View More
              </button>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 max-w-sm">
            <Image src="/book2.jpg" alt="Book 2" width={200} height={300} className="rounded-md mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Book Title 2</h3>
            <p className="text-gray-600 mt-2">Short description of Book 2.</p>
            <Link href="/books">
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">Want to reach out? Contact us today.</p>
        <Link href="/contact">
          <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
