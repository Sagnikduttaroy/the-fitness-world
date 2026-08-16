import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { GYM_DATA } from '../../data/content';
import { Phone, MapPin, MessageSquare, Zap, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Contact = ({ isTrialModalOpen, onCloseTrialModal, onOpenTrialModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Muscle Building & Strength');
  const [timeSlot, setTimeSlot] = useState('Morning (6:00 AM – 10:00 AM)');

  const handleSubmitTrial = (e) => {
    e.preventDefault();
    const msg = `Hello The Fitness World (Lohar Pul),\n\n*1-Day Free Trial Pass Request:*\n• Name: ${name}\n• Phone: ${phone}\n• Fitness Goal: ${goal}\n• Preferred Time: ${timeSlot}\n\nPlease confirm my 1-day free pass for the Newtown branch.`;
    window.open(`https://wa.me/${GYM_DATA.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    onCloseTrialModal();
  };

  return (
    <section id="location" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LOCATION CARD */}
        <Reveal>
          <div className="bg-card border border-border rounded-xl p-8 sm:p-10 h-full flex flex-col justify-between">
            <div>
              <Chapter
                index="12"
                kicker="DROP IN"
                title="THE FITNESS WORLD — LOHAR PUL"
              />

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                <strong className="text-foreground">CN129, Thakdari Rd, near LOHA PUL</strong><br />
                Action Area I, Dhalipara, Newtown<br />
                Kolkata, West Bengal 700102
              </p>

              <div className="mb-8">
                <div className="font-mono text-xs uppercase tracking-wider text-subtle-foreground font-bold mb-1">
                  Direct Phone Numbers:
                </div>
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-accent-gold">
                  097759 95300 · 086536 80217
                </div>
              </div>
            </div>

            <div className="flex gap-3.5 flex-wrap">
              <a
                href={GYM_DATA.phoneHref}
                className="bg-accent hover:bg-accent-hover text-white text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm inline-flex items-center gap-2 transition-all"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
              <a
                href="https://maps.google.com/?q=The+Fitness+World+Lohar+Pul+Newtown+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface hover:bg-white/10 text-foreground border border-border-medium text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm inline-flex items-center gap-2 transition-all"
              >
                <MapPin size={14} />
                <span>Directions</span>
              </a>
              <a
                href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=Hi%20The%20Fitness%20World%2C%20I%20want%20to%20visit%20the%20gym.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm inline-flex items-center gap-2 transition-all"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* TIMETABLE & TRIAL CARD */}
        <Reveal delay={0.2}>
          <div className="bg-card border border-border rounded-xl p-8 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent pointer-events-none" />

            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-widest font-bold mb-2">
                // 365 DAYS TIMETABLE
              </div>
              <h3 className="font-condensed text-3xl sm:text-4xl text-foreground uppercase tracking-wide mb-6">
                NON-STOP GYM ACCESS
              </h3>

              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Monday – Sunday:</span>
                  <span className="font-mono font-extrabold text-emerald-400">Open 24 Hours</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Public Holidays:</span>
                  <span className="font-mono font-extrabold text-emerald-400">Open 24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trainer Floor Hours:</span>
                  <span className="font-mono font-bold text-foreground">6:00 AM – 11:00 PM</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenTrialModal}
              className="w-full bg-accent hover:bg-accent-hover text-white text-sm font-extrabold uppercase tracking-wider py-4 rounded-sm shadow-[0_4px_18px_rgba(255,59,48,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Free 1-Day Trial</span>
              <Zap size={15} className="fill-white" />
            </button>
          </div>
        </Reveal>

      </div>

      {/* 1-DAY TRIAL MODAL */}
      <AnimatePresence>
        {isTrialModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[1000] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-card border border-border-medium rounded-xl p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button
                type="button"
                onClick={onCloseTrialModal}
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground"
                aria-label="Close Modal"
              >
                <X size={22} />
              </button>

              <div className="font-mono text-xs text-accent uppercase tracking-widest font-bold mb-1">
                // EXCLUSIVE TRIAL PASS
              </div>
              <h3 className="font-condensed text-3xl sm:text-4xl text-foreground uppercase tracking-wide mb-2">
                CLAIM 1-DAY FREE PASS
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Experience The Fitness World (Lohar Pul, Newtown) with zero commitment. Free workout access + personal body assessment.
              </p>

              <form onSubmit={handleSubmitTrial} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    required
                    className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    required
                    className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="Muscle Building & Strength">Muscle Building &amp; Strength</option>
                    <option value="Fat Loss & Weight Management">Fat Loss &amp; Weight Management</option>
                    <option value="CrossFit & Functional Stamina">CrossFit &amp; Functional Stamina</option>
                    <option value="Zumba / Aerobics / Dance Fitness">Zumba / Aerobics / Dance Fitness</option>
                    <option value="Kickboxing & Combat Conditioning">Kickboxing &amp; Combat Conditioning</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-muted-foreground tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent"
                  >
                    <option value="Morning (6:00 AM – 10:00 AM)">Morning (6:00 AM – 10:00 AM)</option>
                    <option value="Afternoon (11:00 AM – 4:00 PM)">Afternoon (11:00 AM – 4:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:30 PM)">Evening (5:00 PM – 9:30 PM)</option>
                    <option value="Night / Late 24/7 (10:00 PM onwards)">Night / Late 24/7 (10:00 PM onwards)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider py-4 rounded-sm shadow-[0_4px_18px_rgba(255,59,48,0.4)] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <span>Confirm Free Pass on WhatsApp</span>
                  <Zap size={14} className="fill-white" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
