import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { GYM_DATA } from '../../data/content';
import { Check, ArrowUpRight } from 'lucide-react';

export const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'strength', label: 'Weight & Strength' },
    { id: 'crossfit', label: 'CrossFit & HIIT' },
    { id: 'combat', label: 'Kickboxing' },
    { id: 'studio', label: 'Zumba & Aerobics' },
    { id: 'coaching', label: 'Personal Coaching' },
  ];

  const filteredServices = activeTab === 'all'
    ? GYM_DATA.services
    : GYM_DATA.services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="02"
        kicker="DISCIPLINES"
        title="9 WAYS TO FORGE YOUR PHYSIQUE"
        sub="Comprehensive training regimes crafted to build explosive strength, cardiovascular stamina, agility, and sustainable fat loss."
      />

      {/* FILTER TABS */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveTab(cat.id)}
            className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm transition-all whitespace-nowrap ${
              activeTab === cat.id
                ? 'bg-accent text-white shadow-md'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, idx) => (
          <Reveal key={service.id} delay={idx * 0.1}>
            <div className="bg-card border border-border hover:border-accent/60 rounded-lg overflow-hidden flex flex-col h-full group transition-colors">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-black/80 border border-accent-gold/40 text-accent-gold font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                  {service.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-condensed text-2xl text-foreground uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-grow">
                  {service.desc}
                </p>

                <div className="space-y-1.5 mb-6 pt-3 border-t border-border/60">
                  {service.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="text-xs text-muted-foreground flex items-center gap-2">
                      <Check size={12} className="text-accent shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20The%20Fitness%20World%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-surface hover:bg-accent border border-border hover:border-accent text-foreground hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 rounded text-center transition-all flex items-center justify-center gap-1"
                >
                  <span>Inquire on WhatsApp</span>
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
