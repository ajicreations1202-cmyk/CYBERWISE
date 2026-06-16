/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Courses from "./components/Courses";
import WhoCanJoin from "./components/WhoCanJoin";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleEnquireCourse = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    
    // Smooth scroll down to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80; // sticky header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-brand-black text-zinc-100 min-h-screen antialiased flex flex-col font-sans select-text selection:bg-brand-purple selection:text-brand-black">
      
      {/* 1. Navigation Header */}
      <Header />

      {/* 2. Main Sections Container */}
      <main className="flex-1">
        
        {/* Hero Banner Area */}
        <Hero 
          onExploreCourses={() => handleScrollToSection("courses")}
          onContactUs={() => handleScrollToSection("contact")}
        />

        {/* Statistics Counters */}
        <Statistics />

        {/* About Academy Section */}
        <AboutUs />

        {/* Why Choose Us Modules Grid */}
        <WhyChooseUs />

        {/* Dynamic Courses browser with Interactive Syllabus Expanders */}
        <Courses onEnquireCourse={handleEnquireCourse} />

        {/* Who Can Join Targeted Demographics */}
        <WhoCanJoin />

        {/* Features Split Section & Certifications Overview */}
        <Features />

        {/* Alumni Testimonials Feedback */}
        <Testimonials />

        {/* Image Portfolio Gallery */}
        <Gallery />

        {/* Contact Form, copy buttons, and Interactive Maps */}
        <Contact 
          selectedCourse={selectedCourse}
          onClearCourse={() => setSelectedCourse(null)}
        />

      </main>

      {/* 3. Footer with quick controls */}
      <Footer />

      {/* Floating Interactive WhatsApp Connection Button */}
      <WhatsAppFloatingButton />

    </div>
  );
}

