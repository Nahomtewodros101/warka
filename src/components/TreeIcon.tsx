import React from 'react';

interface TreeIconProps {
  className?: string;
  animate?: boolean;
}

export const TreeIcon: React.FC<TreeIconProps> = ({ className = "w-8 h-8", animate = false }) => {
  return (
    <div className={`${className} ${animate ? 'animate-pulse' : ''}`}>
      <svg viewBox="0 0 100 120" className="w-full h-full fill-current">
        {/* Tree Crown */}
        <g className={animate ? 'animate-bounce' : ''} style={{ transformOrigin: '50% 60%' }}>
          {/* Main foliage */}
          <circle cx="50" cy="40" r="25" className="opacity-90" />
          <circle cx="35" cy="35" r="18" className="opacity-80" />
          <circle cx="65" cy="35" r="18" className="opacity-80" />
          <circle cx="30" cy="50" r="15" className="opacity-70" />
          <circle cx="70" cy="50" r="15" className="opacity-70" />
          
          {/* Detailed leaves */}
          <g className="opacity-60">
            <ellipse cx="45" cy="25" rx="8" ry="4" transform="rotate(-20 45 25)" />
            <ellipse cx="55" cy="25" rx="8" ry="4" transform="rotate(20 55 25)" />
            <ellipse cx="25" cy="40" rx="6" ry="3" transform="rotate(-45 25 40)" />
            <ellipse cx="75" cy="40" rx="6" ry="3" transform="rotate(45 75 40)" />
          </g>
        </g>
        
        {/* Tree Trunk */}
        <rect x="47" y="60" width="6" height="25" className="opacity-90" />
        
        {/* Roots */}
        <g className="opacity-70">
          <path d="M47 85 Q35 90 25 95" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M53 85 Q65 90 75 95" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 85 Q50 92 45 98" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 85 Q50 92 55 98" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </g>
      </svg>
    </div>
  );
};