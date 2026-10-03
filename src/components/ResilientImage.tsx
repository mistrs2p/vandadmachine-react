import React, { useState } from 'react';
import { Cog, Flame, Layers, Box, Cpu } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  category = 'machinery'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-slate-900 border border-slate-800 text-slate-400 p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-radial from-slate-800/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-amber-500 mb-3 shadow-inner">
            {category === 'atomizer' ? (
              <Cog className="w-6 h-6 animate-spin-slow" />
            ) : category === 'fluid_bed' ? (
              <Layers className="w-6 h-6" />
            ) : category === 'drum_flaker' ? (
              <Box className="w-6 h-6" />
            ) : (
              <Flame className="w-6 h-6" />
            )}
          </div>
          <span className="text-xs font-semibold text-slate-200 tracking-wide line-clamp-1">{alt}</span>
          <span className="text-[11px] text-slate-500 mt-1 font-mono">Vandad Machinery Engineering</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <Cpu className="w-5 h-5 text-slate-600 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
