import React from 'react';

export const Chapter = ({ index, kicker, title, sub, center = false }) => {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}>
      <div className={`inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold text-accent uppercase tracking-widest mb-2 ${center ? 'justify-center' : ''}`}>
        <span className="bg-accent/15 border border-accent/30 px-1.5 py-0.5 rounded text-accent">
          [ {index} ]
        </span>
        <span className="text-subtle-foreground">//</span>
        <span>{kicker}</span>
      </div>

      <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground uppercase tracking-tight leading-[1.05]">
        {title}
      </h2>

      {sub && (
        <p className={`text-muted-foreground text-sm sm:text-base max-w-2xl mt-3 leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {sub}
        </p>
      )}
    </div>
  );
};
