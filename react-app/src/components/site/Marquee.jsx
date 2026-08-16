import React from 'react';

export const Marquee = () => {
  const items = [
    "WEIGHT TRAINING",
    "CROSSFIT ARENA",
    "KICKBOXING",
    "ZUMBA & AEROBICS",
    "CYCLING & SPINNING",
    "HIIT CLASSES",
    "1-ON-1 COACHING",
    "FREE DIET CHARTS",
    "24/7 OPEN 365 DAYS"
  ];

  return (
    <div className="bg-surface border-y border-border overflow-hidden py-3 select-none flex">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {items.map((item, idx) => (
          <div key={idx} className="font-condensed text-base sm:text-lg tracking-wider text-foreground flex items-center gap-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-8 whitespace-nowrap animate-marquee" aria-hidden="true">
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="font-condensed text-base sm:text-lg tracking-wider text-foreground flex items-center gap-3 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
