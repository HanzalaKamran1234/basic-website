import React from 'react';

export const Typography = {
  H1: ({children, className = ''}: {children: React.ReactNode; className?: string}) => (
    <h1 className={`font-heading text-4xl md:text-5xl font-semibold leading-tight ${className}`}>{children}</h1>
  ),
  H2: ({children, className = ''}: {children: React.ReactNode; className?: string}) => (
    <h2 className={`font-heading text-3xl md:text-4xl font-semibold leading-snug ${className}`}>{children}</h2>
  ),
  P: ({children, className = ''}: {children: React.ReactNode; className?: string}) => (
    <p className={`font-body text-base leading-relaxed ${className}`}>{children}</p>
  ),
};
