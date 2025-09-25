import React from 'react';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", animate = false }) => {
  return (
    <div className={`${className} ${animate ? 'animate-pulse hover:animate-bounce transition-all duration-300' : ''}`}>
      <img
        src="/image.jpg"
        alt="Warka Properties Logo"
        className="w-full h-full object-contain drop-shadow-lg rounded-full"
      />
    </div>
  );
};