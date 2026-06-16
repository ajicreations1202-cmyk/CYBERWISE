import React, { useState } from "react";
import { Camera, X, ZoomIn, Eye } from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "../data";

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(GALLERY_DATA.map((item) => item.category)))];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
      <div className="absolute right-10 bottom-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-bold text-brand-purple uppercase tracking-widest block mb-2">
              Our Campus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Glimpse Into CyberWise Labs & Workspaces
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2.5 font-light">
              Explore our tech-enabled classrooms at Angadippuram, where ideas turn into structured, high-conversion campaigns.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 shrink-0 bg-brand-dark/80 p-1.5 rounded-lg border border-zinc-850 self-start md:self-end">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-purple text-brand-black shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat === "all" ? "All Photos" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative bg-brand-dark border border-zinc-850 rounded-2xl overflow-hidden aspect-video shadow-lg cursor-pointer transition-all duration-300 hover:border-brand-purple/20 hover:shadow-brand-purple/5"
            >
              {/* Image element with lazy setup & referrer attributes */}
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay with custom info controls */}
              <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-brand-purple font-bold uppercase py-0.5 px-2 bg-brand-black/90 border border-brand-purple/20 rounded">
                    {item.category}
                  </span>
                  <div className="p-1.5 bg-brand-purple rounded-lg text-brand-black">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Click to view high-res workspace detail</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Modal Popup */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/90 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-brand-card/95 border border-zinc-800 p-3 sm:p-4 rounded-2xl overflow-hidden animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button targeting 44px hit size */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-white bg-brand-black/80 rounded-full border border-zinc-800 cursor-pointer focus:outline-none"
                style={{ minWidth: "44px", minHeight: "44px" }}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox image content */}
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-brand-black">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metadata strip */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-purple font-bold uppercase">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">{selectedPhoto.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 font-light max-w-sm sm:text-right">
                  Our premises features gigabit learning links and direct access to testing laptops.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
