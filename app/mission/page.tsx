import Link from "next/link";
import { FaGraduationCap, FaHeart, FaShieldAlt, FaCrown, FaQuoteLeft } from "react-icons/fa";

export default function MissionPage() {
  const pillars = [
    {
      title: "Empowerment",
      description: "Equipping young men with the confidence, support, and essential life tools required to realize their full potential and face challenges with resilience.",
      icon: <FaShieldAlt className="text-4xl text-amber-500" />,
    },
    {
      title: "Education",
      description: "Fostering academic excellence, critical decision-making abilities, and practical knowledge that build a foundation for lifelong growth and career achievement.",
      icon: <FaGraduationCap className="text-4xl text-blue-500" />,
    },
    {
      title: "Upliftment",
      description: "Elevating self-esteem, character values, and emotional maturity by providing positive role models, regular guidance, and supportive brotherhood environments.",
      icon: <FaHeart className="text-4xl text-rose-500" />,
    },
    {
      title: "Leadership",
      description: "Preparing boys, teenagers, and men to assume responsibility, command respect, and act as positive role models and leaders within their families and communities.",
      icon: <FaCrown className="text-4xl text-emerald-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 animate-fade-in-up">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">Our Core Philosophy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-slate-50 mt-2">
            Mission & Purpose
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
            At Standard of Excellence, we believe that every young man deserves access to strong role models, constructive guidance, and dedicated resources to help them thrive in life.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl bg-slate-900/40 border border-slate-900 backdrop-blur-sm hover:border-slate-800 hover:bg-slate-900/60 transition-all duration-300 flex flex-col space-y-4 group"
            >
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 font-serif">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Large Quote Block */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-900 text-center max-w-3xl mx-auto mb-16 shadow-2xl">
          <FaQuoteLeft className="text-4xl text-amber-500/10 mx-auto mb-4" />
          <blockquote className="text-lg md:text-2xl font-serif text-slate-200 leading-relaxed italic">
            &ldquo;We don&rsquo;t just guide young men — we build future leaders with purpose, direction, and strength.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-xs font-semibold tracking-widest text-amber-500 uppercase not-italic">
            Dr. Timothy Fairley, Founder & CEO
          </cite>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-900 text-center space-y-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-slate-100 font-serif">Join Us in Making a Difference</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Interested in volunteering, mentoring, or supporting the Standard of Excellence non-profit? Get in touch with us today.
          </p>
          <div>
            <Link href="/contact" className="inline-block px-8 py-3 rounded bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10">
              Contact Us Today
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
