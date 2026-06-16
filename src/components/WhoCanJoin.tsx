import React from "react";
import * as Icons from "lucide-react";
import { WHO_CAN_JOIN_DATA } from "../data";

export default function WhoCanJoin() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <Icons.GraduationCap className="w-5 h-5 text-brand-purple" />;
      case "FileCheck":
        return <Icons.FileCheck className="w-5 h-5 text-brand-purple" />;
      case "Building":
        return <Icons.Building className="w-5 h-5 text-brand-purple" />;
      case "TrendingUp":
        return <Icons.TrendingUp className="w-5 h-5 text-brand-purple" />;
      case "Laptop":
        return <Icons.Laptop className="w-5 h-5 text-brand-purple" />;
      case "Network":
        return <Icons.Network className="w-5 h-5 text-brand-purple" />;
      case "RefreshCw":
        return <Icons.RefreshCw className="w-5 h-5 text-brand-purple" />;
      default:
        return <Icons.User className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <section id="who-join" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background radial spotlight circles */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-purple-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest bg-brand-purple/10 border border-brand-purple/15 px-3 py-1.5 rounded-full">
            Inclusive Community
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Is CyberWise Skillversity For You?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light">
            Our curriculum is built from the ground up, starting from basic terminology and scaling to top-level digital campaigns. We support all professional tracks.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_CAN_JOIN_DATA.map((target, idx) => (
            <div
              key={idx}
              className={`group relative p-6 bg-brand-dark hover:bg-brand-card border border-zinc-850 hover:border-brand-purple/20 rounded-2xl transition-all duration-300 shadow-md ${
                idx === 3 ? "lg:col-span-1" : "" // custom visual rhythm
              }`}
            >
              {/* Corner decorative light */}
              <div className="absolute top-3 right-3 text-zinc-700 group-hover:text-brand-purple/45 transition-colors font-mono text-xs font-bold select-none">
                0{idx + 1}
              </div>

              {/* Icon Container */}
              <div className="w-10 h-10 rounded-lg bg-brand-black border border-zinc-800 flex items-center justify-center mb-5 group-hover:bg-brand-purple/10 group-hover:border-brand-purple/20 transition-all duration-300">
                {renderIcon(target.iconName)}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors">
                {target.title}
              </h3>
              
              <p className="text-zinc-500 group-hover:text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                {target.description}
              </p>

              {/* Bottom decorative glowing point */}
              <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-brand-purple mt-5 transition-all duration-300" />
            </div>
          ))}

          {/* Call to Reservation Extra block */}
          <div className="bg-gradient-to-br from-brand-purple/10 to-transparent border border-brand-purple/20 p-6 rounded-2xl flex flex-col justify-between sm:col-span-2 lg:col-span-1 min-h-[200px]">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded uppercase font-bold">
                COOPERATIVE LINK
              </span>
              <h4 className="text-sm font-bold text-white mt-3">Ready to Join the Cohort?</h4>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                Don&apos;t let gaps in marketing theory slow down your recruitment prospects or company sales volume.
              </p>
            </div>
            <button
              onClick={() => {
                const formEl = document.getElementById("contact");
                if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs text-brand-purple hover:text-brand-purple-light font-bold flex items-center gap-1.5 hover:gap-2 cursor-pointer transition-all self-start mt-4"
            >
              <span>Secure Your Laptop Seat Now</span>
              <span>&rarr;</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
