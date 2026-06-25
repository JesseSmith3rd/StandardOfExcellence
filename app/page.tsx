"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { 
  FaBookOpen, FaQrcode, FaTimes, FaArrowRight, 
  FaChevronDown, FaChevronUp, FaQuoteLeft 
} from "react-icons/fa";

export default function Home() {
  const [showQR, setShowQR] = useState(false);
  
  // Accordion active index state (faq)
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const keynotes = [
    {
      title: "Ignore the Impossible",
      description: "Faced with daunting hurdles? Some seem born for success, while others struggle. Discover a powerful 'Excellence Mindset' shift to conquer seemingly impossible problems in life, academics, and character development.",
      link: "/mission"
    },
    {
      title: "Not 'Just' Anything!",
      description: "Too many young men place limitations on their future by saying, 'I'm just a student,' or 'just a kid.' Dr. Fairley proves you are capable of far more than you imagine when you stop self-limiting and start dreaming bigger.",
      link: "/mission"
    },
    {
      title: "Fearless Leadership",
      description: "Fear is a thief, robbing young men of leadership opportunities, academic goals, and untold growth. Learn a practical 5-step method to recognize and combat fear's deceptive power and step boldly into your purpose.",
      link: "/mission"
    },
    {
      title: "Creating Showtime Moments",
      description: "How can you stand out in a distracted world? Learn how to craft unforgettable 'showtime moments' in your daily interactions by demonstrating high integrity, focus, and leadership values that make you the role model of choice.",
      link: "/mission"
    }
  ];

  const faqs = [
    {
      question: "How long do Dr. Fairley's presentations usually last?",
      answer: "Presentations typically last an hour, but they are fully flexible. Whether your school assembly has a 30-minute slot or your community summit requires a 90-minute keynote/workshop, Dr. Fairley will adapt the timing to fit your agenda."
    },
    {
      question: "What makes the Standard of Excellence mentoring model unique?",
      answer: "Unlike passive lectures, Dr. Fairley creates an active experience. He draws on his 30+ years of youth probation, social work, and educational leadership to share real-world scenarios and structured life steps that help young men retain and apply the messages."
    },
    {
      question: "Are these presentations and seminars appropriate for all audiences?",
      answer: "Yes, absolutely. The content is tailored to build up young men, focusing on character development, decision-making, and academic success. There is no off-color humor, political commentary, or controversial jokes. It is a professional, highly engaging, and supportive seminar."
    },
    {
      question: "Can Dr. Fairley adapt his keynote to our school's specific theme?",
      answer: "Yes. In most cases, the keynote is tailored to your organization. School themes, student recognitions, or specific localized goals can be woven directly into the message so that the presentation drives home your organization's exact mission."
    },
    {
      question: "How is Dr. Fairley different from other youth speakers?",
      answer: "Many speakers lecture at kids; Dr. Fairley connects with them. His background as a juvenile probation officer in Florida, case manager in Georgia, and classified school employee in Cobb County gives him a multi-faceted authority that young men respect and listen to."
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-start items-center bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950 z-0" />

      {/* Hero Section - Inspired by motivationalmagician.net layout */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-20 text-center flex flex-col justify-center items-center min-h-[80vh] animate-slide-up">
        
        {/* Top Badges */}
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-6 uppercase">
          Standard of Excellence Incorporated
        </span>

        {/* Big Value Proposition Statement */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif text-slate-50 mb-6 max-w-5xl leading-tight text-center">
          Dr. Timothy Fairley, Founder of &ldquo;Standard of Excellence&rdquo; is an educator, author, and keynote speaker who empowers, educates, and uplifts young men.
        </h1>

        {/* Supporting description - Inspired by motivationalmagician subheadings */}
        <p className="text-base md:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
          Dr. Fairley brings 30 years of training, juvenile counseling, and mentorship experience to help schools and youth organizations turn potential into performance. Not &ldquo;just another speaker,&rdquo; but an engaging experience for your entire group!
        </p>

        {/* Testimonials in Hero context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mb-10 text-left">
          <div className="p-4 rounded bg-slate-900/40 border border-slate-900 backdrop-blur-sm relative italic text-xs text-slate-300">
            <FaQuoteLeft className="text-amber-500/20 absolute top-2 left-2 text-lg" />
            <p className="pl-4">
              &ldquo;Dr. Fairley is a wonderful speaker and very knowledgeable. He had our students&rsquo; attention throughout the entire presentation.&rdquo;
            </p>
            <span className="block text-[10px] text-amber-500 font-bold mt-2 pl-4">— Cobb County Schools Support Staff</span>
          </div>
          <div className="p-4 rounded bg-slate-900/40 border border-slate-900 backdrop-blur-sm relative italic text-xs text-slate-300">
            <FaQuoteLeft className="text-amber-500/20 absolute top-2 left-2 text-lg" />
            <p className="pl-4">
              &ldquo;Thanks to your mentoring seminar, our youth event was a smashing success! Everyone loved it.&rdquo;
            </p>
            <span className="block text-[10px] text-amber-500 font-bold mt-2 pl-4">— Pensacola Alumni, Kappa Alpha Psi</span>
          </div>
        </div>

        {/* Main Hero Call-to-action */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <Link href="/contact" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/10 transition duration-300 flex items-center justify-center space-x-2">
            <span>Get a Custom Quote for Your Event</span>
            <FaArrowRight size={14} />
          </Link>
          <Link href="/about" className="px-8 py-3.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-bold hover:bg-slate-800 hover:text-white transition duration-300 flex items-center justify-center">
            Learn More About Dr. Fairley
          </Link>
        </div>

      </section>

      {/* Featured Badges / Trust Bar */}
      <section className="relative z-10 w-full bg-slate-950 border-y border-slate-900 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-6 text-slate-500 text-xs font-semibold uppercase tracking-widest text-center">
          <div className="flex items-center space-x-2">
            <span className="text-amber-500 font-bold">501(C)(3)</span>
            <span>Non-Profit Mentorship</span>
          </div>
          <div className="w-1 h-1 bg-slate-800 rounded-full hidden md:block" />
          <div className="flex items-center space-x-2">
            <span className="text-amber-500 font-bold">U.S. NAVY</span>
            <span>Veteran Recalled</span>
          </div>
          <div className="w-1 h-1 bg-slate-800 rounded-full hidden md:block" />
          <div className="flex items-center space-x-2">
            <span className="text-amber-500 font-bold">KAPPA ALPHA PSI</span>
            <span>Alumni Member</span>
          </div>
          <div className="w-1 h-1 bg-slate-800 rounded-full hidden md:block" />
          <div className="flex items-center space-x-2">
            <span className="text-amber-500 font-bold">30+ YEARS</span>
            <span>Youth Counsel Experience</span>
          </div>
        </div>
      </section>

      {/* Presentation/Keynote Topics List */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">Seminars & Keynotes</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-100 mt-2">
            Dr. Fairley&rsquo;s Keynote Presentations
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Unlike traditional speakers, Dr. Fairley creates active sessions that captivate from the first moment, using real-world stories and visual illustrations to drive points home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keynotes.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl bg-slate-900/40 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-100 mb-3 text-amber-500">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <Link href={item.link} className="text-xs font-bold text-amber-500 hover:text-amber-400 inline-flex items-center space-x-1 w-fit group">
                <span>View Seminar Pillars</span>
                <FaArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-block px-8 py-3 rounded bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10">
            Request Info for Your Event
          </Link>
        </div>
      </section>

      {/* Featured Book Showcase Section (Including the new book!) */}
      <section className="relative z-10 w-full bg-slate-900/40 border-y border-slate-900/50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="space-y-6 max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-amber-500">
              <FaBookOpen />
              <span className="text-sm font-semibold tracking-widest uppercase">Author Spotlight</span>
            </div>
            
            {/* The New Book Highlight */}
            <span className="inline-block px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold text-xs">
              🔥 New Release - Available Now!
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-50 leading-tight">
              THERE IS AN EAST WIND BLOWING: The Land of Zion
            </h2>
            
            <p className="text-amber-500/95 italic font-medium text-sm md:text-base">
              &ldquo;Strong foundations will help guide you even when your destination is unknown.&rdquo;
            </p>
            
            <p className="text-slate-400 leading-relaxed text-sm">
              Dr. Timothy Fairley presents the third volume of his deep-seated memoir and ancestral exploration. Documenting heritage, strength, and foundational values that guide young leaders forward.
            </p>
            
            <div className="pt-2">
              <Link href="/books" className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-500 hover:text-amber-400 group">
                <span>View All 3 Books & Purchase Links</span>
                <FaArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* 3-Book Visual Stack */}
          <div className="flex -space-x-10 items-center scale-95 md:scale-100 py-6">
            <div className="relative w-28 md:w-36 h-40 md:h-52 bg-slate-800 border border-slate-700 shadow-2xl rounded-md overflow-hidden transform -rotate-12 transition hover:rotate-0 hover:scale-105 duration-300">
              <Image src="/book1.jpg" alt="The Brooks Search" fill className="object-cover" sizes="(max-width: 768px) 112px, 144px" />
            </div>
            <div className="relative w-28 md:w-36 h-40 md:h-52 bg-slate-800 border border-slate-700 shadow-2xl rounded-md overflow-hidden transform -rotate-3 z-10 transition hover:rotate-0 hover:scale-105 duration-300">
              <Image src="/Book2.jpg" alt="The Lost Raven" fill className="object-cover" sizes="(max-width: 768px) 112px, 144px" />
            </div>
            <div className="relative w-28 md:w-36 h-40 md:h-52 bg-slate-800 border border-slate-600 shadow-2xl rounded-md overflow-hidden transform rotate-6 z-20 transition hover:rotate-0 hover:scale-105 duration-300 ring-2 ring-amber-500/50">
              <Image src="/book3.jpg" alt="The Land of Zion" fill className="object-cover" sizes="(max-width: 768px) 112px, 144px" />
              <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-amber-500 text-slate-950 text-[8px] font-extrabold rounded uppercase tracking-wider">
                New
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section - Inspired by motivationalmagician.net */}
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-xs font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl font-bold font-serif text-slate-100 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpened = activeFaq === index;
            return (
              <div 
                key={index} 
                className="bg-slate-900/40 border border-slate-900 rounded-xl overflow-hidden backdrop-blur-sm transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-slate-100 hover:text-amber-500 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-sm md:text-base font-serif">
                    {faq.question}
                  </span>
                  {isOpened ? <FaChevronUp className="text-amber-500 text-sm" /> : <FaChevronDown className="text-slate-500 text-sm" />}
                </button>
                
                {isOpened && (
                  <div className="px-6 pb-6 pt-2 text-slate-400 text-sm leading-relaxed border-t border-slate-800/40 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Floating Collapsible QR Code Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {showQR ? (
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-2xl w-44 flex flex-col items-center animate-fade-in-up">
            <button 
              onClick={() => setShowQR(false)}
              className="self-end text-slate-400 hover:text-amber-500 focus:outline-none mb-2"
              aria-label="Close QR Code"
            >
              <FaTimes size={16} />
            </button>
            <div className="bg-white p-2.5 rounded-lg mb-2">
              <QRCodeSVG 
                value="https://standardofexcellence.app"
                size={120}
                fgColor="#020617"
                bgColor="#ffffff"
              />
            </div>
            <span className="text-[10px] text-slate-400 text-center font-semibold tracking-wider uppercase">
              standardofexcellence.app
            </span>
          </div>
        ) : (
          <button
            onClick={() => setShowQR(true)}
            className="p-3.5 rounded-full bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform duration-300 focus:outline-none flex items-center justify-center"
            aria-label="Show QR Code"
          >
            <FaQrcode size={22} />
          </button>
        )}
      </div>

    </div>
  );
}
