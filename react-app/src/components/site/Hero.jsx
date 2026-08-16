import React from 'react';
import { Reveal } from '../common/Reveal';
import { Zap, ArrowDown, Phone, MapPin } from 'lucide-react';
import { GYM_DATA } from '../../data/content';

export const Hero = ({ onOpenTrialModal }) => {
  return (
    <div className="relative border-b border-border bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-background to-background py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 overflow-hidden">
      
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* HERO COPY - CENTER ALIGNED */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* BADGES */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="bg-accent/15 border border-accent/40 text-accent font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
                ⚡ 24/7/365 ARENA
              </span>
              <span className="bg-accent-gold/15 border border-accent-gold/40 text-accent-gold font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
                ⭐ 4.9★ GOOGLE (99+ REVIEWS)
              </span>
              <span className="bg-surface border border-border text-muted-foreground font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded">
                📍 LOHAR PUL, NEW TOWN
              </span>
            </div>
          </Reveal>

          {/* MAIN HEADLINE */}
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-tight text-white leading-[0.95] mb-6">
              FORGE YOUR <span className="text-accent text-glow">STRONGEST SELF</span> IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">NEW TOWN</span>.
            </h1>
          </Reveal>

          {/* SUBHEAD */}
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              Newtown's highest-rated fitness arena. Imported biomechanical machinery, certified coaches, functional CrossFit arena, Kickboxing, Zumba &amp; 100% free customized nutrition charts.
            </p>
          </Reveal>

          {/* CTA GROUP */}
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white text-sm font-extrabold uppercase tracking-wider px-8 py-4 rounded-sm shadow-[0_4px_24px_rgba(255,59,48,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <span>Claim 1-Day Free Pass</span>
                <Zap size={16} className="fill-white" />
              </button>

              <a
                href="#pricing"
                className="w-full sm:w-auto bg-surface hover:bg-card border border-border px-6 py-4 rounded-sm text-sm font-bold uppercase tracking-wider text-foreground text-center flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Memberships</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={GYM_DATA.phoneHref}
                className="w-full sm:w-auto bg-surface hover:bg-card border border-accent-gold/40 text-accent-gold px-6 py-4 rounded-sm text-sm font-mono font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone size={15} />
                <span>097759 95300</span>
              </a>
            </div>
          </Reveal>

          {/* STATS STRIP */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 mt-8 border-t border-border/70 w-full">
              {GYM_DATA.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl text-white leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>

        {/* HERO LIVE STATUS CARD */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="bg-card border border-border-medium rounded-lg p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex justify-between items-start border-b border-border pb-4 mb-5">
                <div>
                  <div className="font-condensed text-2xl text-white uppercase tracking-wide">
                    THE FITNESS WORLD ARENA
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    CN129, THAKDARI RD · ACTION AREA I
                  </div>
                </div>
                <span className="bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full">
                  ● LIVE: OPEN NOW
                </span>
              </div>

              {/* HIGHLIGHTS */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="bg-surface border border-border rounded p-3">
                  <span className="text-accent font-bold">[01]</span>
                  <div className="font-bold text-foreground mt-0.5">Heavy Iron</div>
                  <div className="text-[10px] text-muted-foreground">Biomechanical rigs</div>
                </div>
                <div className="bg-surface border border-border rounded p-3">
                  <span className="text-accent-gold font-bold">[02]</span>
                  <div className="font-bold text-foreground mt-0.5">CrossFit &amp; HIIT</div>
                  <div className="text-[10px] text-muted-foreground">Conditioning drills</div>
                </div>
                <div className="bg-surface border border-border rounded p-3">
                  <span className="text-accent font-bold">[03]</span>
                  <div className="font-bold text-foreground mt-0.5">Zumba Studio</div>
                  <div className="text-[10px] text-muted-foreground">High-energy batches</div>
                </div>
                <div className="bg-surface border border-border rounded p-3">
                  <span className="text-accent-gold font-bold">[04]</span>
                  <div className="font-bold text-foreground mt-0.5">Free Custom Diet</div>
                  <div className="text-[10px] text-muted-foreground">Tailored macro plan</div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Ready to Start Today?</div>
                  <div className="text-[10px] text-accent font-mono">Instant response on WhatsApp</div>
                </div>
                <a
                  href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20The%20Fitness%20World%2C%20I%20want%20to%20inquire%20about%20gym%20membership.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-hover text-white font-mono text-[11px] font-bold px-3 py-2 rounded uppercase tracking-wider transition-colors"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  );
};
