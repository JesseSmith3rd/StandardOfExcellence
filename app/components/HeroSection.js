import Link from "next/link";

const HeroSection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-blue-600 text-white text-center px-6">
      <h1 className="text-5xl font-bold opacity-0 animate-fade-in-up">
        {title}
      </h1>
      <p className="mt-4 text-lg max-w-2xl opacity-0 animate-fade-in-up delay-200">
        {subtitle}
      </p>
      <Link href={buttonLink}>
        <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          {buttonText}
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
