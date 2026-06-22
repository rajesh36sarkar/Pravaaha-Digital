'use client';

import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  isLoading = false, 
  className = '',
  type = 'button'
}) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide transition-all duration-300 ease-out rounded-sm overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-accent-teal text-white hover:bg-pencil-darkest",
    secondary: "bg-pencil-darkest text-white hover:bg-pencil-dark",
    outline: "border border-pencil-dark text-pencil-darkest hover:bg-pencil-lightest/50",
    accent: "bg-accent-amber text-white hover:bg-pencil-darkest"
  };

  // Use theme colours for outline variant
  const dynamicStyles = variant === 'outline' ? {
    borderColor: 'var(--theme-text-muted)',
    color: 'var(--theme-text-main)',
  } : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseStyles} ${variants[variant]} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''} ${className}`}
      style={dynamicStyles}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : (
        children
      )}
    </button>
  );
}