import React, { useState } from 'react';
import { Chapter } from '../common/Chapter';
import { Reveal } from '../common/Reveal';
import { GYM_DATA } from '../../data/content';
import { X } from 'lucide-react';

export const Gallery = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section id="gallery" className="py-24 px-6 lg:px-12 max-w-[1320px] mx-auto border-t border-border">
      <Chapter
        index="03"
        kicker="THE ARENA"
        title="INSIDE THE 24/7 NEWTOWN FACILITY"
        sub="Explore our training floor, Olympic platforms, cardio studio, and locker amenities. Click any photo to preview in high resolution."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GYM_DATA.gallery.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div
              onClick={() => setLightboxImg(item.image)}
              className="relative h-60 rounded-lg overflow-hidden border border-border cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="font-condensed text-lg text-white uppercase tracking-wide">
                  {item.title}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 bg-black/95 z-[11000] flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white hover:text-accent"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImg}
            alt="Preview"
            className="max-w-[90vw] max-h-[85vh] object-contain rounded"
          />
        </div>
      )}
    </section>
  );
};
