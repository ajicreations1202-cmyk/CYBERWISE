import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);

  useEffect(() => {
    // Show the friendly message bubble after 2 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    setHasNewMessage(false);
    const phoneNumber = "919567181202";
    const text = encodeURIComponent(
      "Hello CyberWise Skillversity, I would like to get more information about your courses and admission guidelines."
    );
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none font-sans">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-3 bg-zinc-900 border border-emerald-500/30 text-white rounded-2xl p-4 shadow-2xl max-w-xs pointer-events-auto relative text-left"
            id="whatsapp-tooltip-bubble"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2 right-2 text-zinc-400 hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Close tooltip"
              id="whatsapp-tooltip-close"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Content Details */}
            <div className="flex items-start space-x-3 pr-4">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-brand-black text-xs font-bold font-mono">
                  CW
                </div>
                {/* Active Status Ring */}
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-[#25D366] ring-2 ring-zinc-900 animate-pulse" />
              </div>
              
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-bold text-white">CyberWise Support</span>
                  <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/30 text-[#25D366] px-1.5 py-0.2 rounded-full font-semibold">
                    Online
                  </span>
                </div>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Hi there! 👋 Have questions about our Digital Marketing, SEO, or SMM bundles? Let's chat!
                </p>
                
                {/* Micro CTA */}
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-2.5 flex items-center space-x-1.5 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors pointer-events-auto cursor-pointer"
                  id="whatsapp-tooltip-cta"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Start Chat Now</span>
                </button>
              </div>
            </div>
            
            {/* Pointer arrow down */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-zinc-900 border-r border-b border-emerald-500/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse Ring & Floating Button */}
      <div className="relative pointer-events-auto">
        {/* Animated outer glowing core */}
        <div className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 blur-md animate-pulse pointer-events-none" />

        {/* Pulse outer waves */}
        {hasNewMessage && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
        )}

        <button
          onClick={handleWhatsAppClick}
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          id="whatsapp-floating-button"
        >
          {/* Custom official WhatsApp SVG inside */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>

          {/* Unread dot notification badge */}
          {hasNewMessage && (
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5" id="whatsapp-notif-dot">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-[#25D366]" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
