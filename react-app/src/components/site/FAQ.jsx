import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { GYM_DATA } from '../../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="11"
        kicker="INTEL"
        title="FREQUENTLY ASKED QUESTIONS"
        center
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {GYM_DATA.faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 font-bold text-foreground text-sm sm:text-base cursor-pointer"
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-accent shrink-0"
                >
                  <Plus size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
