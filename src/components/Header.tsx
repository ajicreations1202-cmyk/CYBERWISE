import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Award, Zap } from "lucide-react";
import { INST_INFO } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Why Us", target: "why-choose-us" },
    { name: "Courses", target: "courses" },
    { name: "Who Can Join", target: "who-join" },
    { name: "Features", target: "features" },
    { name: "Testimonials", target: "testimonials" },
    { name: "Gallery", target: "gallery" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-purple/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-brand-purple rounded-lg flex items-center justify-center font-bold text-brand-black text-xl shadow-md shadow-brand-purple/20">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight leading-none text-white">
                  CYBER<span className="text-brand-purple">WISE</span>
                </span>
                <span className="text-[10px] text-zinc-400 font-medium tracking-widest mt-0.5 uppercase">
                  Skillversity
                </span>
              </div>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1 text-[9px] text-zinc-500 mt-1 pl-[1px]">
              <Award className="w-2.5 h-2.5 text-brand-purple" />
              <span>Powered by CyberWise Info Solutions</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-brand-purple hover:bg-white/5 rounded-md transition-all cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${INST_INFO.phoneRaw}`}
              className="text-xs text-zinc-400 hover:text-brand-purple transition-colors mr-1 font-medium hidden md:inline-block"
            >
              Hotline: {INST_INFO.phone}
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-lg group bg-gradient-to-br from-brand-purple to-brand-purple-light group-hover:from-brand-purple group-hover:to-brand-purple-light hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-brand-purple/30 cursor-pointer transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-brand-black rounded-md group-hover:bg-opacity-0 flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-purple group-hover:text-white transition-colors" />
                <span>Admission Open</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors cursor-pointer"
              aria-expanded="false"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-b border-brand-purple/10 transition-transform duration-300 ease-in-out">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <p className="text-[10px] uppercase font-bold tracking-wider text-brand-purple/70 px-3">
              Powered by CyberWise Info Solutions
            </p>
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-semibold text-zinc-200 hover:text-brand-purple hover:bg-white/5 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-zinc-800/80 px-3 flex flex-col space-y-3">
              <div className="text-sm text-zinc-400 flex items-center justify-between">
                <span>Call Us:</span>
                <a href={`tel:${INST_INFO.phoneRaw}`} className="text-white hover:text-brand-purple transition-colors font-medium">
                  {INST_INFO.phone}
                </a>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3 bg-brand-purple text-brand-black text-center font-bold rounded-lg hover:bg-brand-purple-light transition-colors cursor-pointer shadow-md shadow-brand-purple/20"
              >
                Apply Online Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
