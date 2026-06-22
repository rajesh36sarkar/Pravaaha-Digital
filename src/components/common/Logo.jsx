'use client';

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg 
      viewBox="0 0 100 140" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        {/* Define the vibrant Teal-to-Amber gradient */}
        <linearGradient id="brandGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14b8a6" /> {/* Teal */}
          <stop offset="1" stopColor="#f59e0b" /> {/* Amber */}
        </linearGradient>
      </defs>

      {/* The Outer Structure using the gradient */}
      <path 
        d="M25 15 v100 M25 15 h40 c16.5 0 30 13.5 30 30 c0 16.5 -13.5 30 -30 30 H25" 
        stroke="url(#brandGradient)" 
        strokeWidth="12" 
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="transition-all duration-500"
      />
      
      {/* The Inner Digital Stream using the same gradient */}
      <path 
        d="M40 30 v30 M40 30 h25 c8.3 0 15 6.7 15 15 c0 8.3 -6.7 15 -15 15 H40" 
        stroke="url(#brandGradient)" 
        strokeWidth="8" 
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="transition-all duration-700"
      />
      
      {/* The Core Node (now using a solid Amber accent for focus) */}
      <rect 
        x="20" 
        y="128" 
        width="10" 
        height="10" 
        fill="#f59e0b" 
        className="animate-pulse"
      />
    </svg>
  );
}