import Link from "next/link";
import { FaBookmark, FaEnvelope, FaFlag, FaRibbon } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Org Info Column */}
        <div className="space-y-4">
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

        {/* Quick Links Column */}
        <div className="space-y-4 md:pl-12">
          <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
            Quick Links
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-400 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/mission" className="hover:text-amber-400 transition-colors duration-300">
                Mission
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-amber-400 transition-colors duration-300">
                Events
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:text-amber-400 transition-colors duration-300">
                Books
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Founder & Affiliation Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
            Our Founder
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Dr. Timothy Fairley, Chief Executive Officer. 30+ years of youth development experience.
          </p>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <FaFlag className="text-blue-500" />
              <span>U.S. Navy Veteran (Operation Desert Storm)</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaBookmark className="text-amber-500" />
              <span>Kappa Alpha Psi Fraternity Alumni member</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-emerald-500" />
              <a href="mailto:Standardof.Excellence@yahoo.com" className="hover:underline hover:text-emerald-400">
                Standardof.Excellence@yahoo.com
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/60 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
        <p>
          &copy; {new Date().getFullYear()} Standard of Excellence Incorporated. All rights reserved.
        </p>
        <p className="tracking-wide">
          BUILDING LEADERS WITH PURPOSE, DIRECTION, & STRENGTH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
