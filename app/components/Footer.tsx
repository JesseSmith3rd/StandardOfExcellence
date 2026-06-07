import Link from "next/link";
import { FaBookmark, FaEnvelope, FaFlag, FaRibbon, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        
        {/* Org Info Column - 4 cols */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xl font-bold text-slate-100 font-serif">
            Standard Of Excellence<span className="text-amber-500">.</span>
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            A 501(c)(3) non-profit mentoring organization dedicated to empowering, educating, and uplifting boys, teenagers, and men. Fostering future leaders with character and purpose.
          </p>
          <div className="flex items-center space-x-2 text-xs text-amber-500/80">
            <FaRibbon />
            <span>501(c)(3) Certified Organization</span>
          </div>
        </div>

        {/* Quick Links Column - 2 cols */}
        <div className="lg:col-span-2 space-y-4 md:pl-4">
          <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-400 transition-colors duration-300">
                About Dr. Fairley
              </Link>
            </li>
            <li>
              <Link href="/mission" className="hover:text-amber-400 transition-colors duration-300">
                Our Mission
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-amber-400 transition-colors duration-300">
                Speaking Events
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:text-amber-400 transition-colors duration-300">
                Books & Publications
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition-colors duration-300">
                Contact & Booking
              </Link>
            </li>
          </ul>
        </div>

        {/* Founder & Affiliation Column - 3 cols */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
            Dr. Timothy Fairley
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Chief Executive Officer & Founder. 30+ years of youth development and case management experience.
          </p>
          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <FaFlag className="text-blue-500 flex-shrink-0" />
              <span>U.S. Navy Veteran (Operation Desert Storm)</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaBookmark className="text-amber-500 flex-shrink-0" />
              <span>Kappa Alpha Psi Fraternity Alumni member</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-emerald-500 flex-shrink-0" />
              <a href="mailto:Standardof.Excellence@yahoo.com" className="hover:underline hover:text-emerald-400">
                Standardof.Excellence@yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup - 3 cols (Inspired by motivationalmagician.net) */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
            Get the Excellence News!
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Subscribe to our monthly newsletter for inspiring articles, mentoring resources, and seminar schedules.
          </p>
          
          <form 
            action="https://formspree.io/f/xqaewyqa" // Reusing standard Formspree contact target
            method="POST"
            className="flex flex-col space-y-2"
          >
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition"
            />
            <button 
              type="submit"
              className="w-full py-2 bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400 transition text-xs flex items-center justify-center space-x-1.5"
            >
              <FaPaperPlane size={10} />
              <span>Subscribe</span>
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/60 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
        <p>
          &copy; {new Date().getFullYear()} Standard of Excellence Incorporated. All rights reserved.
        </p>
        <p className="tracking-wide uppercase text-[10px] text-slate-600">
          Building Future Leaders with Purpose, Direction, and Strength
        </p>
      </div>
    </footer>
  );
};

export default Footer;
