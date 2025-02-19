import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">About Dr. Timothy Fairley</h1>
      <p className="mt-4 text-lg text-gray-600">
        Dr. Timothy Fairley is the founder of "Standard of Excellence," a nonprofit organization 
        dedicated to mentoring boys, teenagers, and men for success.
      </p>

      {/* Dr. Fairley's Picture */}
      <div className="mt-6 flex justify-center">
        <Image
          src="/dr-fairley.jpg"  // Make sure to add this image in /public folder
          alt="Dr. Timothy Fairley"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Mission Statement */}
      <div className="mt-6 bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          SOE seek to cultivate a young person mind to the point that members can sustain themselves in life.
        </p>
      </div>
    </div>
  );
}
