import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';

export const Transformations = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section id="transformations" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border bg-surface/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* TEXT */}
        <div className="lg:col-span-6">
          <Reveal>
            <Chapter
              index="04"
              kicker="MEASURABLE RESULTS"
              title="TRANSFORMATIONS FORGED IN IRON"
            />

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              Drag the interactive slider to view real transformations from our members in New Town. Combined with certified personal coaching and customized nutrition charts, our members achieve visible body recomposition in 90 days.
            </p>

            <div className="space-y-3">
              <div className="bg-card border border-border rounded p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-foreground text-sm">Average 90-Day Fat Loss</div>
                  <div className="text-xs text-muted-foreground">Calorie deficit &amp; HIIT protocol</div>
                </div>
                <div className="font-display text-3xl text-accent">8–14 KG</div>
              </div>

              <div className="bg-card border border-border rounded p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-foreground text-sm">Average Muscle Hypertrophy</div>
                  <div className="text-xs text-muted-foreground">Progressive overload strength</div>
                </div>
                <div className="font-display text-3xl text-accent-gold">+4.5 KG</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* COMPARISON SLIDER */}
        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl select-none">
              
              {/* BEFORE IMAGE (BACKGROUND) */}
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/80 border border-border text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                BEFORE · DAY 01
              </div>

              {/* AFTER IMAGE (CLIPPED) */}
              <div
                className="absolute inset-0 overflow-hidden border-r-2 border-accent"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                  alt="After Transformation"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-accent text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow">
                  AFTER · 90 DAYS // RECOMPOSED
                </div>
              </div>

              {/* RANGE INPUT SLIDER */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Comparison Slider"
              />

              {/* VISUAL HANDLE */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-accent border-2 border-white rounded-full flex items-center justify-center pointer-events-none shadow-lg z-20"
                style={{ left: `calc(${sliderPosition}% - 16px)` }}
              >
                <div className="text-white text-xs font-bold">⇄</div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
