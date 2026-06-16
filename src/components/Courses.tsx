import React, { useState } from "react";
import { BookOpen, Calendar, Award, CheckCircle2, ChevronDown, ChevronUp, Sparkles, Send } from "lucide-react";
import { COURSES_DATA, Course } from "../data";

interface CoursesProps {
  onEnquireCourse: (courseTitle: string) => void;
}

export default function Courses({ onEnquireCourse }: CoursesProps) {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const toggleSyllabus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (expandedCourseId === id) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(id);
    }
  };

  // Filter logic (for interactive responsive segmentation)
  const filteredCourses = COURSES_DATA.filter(course => {
    if (activeFilter === "all") return true;
    if (activeFilter === "performance") {
      return ["seo", "ppc", "analytics"].includes(course.id);
    }
    if (activeFilter === "creative") {
      return ["smm", "content", "web-dev"].includes(course.id);
    }
    if (activeFilter === "ai") {
      return ["ai-marketing"].includes(course.id);
    }
    return true;
  });

  return (
    <section id="courses" className="py-24 bg-brand-dark/40 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold text-brand-purple uppercase tracking-widest block mb-2">
              Transformative Syllabus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Elite Curriculums Built for the Modern Economy
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2.5 font-light">
              We cover simple local business setups up to automated corporate marketing pipelines. Choose your perfect digital marketing module below.
            </p>
          </div>

          {/* Filter Pill Buttons for Interactive Experience */}
          <div className="flex flex-wrap gap-2 shrink-0 bg-brand-black/80 p-1.5 rounded-xl border border-zinc-800 self-start md:self-end">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "all"
                   ? "bg-brand-purple text-brand-black shadow"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Modules
            </button>
            <button
              onClick={() => setActiveFilter("performance")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "performance"
                   ? "bg-brand-purple text-brand-black shadow"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Performance & SEO
            </button>
            <button
              onClick={() => setActiveFilter("creative")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "creative"
                   ? "bg-brand-purple text-brand-black shadow"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Creative & Web
            </button>
            <button
              onClick={() => setActiveFilter("ai")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "ai"
                   ? "bg-brand-purple text-brand-black shadow"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              AI Specialist
            </button>
          </div>
        </div>

        {/* Grid layout for Course Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            return (
              <div
                key={course.id}
                onClick={(e) => toggleSyllabus(course.id, e)}
                className="group relative bg-brand-card hover:bg-brand-card/90 border border-zinc-850 hover:border-brand-purple/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Glow Spotlight on Hover */}
                <div className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-brand-purple/30 transition-all duration-300 pointer-events-none" />
                
                <div>
                  
                  {/* Top Stats and Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-xs text-zinc-400 font-medium font-mono">
                      <span className="flex items-center text-brand-purple">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {course.duration}
                      </span>
                      <span>&bull;</span>
                      <span>{course.level}</span>
                    </div>

                    {course.trendingBadge && (
                      <span className="inline-flex items-center bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                        <Sparkles className="w-2.5 h-2.5 mr-1" />
                        {course.trendingBadge}
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed font-light line-clamp-3">
                    {course.description}
                  </p>

                  {/* Skills Gained Segment */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.skillsGained.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-brand-black text-zinc-400 text-[10px] font-medium border border-zinc-800 px-2.5 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Syllabus Accoridon Panel */}
                  <div
                    className={`mt-6 overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-brand-black/60 p-4 rounded-xl border border-zinc-850/80 space-y-3.5 mb-2 text-left">
                      <h4 className="text-xs font-bold text-brand-purple uppercase tracking-wider flex items-center">
                        <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                        Syllabus Curriculum Modules:
                      </h4>
                      <ul className="space-y-2">
                        {course.syllabus.map((item, keyIdx) => (
                          <li key={keyIdx} className="flex items-start text-xs text-zinc-350 leading-relaxed font-light">
                            <CheckCircle2 className="w-4 h-4 text-brand-purple/95 shrink-0 mr-2 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Card Controls Footer */}
                <div className="mt-8 pt-5 border-t border-zinc-850 flex items-center justify-between">
                  <button
                    onClick={(e) => toggleSyllabus(course.id, e)}
                    className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <span>{isExpanded ? "Hide Syllabus Details" : "Inspect Syllabus"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquireCourse(course.title);
                    }}
                    className="px-4 py-2 bg-brand-purple/10 hover:bg-brand-purple border border-brand-purple/30 hover:border-brand-purple text-brand-purple hover:text-brand-black text-xs font-bold rounded-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
