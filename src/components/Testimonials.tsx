import React from "react";
import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest bg-brand-purple/10 border border-brand-purple/15 px-3.5 py-1.5 rounded-full">
            Alumni Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Hear From Our Outstanding Graduates
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light">
            Our alumni work at prominent local web agencies, start-ups, and corporate offices across Kerala and remote multinational projects. Here&apos;s their direct feedback.
          </p>
        </div>

        {/* Grid layout for testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-brand-dark hover:bg-brand-card border border-zinc-850 hover:border-brand-purple/20 p-6 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Quotation Watermark Mark */}
              <div className="absolute top-6 right-6 text-zinc-900 group-hover:text-brand-purple/10 transition-colors">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div>
                {/* Stars Component */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-brand-purple fill-brand-purple" : "text-zinc-700"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-zinc-500 font-semibold ml-2">5.0 Rating</span>
                </div>

                {/* Comment Text */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light italic mb-6">
                  &quot;{testimonial.comment}&quot;
                </p>
              </div>

              {/* Profile Details footer */}
              <div className="flex items-center justify-between pt-5 border-t border-zinc-850">
                <div className="flex items-center space-x-3">
                  {/* Dynamic Initial Circle Icon */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-light flex items-center justify-center font-bold text-brand-black text-sm uppercase">
                    {testimonial.name.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-purple transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-zinc-510 text-xs mt-0.5">{testimonial.role}</p>
                  </div>
                </div>

                {/* Placed badge */}
                <div className="inline-flex items-center space-x-1.5 bg-brand-black/95 border border-zinc-800 px-2.5 py-1 rounded-md text-[10px] text-zinc-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-purple" />
                  <span>{testimonial.source}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom ratings summary representation */}
        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-500 font-medium flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-purple" />
            <span>Average 4.9/5 stars rating mapped across Google Reviews and active student feedback files.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
