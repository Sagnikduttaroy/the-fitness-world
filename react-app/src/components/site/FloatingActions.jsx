import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { GYM_DATA } from '../../data/content';

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 items-end pointer-events-auto">
      {/* PHONE CALL */}
      <a
        href={GYM_DATA.phoneHref}
        className="w-12 h-12 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center shadow-[0_4px_18px_rgba(255,59,48,0.6)] transition-transform hover:scale-110"
        aria-label="Call Gym"
      >
        <Phone size={20} />
      </a>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20The%20Fitness%20World%2C%20I%20want%20to%20inquire%20about%20gym%20membership.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={26} />
      </a>
    </div>
  );
};
