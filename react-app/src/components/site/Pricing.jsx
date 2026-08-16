import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { GYM_DATA } from '../../data/content';
import { Check, ArrowUpRight } from 'lucide-react';

export const Pricing = () => {
  const [duration, setDuration] = useState('monthly');

  const durations = [
    { id: 'monthly', label: 'Monthly' },
    { id: 'quarterly', label: '3 Months' },
    { id: 'halfYearly', label: '6 Months' },
    { id: 'annual', label: 'Annual (Best Value)' },
  ];

  const currentPrices = GYM_DATA.memberships[duration];

  const plans = [
    {
      name: "Standard Strength",
      desc: "Access to the gym floor, weights, and basic cardio equipment.",
      price: currentPrices.standard.price,
      period: currentPrices.standard.period,
      savings: currentPrices.standard.savings,
      featured: false,
      features: [
        "24/7 Access 365 Days a Year",
        "Weight Training & Strength Arena",
        "Cardio & Treadmill Zone",
        "Locker & Changing Room Access",
        "General Floor Trainer Guidance"
      ]
    },
    {
      name: "All-Access Pro",
      desc: "Full gym access + all studio group classes & customized nutrition plan.",
      price: currentPrices.pro.price,
      period: currentPrices.pro.period,
      savings: currentPrices.pro.savings,
      featured: true,
      features: [
        "Everything in Standard Strength",
        "Zumba & Aerobics Studio Classes",
        "CrossFit & HIIT Daily Batches",
        "Kickboxing Combat Training",
        "100% Free Custom Diet Chart",
        "Monthly Body Composition Scan"
      ]
    },
    {
      name: "VIP Transformation",
      desc: "Complete elite package including dedicated 1-on-1 personal coaching.",
      price: currentPrices.vip.price,
      period: currentPrices.vip.period,
      savings: currentPrices.vip.savings,
      featured: false,
      features: [
        "Everything in All-Access Pro",
        "Dedicated 1-on-1 Certified Personal Trainer",
        "Personalized Weekly Macro Rebalancing",
        "Priority Booking for Specialty Classes",
        "Direct Coach WhatsApp Support 24/7"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="08"
        kicker="MEMBERSHIPS"
        title="SIMPLE. TRANSPARENT. ZERO BS."
        sub="No hidden admission fees or maintenance charges. All plans include full 24/7 access, locker amenities, and coach floor guidance."
        center
      />

      {/* DURATION SWITCHER */}
      <div className="flex justify-center mb-10 overflow-x-auto pb-2">
        <div className="bg-card border border-border rounded p-1 inline-flex gap-1 flex-nowrap shrink-0">
          {durations.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setDuration(d.id)}
              className={`font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider px-3.5 sm:px-5 py-2 rounded transition-all whitespace-nowrap ${
                duration === d.id
                  ? 'bg-accent text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRICING GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, idx) => (
          <Reveal key={plan.name} delay={idx * 0.1}>
            <div
              className={`bg-card border rounded-lg p-6 sm:p-8 flex flex-col h-full relative transition-all duration-300 ${
                plan.featured
                  ? 'border-accent shadow-glow-red bg-gradient-to-b from-card-hover to-card lg:-translate-y-2'
                  : 'border-border hover:border-border-medium'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white font-mono text-[9px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-sm shadow-md whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <h3 className={`font-condensed text-2xl uppercase tracking-wide mb-1 ${plan.featured ? 'text-accent' : 'text-foreground'}`}>
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4 min-h-[32px]">
                {plan.desc}
              </p>

              {/* PRICE */}
              <div className="pb-4 mb-4 border-b border-border flex items-baseline gap-1.5">
                <span className="text-lg font-extrabold text-muted-foreground">₹</span>
                <span className="font-display text-4xl sm:text-5xl text-foreground leading-none">
                  {plan.price.toLocaleString('en-IN')}
                </span>
                <span className="font-mono text-[11px] text-subtle-foreground">
                  {plan.period}
                </span>
              </div>

              {plan.savings && (
                <div className="text-[11px] font-mono font-bold text-accent-gold -mt-2 mb-3">
                  {plan.savings}
                </div>
              )}

              {/* FEATURES */}
              <div className="space-y-2.5 mb-8 flex-grow">
                {plan.features.map((f, fIdx) => (
                  <div key={fIdx} className="text-xs text-muted-foreground flex items-center gap-2.5">
                    <Check size={13} className="text-accent shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20The%20Fitness%20World%2C%20I%20want%20to%20enroll%20in%20the%20*${encodeURIComponent(plan.name)}*%20(${plan.period}%20@%20₹${plan.price}).%20Please%20share%20joining%20steps.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider py-3 rounded-sm text-center transition-all inline-flex items-center justify-center gap-1.5 ${
                  plan.featured
                    ? 'bg-accent hover:bg-accent-hover text-white shadow-[0_4px_16px_rgba(255,59,48,0.4)]'
                    : 'bg-surface hover:bg-accent border border-border-medium hover:border-accent text-foreground hover:text-white'
                }`}
              >
                <span>Join on WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
