import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { GYM_DATA } from '../../data/content';
import { Zap, ArrowUpRight } from 'lucide-react';

export const Calculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('muscle');
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) return;

    const hM = h / 100;
    const bmiVal = (w / (hM * hM)).toFixed(1);

    let cat = '';
    let cals = 0;
    const protein = Math.round(w * 1.8);

    if (bmiVal < 18.5) {
      cat = 'Underweight / Lean';
      cals = Math.round(w * 36);
    } else if (bmiVal <= 24.9) {
      cat = 'Normal / Athletic';
      cals = goal === 'muscle' ? Math.round(w * 34) : Math.round(w * 28);
    } else {
      cat = 'High Body Fat / Overweight';
      cals = Math.round(w * 24);
    }

    setResult({ bmi: bmiVal, category: cat, calories: cals, protein });
  };

  return (
    <section id="calculator" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* FORM */}
        <Reveal>
          <Chapter
            index="07"
            kicker="TRANSFORMATION ENGINE"
            title="CALCULATE YOUR TARGET"
          />

          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Find your exact BMI, daily caloric maintenance target, and optimal protein intake. Claim a 100% Free Custom Diet Chart prepared by our Newtown certified coaches!
          </p>

          <form onSubmit={handleCalculate} className="bg-card border border-border-medium rounded-xl p-6 sm:p-8 space-y-5">
            <div>
              <label className="block font-mono text-xs uppercase font-bold text-muted-foreground tracking-wider mb-2">
                Height (in CM)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                required
                min="100"
                max="250"
                className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase font-bold text-muted-foreground tracking-wider mb-2">
                Weight (in KG)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 72"
                required
                min="30"
                max="200"
                className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase font-bold text-muted-foreground tracking-wider mb-2">
                Your Target Goal
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="muscle">Hypertrophy &amp; Muscle Gain</option>
                <option value="fatloss">Fat Loss &amp; Shredding</option>
                <option value="stamina">CrossFit Stamina &amp; Endurance</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white text-sm font-extrabold uppercase tracking-wider py-4 rounded-sm shadow-[0_4px_18px_rgba(255,59,48,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Calculate Metrics</span>
              <Zap size={15} className="fill-white" />
            </button>
          </form>
        </Reveal>

        {/* RESULTS BOX */}
        <Reveal delay={0.2}>
          <div className="bg-surface border border-dashed border-accent-gold/40 rounded-xl p-8 min-h-[340px] flex flex-col justify-center">
            {result ? (
              <div className="space-y-6">
                <div className="font-mono text-xs text-accent-gold tracking-widest uppercase font-bold">
                  // TRANSFORMATION METRICS
                </div>

                <div className="flex justify-between items-baseline border-b border-border pb-4">
                  <div>
                    <div className="text-xs font-mono uppercase text-muted-foreground">Calculated BMI</div>
                    <div className="font-display text-5xl text-accent leading-none mt-1">{result.bmi}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono uppercase text-muted-foreground">Body Status</div>
                    <div className="text-base font-extrabold text-foreground">{result.category}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded p-4">
                    <div className="text-xs text-subtle-foreground font-mono">Daily Target Energy</div>
                    <div className="text-xl font-extrabold text-accent-gold mt-0.5">{result.calories} kcal</div>
                  </div>
                  <div className="bg-card border border-border rounded p-4">
                    <div className="text-xs text-subtle-foreground font-mono">Daily Protein Goal</div>
                    <div className="text-xl font-extrabold text-foreground mt-0.5">{result.protein} grams</div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20The%20Fitness%20World%2C%20I%20calculated%20my%20BMI%20(${result.bmi})%20with%20target%20${result.calories}%20kcal%20and%20${result.protein}g%20protein.%20Please%20send%20my%20Free%20Custom%20Diet%20Chart!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent hover:bg-accent-hover text-white text-xs font-extrabold uppercase tracking-wider py-4 rounded-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Get Free Custom Diet Chart on WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            ) : (
              <div className="text-center text-muted-foreground space-y-3">
                <div className="text-4xl">📊</div>
                <div className="font-condensed text-2xl text-foreground uppercase tracking-wide">
                  Your Metrics Will Appear Here
                </div>
                <div className="text-sm max-w-sm mx-auto">
                  Enter your height, weight, and goal to calculate your target energy and claim your free personalized diet plan.
                </div>
              </div>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
