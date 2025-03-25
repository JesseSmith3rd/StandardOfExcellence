import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaBook, FaGraduationCap, FaMedal, FaAnchor } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">About Dr. Timothy Fairley</h1>

      {/* Profile Image */}
      <div className="mb-6">
        <Image
          src="/dr-fairley.jpg"
          alt="Dr. Timothy Fairley"
          width={250}
          height={250}
          className="rounded-full shadow-lg mx-auto"
        />
      </div>

      {/* Bio Sections with Icons */}
      <div className="max-w-4xl text-gray-700 text-lg leading-relaxed space-y-10">

        <div className="flex flex-col items-center">
          <FaUserTie className="text-4xl text-blue-600 mb-2" />
          <p>
            Dr. Timothy Fairley is the Chief Executive Officer and Founder of Standard of Excellence (SOE) Incorporated; a non-profit organization, 501(c)(3), that predominantly mentors African-American males. He brings over 30 years of experience working with young people, having served as a Juvenile Probation Officer with the Florida Department of Juvenile Justice, Social Service Case Manager with Georgia DFCS, Senior Counselor at Youth Villages, Paraprofessional with Cobb County Schools, and Youth Advisor for College Care Ministry.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaAnchor className="text-4xl text-gray-700 mb-2" />
          <p>
            Dr. Fairley is a proud veteran of the United States Navy. He was recalled to active duty during Operation Desert Shield and Operation Desert Storm (1990–1991). Raised in a Christian household, his father — a Baptist minister — instilled in him strong moral values and decision-making skills that deeply impact his character today.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaBook className="text-4xl text-green-600 mb-2" />
          <p>
            Dr. Fairley is a published author with two books available on Amazon. His first book, <em>There Is An East Wind Blowing: The Brooks Search</em>, was published on October 16, 2020. His second book, <em>There Is An East Wind Blowing: The Lost Raven</em>, was published on January 4, 2023.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaGraduationCap className="text-4xl text-purple-700 mb-2" />
          <p>
            He holds a Bachelor of Science in Accounting from DeVRY University, a Master of Science in Criminal Justice from Troy University, and a Doctorate in Education from Jones International University.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaMedal className="text-4xl text-yellow-600 mb-2" />
          <p>
            Dr. Fairley is committed to excellence. He was awarded the 2010–2011 Classified Employee of the Year by Cobb County Schools and named “Man of the Year” by the Pensacola Alumni Chapter of Kappa Alpha Psi Fraternity, Inc.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <Link href="/books">
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Explore His Books
          </button>
        </Link>
      </div>
    </div>
  );
}
