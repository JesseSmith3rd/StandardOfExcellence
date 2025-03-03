import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mt-12">About Dr. Timothy Fairley</h1>
      
      {/* Profile Image */}
      <div className="mt-6">
        <Image
          src="/dr-fairley.jpg"
          alt="Dr. Timothy Fairley"
          width={250}
          height={250}
          className="rounded-full mx-auto shadow-lg"
        />
      </div>
      {/* Biography */}
      <p className="mt-6 text-lg text-gray-700 max-w-3xl leading-relaxed">
       Dr. Timothy Fairley is the Chief Executive Officer and Founder of Standard of Excellence (SOE) Incorporated; a non-profit organization that predominantly mentor to African-American males.  He brings to SOE over 30 years of experience working with young people.  Previous employment include Juvenile Probation Officer with the Florida Department of Juvenile Justice, Social Service Case Manager with the Georgia Department of Families and Children Services, Senior Counselor at Youth Villages which is a psychiatric residential treatment facility for children with serious emotional disturbances, Paraprofessional with Cobb County School District, and Youth Advisor-College Care Ministry.  
      </p>

      <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed">
        Dr. Fairley is a United States Veteran, serving in the Navy during Operation Desert Shield and Operation Desert Storm (1990-1991).  He was reared by Christian parents.  His father was a Baptist Minister who embedded in him the moral seeds and positive decision making skills that deeply impacts his character. He is a published author and has books are available on Amazon.  There Is An East Wind Blowing: The Brooks Search published in the year 2020.  Also, There Is An East Wind Blowing: The Lost Raven polished in the year 2023.  
      </p>

      <p className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed">
       Dr. Fairley received his Bachelor of Science degree in Accounting from DeVRY University, his Master of Science degree in Criminal Justice from Troy University, and his Doctorate in Education from Jones International University.  He is committed to achievement, demonstrated by being awarded the 2010-2011 Classified Employee of the Year by Cobb County School District.  He has also received the “Man of The Year” award from the Pensacola Alumni Chapter of Kappa Alpha Psi Fraternity, Incorporated.
      </p>

      {/* Call to Action */}
      <Link href="/books">
        <button className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
          Explore His Books
        </button>
      </Link>
    </div>
  );
};

export default AboutPage;
