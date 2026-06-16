import React from "react";
import { Award, ShieldCheck, Flame, Cpu, ArrowUpRight, CheckSquare } from "lucide-react";
import { INST_INFO } from "../data";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-brand-dark/50 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Graphic or Multi-layered Card Grid representation */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 bg-brand-card border border-zinc-800 p-8 rounded-2xl shadow-xl">
              <span className="text-[10px] font-mono tracking-widest text-brand-purple uppercase font-bold">
                SYSTEM ARCHITECTURE
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-4">
                Powered by Agency Ecosystem
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                Because CyberWise Skillversity is powered by **CyberWise Info Solutions** (an active digital marketing & software consulting agency), our students don&apos;t just study books. They integrate with live customer accounts, work under real-time client guidelines, and review actual budget matrices.
              </p>
              
              {/* Feature Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-brand-purple/10 p-2 rounded-lg text-brand-purple mt-1">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Live Client Assignments</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Solve campaign metrics for enterprise companies alongside our development labs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-brand-purple-light/10 p-2 rounded-lg text-brand-purple-light mt-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Industry Endorsement</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Gain recommendations that hold direct recruitment preference among agencies in Kerala.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-brand-purple/10 p-2 rounded-lg text-brand-purple mt-1">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">AI-Unified Workspaces</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">Utilize smart generative modules to execute high-volume text and graphics 5x faster.</p>
                  </div>
                </div>
              </div>

              {/* Agency link indicator */}
              <div className="mt-8 pt-6 border-t border-zinc-850 flex items-center justify-between text-xs text-zinc-500">
                <span>Enterprise Agency Wing:</span>
                <span className="font-bold text-zinc-300 hover:text-brand-purple transition-colors flex items-center gap-1">
                  {INST_INFO.poweredBy} <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Behind Ambient decorative grid item */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-purple/10 rounded-2xl pointer-events-none z-0" />
          </div>

          {/* Right Column: Copy text block */}
          <div className="flex flex-col space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs font-bold text-brand-purple uppercase tracking-widest block mb-2">
                Premier Digital Education Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Digital Leaders At <span className="text-brand-purple">CyberWise Skillversity</span>
              </h2>
            </div>

            <div className="text-zinc-300 font-medium text-base">
              &quot;Learn, Create, Grow, and Lead in the Digital Age.&quot;
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              We are strategically established at Angadippuram, Perinthalmanna, Malappuram. CyberWise Skillversity was created to tackle the massive disparity between academic theory and real-world execution capacity. 
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              We train students, fresh college graduates, corporate professionals, entrepreneurs, and freelancers in hyper-specialized advertising funnels, advanced search engine logic, conversion analytics, and content creation. You exit with a massive professional competitive advantage.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-brand-purple pl-4 py-1">
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-zinc-500 font-semibold tracking-wider uppercase mt-1">Practical Framework</p>
              </div>
              <div className="border-l-2 border-brand-purple-light pl-4 py-1">
                <p className="text-2xl font-black text-white">8+</p>
                <p className="text-xs text-zinc-500 font-semibold tracking-wider uppercase mt-1">Ad Tools Mastered</p>
              </div>
            </div>

            <div className="pt-4 flex justify-start">
              <div className="inline-flex items-center space-x-2 text-xs text-zinc-400 bg-brand-dark px-3 py-2 rounded-lg border border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-brand-purple" />
                <span>Licensed educational center of CyberWise Info Solutions.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
