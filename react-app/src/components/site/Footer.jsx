import React from 'react';
import { GYM_DATA } from '../../data/content';
import { Phone, MessageSquare } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#060606] border-t border-border pt-16 pb-12 px-6 lg:px-12">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
        
        <div className="flex justify-between items-center flex-wrap gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="font-display text-3xl tracking-tight text-white uppercase leading-none">
              THE FITNESS<span className="text-accent">WORLD</span>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent-gold font-bold mt-1">
              LOHAR PUL · NEW TOWN, KOLKATA
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs font-bold">
            <a href={GYM_DATA.phoneHref} className="text-gray-400 hover:text-white flex items-center gap-1.5">
              <Phone size={13} className="text-accent" />
              <span>097759 95300</span>
            </a>
            <a
              href={`https://wa.me/${GYM_DATA.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
            >
              <MessageSquare size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="text-center font-mono text-[11px] text-gray-500 uppercase tracking-wider">
          © 2026 THE FITNESS WORLD (LOHAR PUL). ALL RIGHTS RESERVED. CN129, THAKDARI RD, NEAR LOHA PUL, ACTION AREA I, NEWTOWN, KOLKATA 700102.
        </div>

      </div>
    </footer>
  );
};
