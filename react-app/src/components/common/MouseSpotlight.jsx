import React, { useEffect, useState } from 'react';

export const MouseSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop screens
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9998] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(255, 59, 48, 0.08) 0%, rgba(245, 158, 11, 0.03) 40%, transparent 70%)',
        mixBlendMode: 'screen',
      }}
      aria-hidden="true"
    />
  );
};
