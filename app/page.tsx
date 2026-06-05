"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaUserShield, FaGraduationCap, FaAward, FaBookOpen, FaQrcode, FaTimes, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-start items-center bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* Dynamic Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950 z-0" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-24 text-center flex flex-col justify-center items-center min-h-[85vh] animate-slide-up">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-6 uppercase">
          Standard of Excellence Incorporated
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif text-slate-50 mb-6 max-w-4xl leading-tight">
          Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Leaders</span>
        </h1>
        <p className="text-base md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
          A 501(c)(3) non-profit mentoring organization dedicated to educating, guiding, and uplifting boys, teenagers, and men toward character growth and life success.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <Link href="/about" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold hover:brightness-110 shadow-lg shadow-amber-500/10 transition duration-300 flex items-center justify-center space-x-2">
            <span>Meet Our Founder</span>
            <FaArrowRight size={14} />
          </Link>
          <Link href="/mission" className="px-8 py-3.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-bold hover:bg-slate-800 hover:text-white transition duration-300 flex items-center justify-center">
            Our Mission & Purpose
          </Link>
        </div>
      </section>

      {/* Statistics / Highlights Bar */}
      <section className="relative z-10 w-full bg-slate-900/60 border-y border-slate-900 backdrop-blur-md py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="flex flex-col items-center p-6 space-y-3 rounded-lg bg-slate-950/45 border border-slate-800/40 hover:border-amber-500/30 transition-all duration-300">
            <FaUserShield className="text-4xl text-amber-500" />
            <h3 className="text-2xl font-bold text-slate-100">30+ Years</h3>
            <p className="text-sm text-slate-400">Mentorship, Case Management, and Youth Service Experience</p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 rounded-lg bg-slate-950/45 border border-slate-800/40 hover:border-amber-500/30 transition-all duration-300">
            <FaAward className="text-4xl text-amber-500" />
            <h3 className="text-2xl font-bold text-slate-100">501(c)(3) Certified</h3>
            <p className="text-sm text-slate-400">Dedicated non-profit organization mentoring minority males</p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 rounded-lg bg-slate-950/45 border border-slate-800/40 hover:border-amber-500/30 transition-all duration-300">
            <FaGraduationCap className="text-4xl text-amber-500" />
            <h3 className="text-2xl font-bold text-slate-100">Honor & Excellence</h3>
            <p className="text-sm text-slate-400">Led by DeVry, Troy, and Jones International Alumnus & US Navy Veteran</p>
          </div>

        </div>
      </section>

      {/* Featured Book / Author Spotlight Page Link */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-amber-500">
              <FaBookOpen />
              <span className="text-sm font-semibold tracking-widest uppercase">Published Author</span>
            </div>
            <h2 className="text-3xl font-bold font-serif text-slate-50">
              There Is An East Wind Blowing
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Dr. Timothy Fairley is a co-authored and published writer. Discover his impactful, deep-rooted books detailing faith, heritage, and favor through hardship: <em>The Brooks Search</em> and <em>The Lost Raven</em>.
            </p>
            <div className="pt-2">
              <Link href="/books" className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-500 hover:text-amber-400 group">
                <span>View Books & Buy on Amazon</span>
                <FaArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Quick Double Cover Stack Visual */}
          <div className="flex -space-x-8 items-center">
            <div className="relative w-28 md:w-36 h-40 md:h-52 bg-slate-800 border border-slate-700 shadow-2xl rounded-md overflow-hidden transform -rotate-6 transition hover:rotate-0 hover:scale-105 duration-300">
              <Image src="/book1.jpg" alt="Book 1 Cover" fill className="object-cover" sizes="(max-width: 768px) 112px, 144px" />
            </div>
            <div className="relative w-28 md:w-36 h-40 md:h-52 bg-slate-800 border border-slate-700 shadow-2xl rounded-md overflow-hidden transform rotate-6 z-10 transition hover:rotate-0 hover:scale-105 duration-300">
              <Image src="/Book2.jpg" alt="Book 2 Cover" fill className="object-cover" sizes="(max-width: 768px) 112px, 144px" />
            </div>
          </div>
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
