import React, { useState } from "react";
import * as Icons from "lucide-react";
import { FEATURES_LIST } from "../data";

export default function Features() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MousePointerClick":
        return <Icons.MousePointerClick className="w-5 h-5 text-brand-purple" />;
      case "Calendar":
        return <Icons.Calendar className="w-5 h-5 text-brand-purple" />;
      case "Users":
        return <Icons.Users className="w-5 h-5 text-brand-purple" />;
      case "FileSpreadsheet":
        return <Icons.FileSpreadsheet className="w-5 h-5 text-brand-purple" />;
      case "Sparkles":
        return <Icons.Sparkles className="w-5 h-5 text-brand-purple animate-pulse" />;
      case "CheckCircle2":
        return <Icons.CheckCircle2 className="w-5 h-5 text-brand-purple" />;
      case "Heart":
        return <Icons.Heart className="w-5 h-5 text-brand-purple" />;
      default:
        return <Icons.Compass className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-brand-dark/30 relative overflow-hidden">
      {/* Background Separator lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent" />
      
      {/* Glow ambient circle */}
      <div className="absolute right-10 top-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual features grid list */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-purple uppercase tracking-widest block mb-2">
                Operational Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Our Advanced Industry <br />
                <span className="text-brand-purple">Training System</span>
              </h2>
              <p className="text-zinc-400 text-sm mt-3 font-light leading-relaxed">
                We design environments that simulate actual corporate agency rooms. Discover how our operational principles prepare you for competitive interviews.
              </p>
            </div>

            {/* List items with hover active state */}
            <div className="space-y-4">
              {FEATURES_LIST.map((feat, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`p-4 rounded-xl border transition-all duration-300 flex items-start space-x-4 cursor-default ${
                      isHovered
                        ? "bg-brand-card border-brand-purple/30 shadow-lg shadow-brand-purple/5"
                        : "bg-brand-dark/60 border-zinc-900 hover:border-zinc-800"
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg shrink-0 transition-transform duration-300 ${isHovered ? "bg-brand-purple/15 scale-105" : "bg-brand-black"}`}>
                      {getIcon(feat.iconName)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white transition-colors duration-350">{feat.title}</h4>
                      <p className="text-zinc-500 text-xs sm:text-sm mt-1 leading-relaxed font-light">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="relative">
            <div className="bg-brand-card border border-zinc-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between min-h-[440px]">
              
              {/* Card top banner */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-brand-purple font-bold uppercase py-1 px-2 bg-brand-purple/10 border border-brand-purple/20 rounded">
                    CREDENTIAL STANDARDS
                  </span>
                  <span className="text-xs text-zinc-500">CYBERWISE LABS</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Earn Globally Endorsed Certifications
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2.5 font-light">
                  CyberWise Skillversity courses are fully aligned with current curriculum blueprints and certifications from main digital marketing authorities. You don&apos;t just complete our modules; you achieve vetted proof of your skills.
                </p>

                {/* Vetted Certificate list representations */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-brand-black/60 p-4 rounded-xl border border-zinc-850 flex flex-col justify-between">
                    <div>
                      <Icons.Search className="w-5 h-5 text-brand-purple mb-2" />
                      <h4 className="text-xs font-bold text-white uppercase">Google Search Ads</h4>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 mt-4 block">OFFICIAL EXAM PREP</span>
                  </div>

                  <div className="bg-brand-black/60 p-4 rounded-xl border border-zinc-850 flex flex-col justify-between">
                    <div>
                      <Icons.Users className="w-5 h-5 text-brand-purple-light mb-2" />
                      <h4 className="text-xs font-bold text-white uppercase">Meta Ad Planning</h4>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 mt-4 block">ASSOCIATE LEVEL</span>
                  </div>

                  <div className="bg-brand-black/60 p-4 rounded-xl border border-zinc-850 flex flex-col justify-between">
                    <div>
                      <Icons.Heart className="w-5 h-5 text-brand-purple mb-2" />
                      <h4 className="text-xs font-bold text-white uppercase">HubSpot Inbound</h4>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 mt-4 block">CONTENT STRATEGY</span>
                  </div>

                  <div className="bg-brand-black/60 p-4 rounded-xl border border-zinc-850 flex flex-col justify-between">
                    <div>
                      <Icons.Compass className="w-5 h-5 text-brand-purple-light mb-2" />
                      <h4 className="text-xs font-bold text-white uppercase">Semrush SEO Pro</h4>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 mt-4 block">TECHNICAL AUDITING</span>
                  </div>
                </div>
              </div>

              {/* Bottom certification callout logo represent */}
              <div className="mt-8 pt-6 border-t border-zinc-850 flex items-center justify-between">
                <p className="text-[11px] text-zinc-500 font-medium">Included in all Premium Batches</p>
                <div className="flex space-x-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-purple-light" />
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                </div>
              </div>

            </div>

            {/* Behind Ambient decorative grid item */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-purple/10 rounded-2xl pointer-events-none z-0" />
          </div>

        </div>

      </div>
    </section>
  );
}
