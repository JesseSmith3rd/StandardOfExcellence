"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Mission", href: "/mission" },
    { label: "Events", href: "/events" },
    { label: "Books", href: "/books" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel shadow-lg transition-all duration-300 border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-wider text-slate-100 font-serif">
            Standard Of Excellence<span className="text-amber-500">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-2 transition-colors duration-300 hover:text-amber-400 ${
                    isActive ? "text-amber-500 font-bold" : ""
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full animate-fade-in" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-200 hover:text-amber-500 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800/60 animate-slide-down">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-base font-semibold text-slate-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 transition-colors duration-300 hover:text-amber-400 ${
                      isActive ? "text-amber-500 border-l-2 border-amber-500 pl-3" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
