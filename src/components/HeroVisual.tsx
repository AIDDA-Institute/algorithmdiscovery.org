"use client";

export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-stone-100 to-zinc-200">
      {/* Abstract mesh/grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="meshGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8e6cf" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#88d8b0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6cb8a0" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="meshGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dcedc1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#b8e0c8" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="meshGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffd3b6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffaaa5" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Noise filter for texture */}
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>
          
          {/* Shadow filter */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>
        
        {/* Background base */}
        <rect width="800" height="600" fill="#f8f7f5" />
        
        {/* Grid pattern */}
        <g stroke="#e5e2de" strokeWidth="0.5" opacity="0.6">
          {Array.from({ length: 21 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="800" y2={i * 40} />
          ))}
        </g>
        
        {/* Abstract voxel/mesh blocks - Layer 1 */}
        <g filter="url(#shadow)">
          {/* Large block group - top right */}
          <path d="M450 80 L520 110 L520 180 L450 150 Z" fill="url(#meshGrad1)" opacity="0.9" />
          <path d="M520 110 L590 80 L590 150 L520 180 Z" fill="url(#meshGrad1)" opacity="0.7" />
          <path d="M450 150 L520 180 L520 250 L450 220 Z" fill="url(#meshGrad1)" opacity="0.8" />
          
          {/* Medium blocks - middle area */}
          <path d="M300 200 L360 225 L360 290 L300 265 Z" fill="url(#meshGrad2)" opacity="0.85" />
          <path d="M360 225 L420 200 L420 265 L360 290 Z" fill="url(#meshGrad2)" opacity="0.65" />
          <path d="M300 265 L360 290 L360 355 L300 330 Z" fill="url(#meshGrad2)" opacity="0.75" />
          <path d="M360 290 L420 265 L420 330 L360 355 Z" fill="url(#meshGrad2)" opacity="0.55" />
          
          {/* Scattered smaller blocks */}
          <path d="M150 150 L190 170 L190 220 L150 200 Z" fill="url(#meshGrad3)" opacity="0.7" />
          <path d="M190 170 L230 150 L230 200 L190 220 Z" fill="url(#meshGrad3)" opacity="0.5" />
          
          <path d="M600 250 L640 270 L640 320 L600 300 Z" fill="url(#meshGrad1)" opacity="0.6" />
          <path d="M640 270 L680 250 L680 300 L640 320 Z" fill="url(#meshGrad1)" opacity="0.4" />
          
          <path d="M200 350 L250 375 L250 440 L200 415 Z" fill="url(#meshGrad2)" opacity="0.8" />
          <path d="M250 375 L300 350 L300 415 L250 440 Z" fill="url(#meshGrad2)" opacity="0.6" />
          
          {/* Lower section blocks */}
          <path d="M450 400 L500 425 L500 490 L450 465 Z" fill="url(#meshGrad3)" opacity="0.75" />
          <path d="M500 425 L550 400 L550 465 L500 490 Z" fill="url(#meshGrad3)" opacity="0.55" />
          <path d="M450 465 L500 490 L500 555 L450 530 Z" fill="url(#meshGrad3)" opacity="0.65" />
          
          {/* Additional scattered elements */}
          <path d="M100 400 L140 420 L140 470 L100 450 Z" fill="url(#meshGrad1)" opacity="0.5" />
          <path d="M650 450 L690 470 L690 520 L650 500 Z" fill="url(#meshGrad2)" opacity="0.45" />
          <path d="M350 50 L390 70 L390 120 L350 100 Z" fill="url(#meshGrad3)" opacity="0.6" />
          
          {/* More depth layers */}
          <path d="M550 120 L600 145 L600 210 L550 185 Z" fill="url(#meshGrad1)" opacity="0.5" />
          <path d="M220 280 L260 300 L260 355 L220 335 Z" fill="url(#meshGrad3)" opacity="0.55" />
          <path d="M480 280 L530 305 L530 370 L480 345 Z" fill="url(#meshGrad2)" opacity="0.5" />
        </g>
        
        {/* Connection lines between blocks */}
        <g stroke="#b8d4c8" strokeWidth="1" opacity="0.4" fill="none">
          <path d="M390 95 L450 115" />
          <path d="M520 145 L550 165" />
          <path d="M420 232 L450 250" />
          <path d="M360 322 L300 350" />
          <path d="M250 407 L200 400" />
          <path d="M500 457 L550 450" />
        </g>
        
        {/* Subtle dot grid overlay */}
        <g fill="#a0a0a0" opacity="0.2">
          {Array.from({ length: 20 }).map((_, i) => 
            Array.from({ length: 15 }).map((_, j) => (
              <circle key={`dot-${i}-${j}`} cx={20 + i * 40} cy={20 + j * 40} r="1.5" />
            ))
          )}
        </g>
        
        {/* Top highlight gradient */}
        <rect width="800" height="600" fill="url(#meshGrad1)" opacity="0.05" style={{ mixBlendMode: 'overlay' }} />
      </svg>
      
      {/* Soft edge fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-50/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-stone-50/20 via-transparent to-transparent" />
    </div>
  );
}
