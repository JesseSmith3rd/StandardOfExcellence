import Image from "next/image";
import Link from "next/link";
import { FaUserTie, FaBook, FaGraduationCap, FaMedal, FaAnchor, FaBriefcase, FaQuoteLeft } from "react-icons/fa";

export default function AboutPage() {
  const careerTimeline = [
    {
      role: "Juvenile Probation Officer",
      org: "Florida Department of Juvenile Justice",
      description: "Guided young offenders towards rehabilitation, providing counseling, monitoring, and structural support."
    },
    {
      role: "Social Service Case Manager",
      org: "Georgia Department of Family and Children Services (DFCS)",
      description: "Assisted families in crisis, managed welfare programs, and prioritized child protective services."
    },
    {
      role: "Senior Counselor",
      org: "Youth Villages",
      description: "Led crisis intervention, emotional counseling, and structured youth development programs."
    },
    {
      role: "Paraprofessional & Classified Employee of the Year",
      org: "Cobb County Schools",
      description: "Named the 2010-2011 Classified Employee of the Year for outstanding dedication to student support and mentorship."
    },
    {
      role: "Youth Advisor",
      org: "College Care Ministry",
      description: "Provided spiritual guidance, mentorship, and life-planning resources for young adults transitioning to college."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 relative overflow-hidden">
      
      {/* Decorative Gradient Flare */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 animate-fade-in-up">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">The Founder & CEO</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-slate-50 mt-2">
            Dr. Timothy Fairley
          </h1>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center">
            
            {/* Image Wrapper */}
            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-amber-500/30 to-slate-800 border border-slate-800 shadow-2xl mb-8 w-full max-w-[300px] lg:max-w-full">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/dr-fairley.jpg"
                  alt="Dr. Timothy Fairley"
                  fill
                  className="object-cover object-top transition duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Badges Box */}
            <div className="w-full bg-slate-900/40 border border-slate-900 rounded-xl p-6 space-y-4 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider border-b border-slate-800 pb-2">
                Honors & Badges
              </h3>
              
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <FaAnchor className="text-xl text-blue-500 flex-shrink-0" />
                <span>U.S. Navy Recalled Veteran</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <FaMedal className="text-xl text-amber-500 flex-shrink-0" />
                <span>Kappa Alpha Psi &ldquo;Man of the Year&rdquo;</span>
              </div>
              
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <FaMedal className="text-xl text-emerald-500 flex-shrink-0" />
                <span>Cobb County Classified Employee of Year</span>
              </div>
            </div>

            {/* Quote Block */}
            <div className="w-full bg-amber-500/5 border border-amber-500/10 rounded-xl p-6 mt-6 relative italic text-slate-300 text-sm leading-relaxed">
              <FaQuoteLeft className="absolute -top-3 left-4 text-2xl text-amber-500/20" />
              <p className="pt-2">
                Raised in a Christian household, my father — a Baptist minister — instilled in me strong moral values and decision-making skills that guide my leadership and character today.
              </p>
            </div>

          </div>

          {/* Right Column: Bio Details & Timeline */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview / Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-slate-100 flex items-center space-x-3">
                <FaUserTie className="text-amber-500" />
                <span>Executive Bio</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Dr. Timothy Fairley is the Chief Executive Officer and Founder of Standard of Excellence (SOE) Incorporated. Bringing over 30 years of dedicated experience working with young people, his career has spanned juvenile justice, social work, counseling, public education, and ministry.
              </p>
              <p className="text-slate-300 leading-relaxed">
                As a proud veteran of the United States Navy, Dr. Fairley was recalled to active duty during **Operation Desert Shield** and **Operation Desert Storm** (1990–1991), carrying forward a legacy of service, discipline, and excellence in all areas of life.
              </p>
            </div>

            {/* Academic Background */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-slate-100 flex items-center space-x-3">
                <FaGraduationCap className="text-amber-500" />
                <span>Educational Foundation</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/60 border border-slate-900 p-4 rounded-lg">
                  <span className="text-xs font-semibold text-amber-500">DeVry University</span>
                  <h4 className="text-sm font-bold text-slate-100 mt-1">Bachelor of Science</h4>
                  <p className="text-xs text-slate-400 mt-1">Accounting</p>
                </div>
                <div className="bg-slate-900/60 border border-slate-900 p-4 rounded-lg">
                  <span className="text-xs font-semibold text-amber-500">Troy University</span>
                  <h4 className="text-sm font-bold text-slate-100 mt-1">Master of Science</h4>
                  <p className="text-xs text-slate-400 mt-1">Criminal Justice</p>
                </div>
                <div className="bg-slate-900/60 border border-slate-900 p-4 rounded-lg">
                  <span className="text-xs font-semibold text-amber-500">Jones International</span>
                  <h4 className="text-sm font-bold text-slate-100 mt-1">Doctorate in Education</h4>
                  <p className="text-xs text-slate-400 mt-1">Educational Leadership</p>
                </div>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-serif text-slate-100 flex items-center space-x-3">
                <FaBriefcase className="text-amber-500" />
                <span>Professional Timeline & Experience</span>
              </h2>
              
              <div className="relative border-l-2 border-slate-800 pl-6 ml-3 space-y-8">
                {careerTimeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-500" />
                    
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{item.role}</h4>
                      <span className="text-xs font-semibold text-amber-500/80">{item.org}</span>
                      <p className="text-xs md:text-sm text-slate-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Published Books Spotlight Link */}
            <div className="bg-slate-900/30 border border-slate-900 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <FaBook className="text-3xl text-amber-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">Published Author</h4>
                  <p className="text-xs text-slate-400">Dr. Fairley has published three books, with a new release coming June 2026.</p>
                </div>
              </div>
              <Link href="/books" className="px-5 py-2.5 rounded bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors flex-shrink-0">
                Explore His Books
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
