import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, Award, MessageCircle, ExternalLink } from "lucide-react";
import { INST_INFO, COURSES_DATA } from "../data";

interface ContactProps {
  selectedCourse: string | null;
  onClearCourse: () => void;
}

export default function Contact({ selectedCourse, onClearCourse }: ContactProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSucceeded, setSubmitSucceeded] = useState(false);
  const [isDarkMap, setIsDarkMap] = useState(true);

  // Sync selected course from elsewhere
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.course) {
      alert("Please provide at least Name, Phone, and your Selected Course.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API transport lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSucceeded(true);
      // Reset form variables
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
      });
      onClearCourse();
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Separation line design */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-widest bg-brand-purple/10 border border-brand-purple/15 px-3.5 py-1.5 rounded-full font-bold">
            Inquire Today
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
            Secure Your Admission Cohort Seat
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light">
            Fill in the information form below to coordinate curriculum queries, review pricing schedules, or book a free trial laptop lesson.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates details & embedded Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Cards Info */}
            <div className="bg-brand-dark/80 p-6 sm:p-8 rounded-2xl border border-zinc-850 space-y-6">
              <h3 className="text-lg font-bold text-white mb-2">Our Campus Coordinates</h3>
              
              {/* Address Node */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-brand-black border border-zinc-850 text-brand-purple rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase">Campus Location</p>
                  <p className="text-zinc-300 text-xs sm:text-sm mt-1 leading-relaxed">
                    {INST_INFO.address}
                  </p>
                </div>
              </div>

              {/* Responsive Phone Node */}
              <div className="flex items-start justify-between space-x-3.5">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-brand-black border border-zinc-850 text-brand-purple rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase">Consulting Hotline</p>
                    <a href={`tel:${INST_INFO.phoneRaw}`} className="text-zinc-200 hover:text-brand-purple text-xs sm:text-sm font-semibold transition-colors mt-1 block">
                      {INST_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(INST_INFO.phone, "phone")}
                  className="p-2 text-zinc-500 hover:text-brand-purple bg-brand-black/40 hover:bg-brand-black rounded-lg border border-zinc-850 transition-all cursor-pointer"
                  title="Copy Hotline"
                >
                  {copiedField === "phone" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Node */}
              <div className="flex items-start justify-between space-x-3.5">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-brand-black border border-zinc-850 text-brand-purple rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase">Corporate Inbox</p>
                    <a href={`mailto:${INST_INFO.email}`} className="text-zinc-200 hover:text-brand-purple text-xs sm:text-sm font-semibold transition-colors mt-1 block break-all">
                      {INST_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(INST_INFO.email, "email")}
                  className="p-2 text-zinc-500 hover:text-brand-purple bg-brand-black/40 hover:bg-brand-black rounded-lg border border-zinc-850 transition-all cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === "email" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Embedded Google Map Iframe as requested */}
            <div className="bg-brand-dark rounded-2xl overflow-hidden border border-zinc-850 shadow-lg aspect-video w-full relative group/map">
              <iframe
                src={INST_INFO.mapsEmbedUrl}
                title="CyberWise Info Solutions Google Map Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`w-full h-full transition-all duration-500 ${
                  isDarkMap ? "filter invert grayscale contrast-125 opacity-80" : "opacity-100"
                }`}
              />
              <div className="absolute top-3 left-3 bg-brand-black/95 px-3 py-1.5 rounded-lg border border-zinc-800 text-[10px] text-zinc-300 font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-purple animate-bounce" />
                <span className="font-semibold tracking-wider">CYBERWISE ACADEMY</span>
              </div>
              
              <button
                type="button"
                onClick={() => setIsDarkMap(!isDarkMap)}
                className="absolute top-3 right-3 bg-brand-black/95 hover:bg-brand-purple hover:text-brand-black text-zinc-400 border border-zinc-800 hover:border-brand-purple px-2 text-[10px] hover:font-bold py-1 rounded transition-all font-mono cursor-pointer"
                title={isDarkMap ? "Switch to Color Map View" : "Switch to Cyber Dark Map View"}
              >
                {isDarkMap ? "Color Map" : "Dark Map"}
              </button>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/95 via-brand-black/60 to-transparent p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-900/30">
                <div className="text-left font-sans">
                  <p className="text-xs font-bold text-white">Angadippuram, Perinthalmanna</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5 leading-none">Railway Station Rd, Malappuram district, Kerala</p>
                </div>
                <a
                  href="https://maps.google.com/?q=CyberWise+Info+Solutions+Angadippuram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-brand-purple text-brand-black hover:bg-brand-purple-light text-[10px] font-extrabold uppercase rounded-lg transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap self-start sm:self-auto font-bold font-sans"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-brand-black stroke-[3]" />
                </a>
              </div>
            </div>

            {/* Micro Proximity coordinates assistant card */}
            <div className="bg-brand-dark/40 border border-zinc-850 p-4.5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-zinc-300">📍 Proximity Landmark Guidelines</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  Directly adjacent to the **Railway Station Road** at Angadippuram, Perinthalmanna. Highly accessible via public buses, railway schedules, and local district taxis.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form Module */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-px bg-gradient-to-br from-brand-purple/15 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="relative bg-brand-card border border-zinc-800 p-8 sm:p-10 rounded-2xl shadow-xl">
              
              {submitSucceeded ? (
                /* Success message modal screen inside the card envelope */
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-6">
                  <div className="w-16 h-16 bg-brand-purple/15 border border-brand-purple/40 rounded-full flex items-center justify-center text-brand-purple">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-sans">Message Executed Safely!</h3>
                    <p className="text-zinc-400 text-sm mt-2.5 max-w-sm mx-auto font-light leading-relaxed">
                      Thank you for contacting **CyberWise Skillversity**. An academic counselor will reach out via WhatsApp/Phone shortly to verify pricing and cohort schedule availability.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSucceeded(false)}
                    className="px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-light text-brand-black font-bold text-xs rounded-xl transition-all cursor-pointer font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                /* Main interactive form field grid */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between border-b border-zinc-850 pb-5">
                    <div>
                      <h3 className="text-lg font-bold text-white">Enrollment Application</h3>
                      <p className="text-zinc-500 text-xs mt-1">Please populate correct information for immediate attention.</p>
                    </div>
                    {selectedCourse && (
                      <span className="bg-brand-purple/15 text-brand-purple border border-brand-purple/30 text-[10px] uppercase font-bold px-2 py-0.5 rounded flex items-center gap-1 font-bold">
                        <Award className="w-3 h-3" />
                        <span>Preselected</span>
                      </span>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="text-left">
                      <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Your Full Name <span className="text-brand-purple">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Ramachandran"
                        className="w-full bg-brand-dark border border-zinc-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-all outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="text-left">
                      <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Email Address <span className="text-zinc-600">(Optional)</span>
                      </label>
                      <input
                        type="type"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@domain.com"
                        className="w-full bg-brand-dark border border-zinc-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Whatsapp / Phone */}
                    <div className="text-left">
                      <label htmlFor="phone" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Contact / WhatsApp Number <span className="text-brand-purple">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 XXXXX XXXXX"
                        className="w-full bg-brand-dark border border-zinc-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-all outline-none"
                      />
                    </div>

                    {/* Course Droplist */}
                    <div className="text-left">
                      <label htmlFor="course" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Selected Course Module <span className="text-brand-purple">*</span>
                      </label>
                      <select
                        name="course"
                        id="course"
                        required
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full bg-brand-dark border border-zinc-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-zinc-300 text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-all outline-none cursor-pointer"
                      >
                        <option value="">-- Choose Course Module --</option>
                        {COURSES_DATA.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Message Textarea */}
                  <div className="text-left">
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Additional Message / Career Goals
                      </label>
                      <span className="text-[10px] text-zinc-500">Optional</span>
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. I want to learn SEO to scale my local business, please send information about fees and weekday batch hours..."
                      className="w-full bg-brand-dark border border-zinc-800 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-white text-xs sm:text-sm px-4 py-3.5 rounded-xl transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Legal warning disclaimer */}
                  <div className="text-zinc-500 text-[10px] leading-normal font-light bg-brand-black/40 p-3.5 rounded-lg border border-zinc-850 text-left">
                    * By submitting this inquiry form, you consent to let CyberWise Info Solutions counseling desk communicate with you via WhatsApp or SMS to deliver syllabus guidelines and fee structures.
                  </div>

                  {/* CTA Submit Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                     <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-4 bg-brand-purple hover:bg-brand-purple-light text-brand-black font-extrabold rounded-xl text-center flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-lg shadow-brand-purple/15 disabled:opacity-50 font-bold"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-brand-black" />
                          <span>Submit Admission Application</span>
                        </>
                      )}
                    </button>
                    
                    {/* WhatsApp Quick Connect Button */}
                    <a
                      href="https://wa.me/919567181202?text=Hello%20CyberWise%20Skillversity,%20I%20am%20enquiring%20about%20your%20digital%20marketing%20courses."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Quick Connect</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
