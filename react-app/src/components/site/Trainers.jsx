import React from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { GYM_DATA } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export const Trainers = () => {
  return (
    <section id="trainers" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="05"
        kicker="THE COACHES"
        title="LED BY CERTIFIED ELITE COACHES"
        sub="Every coach at The Fitness World brings national certifications (K11, ACE, ACSM) and proven transformation records."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GYM_DATA.trainers.map((trainer, idx) => (
          <Reveal key={trainer.name} delay={idx * 0.1}>
            <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col h-full group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="font-condensed text-2xl text-foreground uppercase tracking-wide mb-1">
                  {trainer.name}
                </h3>
                <div className="font-mono text-xs text-accent uppercase font-bold mb-2">
                  {trainer.role}
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6 flex-grow">
                  {trainer.certs}
                </p>

                <a
                  href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20The%20Fitness%20World%2C%20I%20want%20to%20book%20a%20coaching%20session%20with%20${encodeURIComponent(trainer.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-surface hover:bg-accent border border-border hover:border-accent text-foreground hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 rounded transition-all flex items-center justify-center gap-1"
                >
                  <span>Book Session on WhatsApp</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
