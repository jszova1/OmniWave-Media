import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-8 py-3 rounded-lg transition-all flex items-center gap-2',
        variant === 'primary' 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'border border-blue-500 text-blue-400 hover:bg-blue-900/20',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};