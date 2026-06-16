import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Award, ArrowUp, Send, Heart } from "lucide-react";
import { INST_INFO, COURSES_DATA } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <footer className="bg-brand-black border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden font-sans">
      
      {/* Decorative Glow accent */}
      <div className="absolute bottom-[-150px] right-[-150px] w-96 h-96 bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid elements */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={handleScrollToTop}>
              <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center font-bold text-brand-black text-lg">
                C
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                CYBER<span className="text-brand-purple">WISE</span>
              </span>
            </div>

            <p className="text-zinc-500 text-xs leading-relaxed font-light max-w-sm pt-1">
              **CyberWise Skillversity** is Malappuram&apos;s leading digital marketing and multimedia learning ecosystem. We supply practical, live campaign-centered models designed by certified agency experts.
            </p>

            {/* License text */}
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-600">
              <Award className="w-3.5 h-3.5 text-brand-purple shrink-0" />
              <span>Licensed powered branch of {INST_INFO.poweredBy}.</span>
            </div>

            {/* Social media handles */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-dark hover:bg-brand-purple text-zinc-400 hover:text-brand-black rounded-lg border border-zinc-850 hover:border-brand-purple transition-all cursor-pointer"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-dark hover:bg-brand-purple text-zinc-400 hover:text-brand-black rounded-lg border border-zinc-850 hover:border-brand-purple transition-all cursor-pointer"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-dark hover:bg-brand-purple text-zinc-400 hover:text-brand-black rounded-lg border border-zinc-850 hover:border-brand-purple transition-all cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-dark hover:bg-brand-purple text-zinc-400 hover:text-brand-black rounded-lg border border-zinc-850 hover:border-brand-purple transition-all cursor-pointer"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Institute", target: "about" },
                { name: "Our Core Pillars", target: "why-choose-us" },
                { name: "Syllabus Catalog", target: "courses" },
                { name: "Eligible Profiles", target: "who-join" },
                { name: "Training Techs", target: "features" },
                { name: "Student Reviews", target: "testimonials" },
                { name: "Campus Workspaces", target: "gallery" },
              ].map((item, keyIdx) => (
                <li key={keyIdx}>
                  <button
                    onClick={() => scrollToSection(item.target)}
                    className="text-xs text-zinc-455 hover:text-brand-purple transition-colors cursor-pointer text-left block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Courses */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Professional Courses</h4>
            <ul className="space-y-2.5">
              {COURSES_DATA.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => scrollToSection("courses")}
                    className="text-xs text-zinc-455 hover:text-brand-purple transition-colors cursor-pointer text-left block hover:translate-x-0.5 transition-transform"
                    title={course.title}
                  >
                    {course.title.replace(" (SEO)", "").replace(" (PPC)", "")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Top Action newsletter simulation */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Scroll Control</h4>
            <p className="text-zinc-500 text-[11px] leading-relaxed">
              Back to top instantly.
            </p>
            <button
              onClick={handleScrollToTop}
              className="w-full py-3 bg-brand-dark hover:bg-brand-purple border border-zinc-850 hover:border-brand-purple text-zinc-400 hover:text-brand-black rounded-lg text-xs font-bold transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back To Top</span>
            </button>
          </div>

        </div>

        {/* Bottom meta details copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-510 text-[11px] text-center md:text-left">
          <p className="text-zinc-500">
            &copy; {new Date().getFullYear()} CyberWise Skillversity. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1 text-zinc-600 font-light">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-brand-purple fill-brand-purple animate-pulse" />
            <span>in Angadippuram, Malappuram, Kerala</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
