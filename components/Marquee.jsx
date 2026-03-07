import React from 'react';

export default function Marquee() {
  const repeatedText = Array(10).fill("Let's talk social");

  return (
    <div className="w-full overflow-hidden bg-white py-12 md:py-20 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {/* We need two identical blocks for seamless looping */}
        <div className="flex items-center">
          {repeatedText.map((text, i) => (
            <React.Fragment key={`first-${i}`}>
              <span className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tight text-black mx-6 md:mx-10 leading-none">
                {text}
              </span>
              <svg 
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-[#6fe0cf] shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.25" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </React.Fragment>
          ))}
        </div>
        
        {/* DUPLICATE FOR SEAMLESS LOOP */}
        <div className="flex items-center">
          {repeatedText.map((text, i) => (
            <React.Fragment key={`second-${i}`}>
              <span className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tight text-black mx-6 md:mx-10 leading-none">
                {text}
              </span>
              <svg 
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-[#6fe0cf] shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.25" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
