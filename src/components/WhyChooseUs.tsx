import React from "react";
import * as Icons from "lucide-react";
import { WHY_CHOOSE_US_DATA } from "../data";

export default function WhyChooseUs() {
  // Helper to map string standard iconName to Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Icons.Briefcase className="w-6 h-6 text-brand-purple" />;
      case "Flame":
        return <Icons.Flame className="w-6 h-6 text-brand-purple animate-pulse" />;
      case "UserCheck":
        return <Icons.UserCheck className="w-6 h-6 text-brand-purple" />;
      case "Activity":
        return <Icons.Activity className="w-6 h-6 text-brand-purple" />;
      case "Cpu":
        return <Icons.Cpu className="w-6 h-6 text-brand-purple" />;
      case "Trophy":
        return <Icons.Trophy className="w-6 h-6 text-brand-purple" />;
      case "Globe":
        return <Icons.Globe className="w-6 h-6 text-brand-purple" />;
      case "Award":
        return <Icons.Award className="w-6 h-6 text-brand-purple" />;
      default:
        return <Icons.HelpCircle className="w-6 h-6 text-brand-purple" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-purple-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest bg-brand-purple/10 border border-brand-purple/15 px-3.5 py-1.5 rounded-full">
            The CyberWise Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Why Hundreds of Kerala Students Choose Us
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2.5 font-light">
            We operate differently than average educational organizations. We craft active, battle-tested performers with technical portfolios designed to land jobs immediately.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative bg-brand-dark hover:bg-brand-card border border-zinc-850 hover:border-brand-purple/30 p-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-brand-purple/5 flex flex-col justify-between"
            >
              {/* Outer decorative line on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-purple to-brand-purple-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />

              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-brand-black border border-zinc-800 flex items-center justify-center mb-5 group-hover:border-brand-purple/20 group-hover:scale-105 transition-all duration-300">
                  {renderIcon(benefit.iconName)}
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-500 group-hover:text-zinc-400 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-600 font-mono">
                <span>MODULE 0{idx + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-brand-purple transition-all duration-300">
                  ACTIVATE &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro-copy banner */}
        <div className="mt-16 bg-brand-dark/40 border border-zinc-850 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
              <Icons.ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Admissions Filling Rapidly!</h4>
              <p className="text-xs text-zinc-400 mt-0.5">We maintain tiny practical batches of 15 members to guarantee 1-on-1 expert laptop attention.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 bg-brand-purple hover:bg-brand-purple-light text-brand-black text-xs font-bold rounded-lg transition-transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Request Batch Reservation
          </button>
        </div>

      </div>
    </section>
  );
}
