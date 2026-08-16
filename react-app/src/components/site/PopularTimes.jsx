import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';

export const PopularTimes = () => {
  const [selectedDay, setSelectedDay] = useState('mon');

  const days = [
    { id: 'mon', label: 'Mon' },
    { id: 'tue', label: 'Tue' },
    { id: 'wed', label: 'Wed' },
    { id: 'thu', label: 'Thu' },
    { id: 'fri', label: 'Fri' },
    { id: 'sat', label: 'Sat' },
    { id: 'sun', label: 'Sun' },
  ];

  const popularTimes = {
    mon: [
      { time: "5:30 AM – 8:00 AM", status: "Moderate (Great for morning lifting)", type: "moderate" },
      { time: "8:00 AM – 11:00 AM", status: "Quiet (Zero waiting for benches)", type: "quiet" },
      { time: "5:30 PM – 9:30 PM", status: "Peak Hours (High energy, Zumba & HIIT live)", type: "peak" },
      { time: "9:30 PM – 2:00 AM", status: "Quiet (Night owl strength sessions)", type: "quiet" }
    ],
    tue: [
      { time: "5:30 AM – 8:30 AM", status: "Moderate (Cardio & Crossfit)", type: "moderate" },
      { time: "8:30 AM – 12:00 PM", status: "Quiet (Open racks available)", type: "quiet" },
      { time: "6:00 PM – 9:30 PM", status: "Peak Hours (Kickboxing & Weights)", type: "peak" },
      { time: "10:00 PM – 5:00 AM", status: "24/7 Access (Peaceful workout)", type: "quiet" }
    ],
    wed: [
      { time: "6:00 AM – 9:00 AM", status: "Moderate (Morning cardio & strength)", type: "moderate" },
      { time: "9:00 AM – 4:00 PM", status: "Quiet (Spacious & relaxed)", type: "quiet" },
      { time: "5:30 PM – 10:00 PM", status: "Peak Hours (CrossFit + Group classes)", type: "peak" },
      { time: "10:00 PM – 6:00 AM", status: "24/7 Access (Solo training)", type: "quiet" }
    ],
    thu: [
      { time: "5:30 AM – 8:30 AM", status: "Moderate", type: "moderate" },
      { time: "8:30 AM – 5:00 PM", status: "Quiet (Full equipment access)", type: "quiet" },
      { time: "6:00 PM – 9:30 PM", status: "Peak (Weight training crowd)", type: "peak" },
      { time: "10:00 PM – 5:00 AM", status: "Night Owls (Smooth burn)", type: "quiet" }
    ],
    fri: [
      { time: "6:00 AM – 9:00 AM", status: "Moderate", type: "moderate" },
      { time: "9:00 AM – 4:30 PM", status: "Quiet", type: "quiet" },
      { time: "5:30 PM – 9:30 PM", status: "Peak Energy (Weekend kickoff)", type: "peak" },
      { time: "10:00 PM – 6:00 AM", status: "24/7 Floor Open", type: "quiet" }
    ],
    sat: [
      { time: "6:00 AM – 10:30 AM", status: "Peak (Weekend morning power)", type: "peak" },
      { time: "11:00 AM – 4:00 PM", status: "Moderate (Zumba workshops)", type: "moderate" },
      { time: "5:00 PM – 9:00 PM", status: "Moderate to Peak (Strength drills)", type: "peak" },
      { time: "9:00 PM – 6:00 AM", status: "Quiet Access", type: "quiet" }
    ],
    sun: [
      { time: "6:30 AM – 11:30 AM", status: "Peak (Sunday community workouts)", type: "peak" },
      { time: "12:00 PM – 5:00 PM", status: "Quiet", type: "quiet" },
      { time: "5:30 PM – 8:30 PM", status: "Moderate", type: "moderate" },
      { time: "9:00 PM – 6:00 AM", status: "24/7 Access", type: "quiet" }
    ]
  };

  const currentSlots = popularTimes[selectedDay] || [];

  return (
    <section id="popular-times" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="06"
        kicker="HEATMAP"
        title="LIVE GYM CROWD &amp; POPULAR HOURS"
        sub="Plan your workout perfectly. Check floor occupancy and peak hours throughout the week."
      />

      <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
        {days.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setSelectedDay(d.id)}
            className={`font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-all ${
              selectedDay === d.id
                ? 'bg-accent text-white shadow-md'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentSlots.map((slot, idx) => (
          <Reveal key={idx} delay={idx * 0.05}>
            <div className={`p-5 rounded-lg border flex flex-col justify-between h-full ${
              slot.type === 'peak'
                ? 'bg-accent/10 border-accent/40'
                : slot.type === 'moderate'
                ? 'bg-accent-gold/10 border-accent-gold/40'
                : 'bg-card border-border'
            }`}>
              <div className="font-mono text-xs font-bold text-foreground mb-2">
                {slot.time}
              </div>
              <div className={`text-xs font-semibold ${
                slot.type === 'peak'
                  ? 'text-accent'
                  : slot.type === 'moderate'
                  ? 'text-accent-gold'
                  : 'text-emerald-400'
              }`}>
                {slot.status}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
