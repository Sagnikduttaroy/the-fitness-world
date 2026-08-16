import React from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { Counter } from '../common/Counter';

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 lg:px-12 max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <div className="lg:col-span-7">
          <Reveal>
            <Chapter
              index="01"
              kicker="THE MANIFESTO"
              title="BUILT IN NEW TOWN. FORGED BY THE GRIND."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Located at Thakdari Road near Loha Pul in Action Area I, <strong className="text-foreground">The Fitness World</strong> is Newtown's most celebrated 24/7 fitness center. We built an environment where beginners feel empowered, athletes push past plateaus, and everyone has access to professional equipment and elite coaching.
              </p>
              <p>
                With <strong className="text-foreground">24/7/365 non-stop access</strong>, your workout never has to wait for gym opening hours. Plus, every membership includes personalized form guidance from certified floor trainers and free science-backed nutrition diet charts.
              </p>
            </div>
          </Reveal>

          {/* STATS MATRIX */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              <div className="bg-card border border-border rounded p-4 text-center">
                <div className="font-display text-3xl sm:text-4xl text-accent leading-none mb-1">
                  <Counter end={4.9} decimals={1} />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase">Google Rating</div>
              </div>

              <div className="bg-card border border-border rounded p-4 text-center">
                <div className="font-display text-3xl sm:text-4xl text-accent-gold leading-none mb-1">
                  24/7
                </div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase">365 Days Open</div>
              </div>

              <div className="bg-card border border-border rounded p-4 text-center">
                <div className="font-display text-3xl sm:text-4xl text-accent leading-none mb-1">
                  <Counter end={9} suffix="+" />
                </div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase">Disciplines</div>
              </div>

              <div className="bg-card border border-border rounded p-4 text-center">
                <div className="font-display text-3xl sm:text-4xl text-accent-gold leading-none mb-1">
                  100%
                </div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase">Free Diet Charts</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* FACILITY PHOTO */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative rounded-lg overflow-hidden border border-border group">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
                alt="The Fitness World Newtown Arena"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="font-mono text-xs text-accent-gold font-bold uppercase tracking-wider mb-1">
                  // THAKDARI ROAD, ACTION AREA 1
                </div>
                <div className="font-condensed text-2xl text-white uppercase">
                  12,000 SQ.FT OF RAW IRON &amp; RECOVERY
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
