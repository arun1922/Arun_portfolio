import React from 'react';

/**
 * AwsLogo — Exact Official Amazon Web Services (AWS) Vector Logo Component
 * 
 * @param {string} className - Tailwind or CSS class names for styling/sizing
 * @param {string} textColor - Color of the "aws" wordmark text (default: "currentColor" or "#FFFFFF")
 * @param {string} arrowColor - Color of the signature AWS smile arrow (default: "#FF9900")
 * @param {boolean} showBadge - Wrap in a premium glassmorphic badge container if true
 * @param {string} badgeSize - Predefined badge sizes ('sm', 'md', 'lg', 'xl')
 */
export const AwsLogo = ({ 
  className = "w-full h-full", 
  textColor = "currentColor", 
  arrowColor = "#FF9900",
  showBadge = false,
  badgeSize = "md"
}) => {
  const logoSvg = (
    <svg 
      className={className} 
      viewBox="0 0 200 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AWS Logo"
      role="img"
    >
      <g>
        {/* Letter 'a' */}
        <path 
          fill={textColor} 
          d="M38.8 90.4c-4.4 0-8.2-.8-11.4-2.4-3.2-1.6-5.8-3.9-7.7-6.8-1.9-2.9-2.9-6.3-2.9-10.3 0-4.6 1.3-8.4 4-11.3 2.7-2.9 6.3-4.9 10.9-6 4.6-1.1 9.8-1.7 15.6-1.7v-2.2c0-3.4-.8-5.9-2.4-7.4-1.6-1.5-4.1-2.3-7.5-2.3-2.3 0-4.6.4-7 1.2-2.4.8-4.5 1.9-6.5 3.2l-3.3-6.1c2.6-1.7 5.4-3 8.5-4 3.1-1 6.3-1.5 9.7-1.5 6 0 10.4 1.4 13.2 4.1 2.8 2.7 4.2 7 4.2 12.8v26.7c0 4.1.3 7.5 1 10h-8.8c-.5-1.5-.9-3.4-1.1-5.7-1.9 2.3-4.3 4.1-7.2 5.4-2.9 1.3-6.2 2-9.9 2zm2.1-7.2c3.2 0 6.1-.7 8.7-2.2 2.6-1.5 4.5-3.6 5.8-6.3v-8.4c-4.3.2-8 .7-11.1 1.5-3.1.8-5.5 2-7.2 3.6-1.7 1.6-2.5 3.7-2.5 6.2 0 2.6.9 4.6 2.6 5.9 1.7 1.1 3.7 1.7 6.7 1.7z"
        />

        {/* Letter 'w' */}
        <path 
          fill={textColor} 
          d="M111.4 89.4h-9.2l-10.7-39.7-10.8 39.7h-9.1l-14.7-52.2h9.7l10 39.4 10.6-39.4h8.9l10.7 39.4 10.1-39.4h9.3l-14.8 52.2z"
        />

        {/* Letter 's' */}
        <path 
          fill={textColor} 
          d="M147.2 90.4c-5 0-9.4-1.1-13.2-3.3-3.8-2.2-6.5-5.2-8.2-9.1l7.6-4.5c1.2 2.7 3.1 4.8 5.6 6.3 2.5 1.5 5.3 2.3 8.4 2.3 3.5 0 6.2-.7 8.1-2.1 1.9-1.4 2.8-3.3 2.8-5.6 0-1.8-.6-3.2-1.9-4.3-1.3-1.1-3.2-2-5.7-2.7l-7.3-2.1c-4.5-1.3-7.9-3.2-10.3-5.7-2.4-2.5-3.6-5.8-3.6-9.8 0-4.3 1.6-7.8 4.7-10.5 3.1-2.7 7.2-4 12.3-4 4.1 0 7.8.9 11.2 2.7 3.4 1.8 5.9 4.3 7.6 7.6l-7.2 4.4c-1.2-2.1-2.8-3.7-4.8-4.8-2-1.1-4.3-1.7-6.9-1.7-3.1 0-5.6.7-7.4 2-1.8 1.3-2.7 3-2.7 5.1 0 1.6.6 2.9 1.8 3.9 1.2 1 3 1.8 5.4 2.5l7.3 2.1c4.7 1.3 8.3 3.2 10.7 5.7 2.4 2.5 3.6 5.8 3.6 9.9 0 4.5-1.6 8.1-4.8 10.8-3.3 2.7-7.7 4.1-13.3 4.1z"
        />

        {/* AWS Smile Swoosh Curve */}
        <path 
          fill={arrowColor} 
          d="M167.3 115.4c-21.4 15.8-52.5 24.2-79.2 24.2-37.5 0-71.3-13.9-96.8-37-2-1.8-.2-4.3 2.2-2.9 27.6 16 61.6 25.7 96.8 25.7 23.7 0 49.9-4.9 73.9-15.1 3.6-1.6 6.7 2.4 3.1 5.1z"
        />

        {/* AWS Smile Arrow Head */}
        <path 
          fill={arrowColor} 
          d="M176 105.6c-2.7-3.5-18.2-1.7-25.2-.8-2.1.3-2.4-1.6-.5-2.9 12.3-8.7 32.5-6.2 34.9-3.3 2.3 3-.6 23.2-12.2 32.9-1.8 1.5-3.5.7-2.7-1.3 2.6-6.5 8.4-21.1 5.7-24.6z"
        />
      </g>
    </svg>
  );

  if (!showBadge) {
    return logoSvg;
  }

  const badgeDimensions = {
    sm: "w-10 h-10 p-1.5",
    md: "w-16 h-16 md:w-20 md:h-20 p-2.5",
    lg: "w-24 h-24 p-3",
    xl: "w-32 h-32 p-4",
  }[badgeSize] || "w-16 h-16 p-2.5";

  return (
    <div className={`bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:border-[#FF9900]/80 transition-all duration-300 group/aws ${badgeDimensions}`}>
      {logoSvg}
    </div>
  );
};

export default AwsLogo;
