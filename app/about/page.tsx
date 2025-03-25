import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">About Dr. Timothy Fairley</h1>

      <div className="mb-6">
        <Image
          src="/dr-fairley.jpg"
          alt="Dr. Timothy Fairley"
          width={250}
          height={250}
          className="rounded-full shadow-lg mx-auto"
        />
      </div>

      {/* Bio Section */}
      <div className="max-w-3xl text-gray-700 leading-relaxed text-lg">
        <p className="mb-4">
          Dr. Timothy Fairley is a passionate mentor, educator, and advocate for personal development. With a vision to
          empower boys, teenagers, and men, Dr. Fairley has dedicated his life to providing guidance, leadership, and
          inspiration. Through his mentorship programs and published works, he equips young individuals with the
          tools they need to succeed in life, fostering confidence, responsibility, and resilience.
        </p>

        <p className="mb-4">
          As the author of three impactful books, Dr. Fairley shares his wisdom and experiences, encouraging young men
          to make informed decisions, build strong character, and navigate challenges with a positive mindset. His 
          mission is to create a lasting impact on future generations by promoting education, discipline, and 
          self-improvement.
        </p>

        <p>
          With years of experience in mentorship and leadership development, Dr. Fairley continues to inspire and guide
          individuals toward excellence. His philosophy centers on the belief that with the right support, motivation,
          and mindset, anyone can achieve greatness.
        </p>
      </div>

      <Link href="/books">
        <button className="mt-10 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
          Explore His Books
        </button>
      </Link>
    </div>
  );
}
