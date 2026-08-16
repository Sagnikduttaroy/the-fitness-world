import React from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { GYM_DATA } from '../../data/content';
import { Star } from 'lucide-react';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="10"
        kicker="VOICES"
        title="REAL MEMBERS. REAL IRON. 4.9★ RATED."
        sub="Rated 4.9 Out of 5 Stars across 99+ verified Google Reviews."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {GYM_DATA.reviews.map((r, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-1 text-accent-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-accent-gold" />
                  ))}
                </div>
                <p className="text-foreground text-sm sm:text-base leading-relaxed mb-6">
                  “{r.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-border flex justify-between items-center text-xs">
                <span className="font-bold text-foreground">{r.author}</span>
                <span className="font-mono text-subtle-foreground">{r.source}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
