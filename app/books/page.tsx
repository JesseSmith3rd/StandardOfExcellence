import Image from "next/image";
import Link from "next/link";

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Books by Dr. Timothy Fairley</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-12">
        Explore Dr. Fairley impactful books designed to guide, motivate, and develop boys, teenagers, and men through every stage of life.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Book 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs transform transition-transform hover:scale-105">
          <Image
            src="/book1.jpg"
            alt="Book Title 1"
            width={200}
            height={300}
            className="rounded-md mx-auto"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Book Title 1</h3>
          <p className="text-gray-600 mt-2 text-sm">
            A brief but powerful message of purpose and discipline to help young men achieve greatness.
          </p>
          <Link href="https://www.amazon.com" target="_blank">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Buy on Amazon
            </button>
          </Link>
        </div>

        {/* Book 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs transform transition-transform hover:scale-105">
          <Image
            src="/book2.jpg"
            alt="Book Title 2"
            width={200}
            height={300}
            className="rounded-md mx-auto"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Book Title 2</h3>
          <p className="text-gray-600 mt-2 text-sm">
            A thoughtful and inspiring guide for navigating life’s challenges through mentorship and mindset.
          </p>
          <Link href="https://www.amazon.com" target="_blank">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Buy on Amazon
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
