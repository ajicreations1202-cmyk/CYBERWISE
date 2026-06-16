import React, { useState, useEffect, useRef } from "react";
import { STATISTICS_DATA, Stat } from "../data";

// Custom count-up animation component in TS
interface CountUpProps {
  value: number;
  durationMs?: number;
}

function CountUp({ value, durationMs = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalFrames = Math.min(Math.floor(durationMs / 16), 120);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentVal = Math.round(end * (progress * (2 - progress)));
      
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentVal);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value, durationMs, hasStarted]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

export default function Statistics() {
  return (
    <section id="statistics" className="py-20 bg-brand-dark/50 relative overflow-hidden">
      {/* Background Separator lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent" />
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS_DATA.map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-brand-card/90 border border-zinc-850 p-6 sm:p-8 rounded-2xl hover:border-brand-purple/20 transition-all duration-300"
            >
              {/* Value displaying animated counter */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight flex items-center justify-center">
                <CountUp value={stat.value} />
                <span className="text-brand-purple select-none ml-0.5">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-sm font-bold text-brand-purple-light mt-3 uppercase tracking-wide">
                {stat.label}
              </p>

              {/* Description sub-label */}
              <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
