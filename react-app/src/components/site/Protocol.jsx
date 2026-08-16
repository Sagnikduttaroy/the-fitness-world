import React from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';

export const Protocol = () => {
  const steps = [
    {
      num: "01",
      title: "Free Body Assessment",
      desc: "Comprehensive body composition analysis, posture check, and personalized goal alignment."
    },
    {
      num: "02",
      title: "Custom Workout & Diet Plan",
      desc: "100% free customized macro nutrition chart tailored to your vegetarian or non-vegetarian preferences."
    },
    {
      num: "03",
      title: "Guided Iron Execution",
      desc: "Daily form correction, progressive overload coaching, and injury prevention on the floor."
    },
    {
      num: "04",
      title: "Measurable Recomposition",
      desc: "Monthly scans, strength milestones, and guaranteed body transformation results."
    }
  ];

  return (
    <section id="protocol" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="09"
        kicker="THE PROTOCOL"
        title="FROM DAY ONE TO FOREVER STRONG"
        sub="Our seamless 4-step transformation blueprint guarantees structured progress without confusion."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <Reveal key={s.num} delay={idx * 0.1}>
            <div className="bg-card border border-border hover:border-accent rounded-xl p-8 h-full transition-all duration-300 hover:-translate-y-1">
              <div className="font-display text-4xl sm:text-5xl text-accent leading-none mb-3">
                {s.num}
              </div>
              <h3 className="font-condensed text-2xl text-foreground uppercase tracking-wide mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {s.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
