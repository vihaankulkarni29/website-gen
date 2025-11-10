"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all";
  const variants = {
    primary: "bg-muted-copper hover:bg-opacity-90 text-cream-white",
    secondary: "bg-concrete-gray hover:bg-opacity-90 text-espresso-brown"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}