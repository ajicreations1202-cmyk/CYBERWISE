import React from "react";
import { ArrowDown, Flame, Search, Sparkles, TrendingUp, ChevronRight, Play, Award, Globe } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onExploreCourses: () => void;
  onContactUs: () => void;
}

export default function Hero({ onExploreCourses, onContactUs }: HeroProps) {
  // Float Animation helpers
  const floatTransition = (delayVal: number) => ({
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
    delay: delayVal,
  });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="glow-spot w-[400px] h-[400px] bg-brand-purple top-[-100px] left-[-100px] opacity-20" />
        <div className="glow-spot w-[500px] h-[500px] bg-brand-purple-light bottom-[-100px] right-[-100px] opacity-10" />
        
        {/* Futuristic Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(157, 78, 221, 0.15) 0%, transparent 80%), 
                              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px, 40px 40px, 40px 40px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text / CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/25 px-3 py-1.5 rounded-full w-fit mx-auto lg:mx-0 shadow-sm"
            >
              <Flame className="w-4 h-4 text-brand-purple animate-pulse" />
              <span className="text-xs font-semibold text-brand-purple-light tracking-wide uppercase">
                #1 Rated Marketing Academy in Malappuram
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              The Best Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-purple-light to-brand-glow">
                Marketing Institute
              </span>{" "}
              in Malappuram
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl font-semibold text-brand-purple-light/95 tracking-wide max-w-2xl mx-auto lg:mx-0"
            >
              Transform Your Passion into a Successful Digital Career.
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              CyberWise Skillversity provides modern, fully career-focused training with real-life marketing budgets, practical assessments, 1-on-1 expert mentorship, and official certifications. We bridge the gap between classroom lecture and executive digital expertise.
            </motion.p>

            {/* CTA action cluster */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-8 py-4 bg-brand-purple text-brand-black hover:bg-brand-purple-light font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-brand-purple/20 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={onContactUs}
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-zinc-700 hover:border-brand-purple hover:bg-brand-purple/5 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Contact Us</span>
              </button>
            </motion.div>

            {/* Realtrust metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-zinc-900 mt-6"
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">100%</span>
                <span className="text-xs text-zinc-500 font-medium">Placement Assistance</span>
              </div>
              <div className="h-4 w-[1px] bg-zinc-800" />
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">8/8</span>
                <span className="text-xs text-zinc-500 font-medium">AI Web Modules Included</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image / Mockup Element with floating items */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Ambient Background Glowbehind the graphic */}
            <div className="absolute inset-0 bg-brand-purple/15 rounded-full blur-[90px] w-72 h-72 m-auto" />

            {/* Main Center UI Card mockup representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative w-full max-w-[420px] aspect-[4/5] bg-brand-dark border-2 border-brand-purple/20 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between"
            >
              {/* Card Header Imitating a CMS Dashboard */}
              <div className="flex items-center justify-between border-b border-zinc-850 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-purple/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-purple-light/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  </div>
                </div>
                <div className="text-[10px] font-mono tracking-wider text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  LIVE PORTFOLIO PROFILES
                </div>
              </div>

              {/* Central Premium Graphic */}
              <div className="relative flex-1 flex flex-col justify-center items-center my-6 space-y-4">
                <div className="w-40 h-40 rounded-full border border-zinc-800/80 flex items-center justify-center relative p-2">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-brand-purple/30 animate-spin" style={{ animationDuration: "12s" }} />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-purple-light/10 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-brand-purple filter drop-shadow-[0_0_12px_rgba(157,78,221,0.5)]" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-white">Practical Learning Campaign</h4>
                  <p className="text-xs text-zinc-500 mt-1">CPC Ad Dashboard Optimization & Live Tracking</p>
                </div>
              </div>

              {/* Bottom CMS Stats */}
              <div className="grid grid-cols-2 gap-4 border-t border-zinc-850 pt-4">
                <div className="bg-brand-black/60 p-3 rounded-lg border border-zinc-800">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">CTR Optimization</p>
                  <p className="text-base font-extrabold text-brand-purple mt-0.5">+340%</p>
                </div>
                <div className="bg-brand-black/60 p-3 rounded-lg border border-zinc-800">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">Conversions</p>
                  <p className="text-base font-extrabold text-brand-purple-light mt-0.5 font-bold">Automated</p>
                </div>
              </div>

              {/* Mini tag indicator */}
              <div className="absolute top-3 right-3 bg-brand-purple text-brand-black font-extrabold text-[9px] uppercase px-1.5 py-0.5 rounded tracking-widest shadow">
                GENAI MENTORED
              </div>
            </motion.div>

            {/* FLOATING ICON 1: Search SEO */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={floatTransition(0)}
              className="absolute -top-4 -left-4 md:-left-8 bg-zinc-900/90 border border-brand-purple/30 p-3 rounded-xl shadow-xl flex items-center space-x-2 text-white"
            >
              <div className="bg-brand-purple/10 p-1.5 rounded-lg text-brand-purple">
                <Search className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-zinc-500 font-bold uppercase">SEO Audit</p>
                <p className="text-xs font-semibold text-white">Grade A+</p>
              </div>
            </motion.div>

            {/* FLOATING ICON 2: Trending Performance */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={floatTransition(1.5)}
              className="absolute bottom-12 -right-4 md:-right-8 bg-zinc-900/90 border border-brand-purple-light/20 p-3 rounded-xl shadow-xl flex items-center space-x-2 text-white"
            >
              <div className="bg-brand-purple-light/10 p-1.5 rounded-lg text-brand-purple-light">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-zinc-400 font-bold uppercase">ROI Return</p>
                <p className="text-xs font-semibold text-white">5.8x ROAS</p>
              </div>
            </motion.div>

            {/* FLOATING ICON 3: AI Sparkles */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-12 bg-zinc-900/85 border border-zinc-800 p-2.5 rounded-full shadow-lg text-brand-purple"
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>

          </div>

        </div>

        {/* Scroll Prompt Link */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={onExploreCourses}
            className="flex flex-col items-center text-zinc-500 hover:text-brand-purple transition-colors cursor-pointer group"
          >
            <span className="text-xs font-mono tracking-widest uppercase mb-2">Explore the Academy</span>
            <div className="w-8 h-12 rounded-full border border-zinc-800 flex items-center justify-center p-1 group-hover:border-brand-purple/50 transition-colors">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-brand-purple"
              />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
