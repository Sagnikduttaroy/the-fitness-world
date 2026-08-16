import React, { useState } from 'react';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { GYM_DATA } from '../../data/content';

export const Navbar = ({ onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Programs' },
    { href: '#gallery', label: 'Arena' },
    { href: '#transformations', label: 'Results' },
    { href: '#trainers', label: 'Coaches' },
    { href: '#calculator', label: 'Diet Calc' },
    { href: '#pricing', label: 'Memberships' },
    { href: '#location', label: 'Location' },
  ];

  return (
    <>
      {/* TOP ANNOUNCEMENT TICKER */}
      <div className="bg-surface border-b border-border py-1.5 px-4 text-center font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 bg-accent/15 border border-accent/40 text-accent font-bold px-1.5 py-0.5 rounded text-[9px]">
          ● 24/7 LIVE
        </span>
        <span>OPEN 24 HOURS · 365 DAYS · 4.9★ GOOGLE · NEWTOWN</span>
      </div>

      {/* STICKY GLASS HEADER */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          
          {/* BRAND */}
          <a href="#" className="flex flex-col group">
            <div className="font-display text-xl sm:text-2xl lg:text-3xl tracking-tight text-white uppercase leading-none group-hover:text-accent transition-colors">
              THE FITNESS<span className="text-accent">WORLD</span>
            </div>
            <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-accent-gold font-bold mt-0.5">
              LOHAR PUL · NEW TOWN
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <a
              href={GYM_DATA.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 bg-surface hover:bg-card border border-border px-3.5 py-2 rounded-sm text-xs font-mono font-bold text-foreground transition-colors"
            >
              <Phone size={13} className="text-accent" />
              <span>097759 95300</span>
            </a>

            <button
              type="button"
              onClick={onOpenTrialModal}
              className="bg-accent hover:bg-accent-hover text-white text-xs font-extrabold uppercase tracking-wider px-4 py-2.5 rounded-sm shadow-[0_2px_12px_rgba(255,59,48,0.4)] transition-all flex items-center gap-1.5"
            >
              <span>Free Pass</span>
              <Zap size={13} className="fill-white" />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* MOBILE DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-condensed text-2xl uppercase tracking-wide text-foreground hover:text-accent py-1 border-b border-border/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3 font-mono text-xs">
              <a
                href={GYM_DATA.phoneHref}
                className="flex items-center justify-center gap-2 bg-surface border border-border py-3 rounded text-foreground"
              >
                <Phone size={14} className="text-accent" />
                <span>Call 097759 95300</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
