import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md border border-white/20 font-extrabold text-xl overflow-hidden">
        <span className="text-accent">A</span>
        <span className="text-pink">D</span>
      </div>
      <span className="text-xl font-extrabold tracking-tighter text-white">
        AURA <span className="text-accent">DIGITAL</span>
      </span>
    </div>
  );
};
