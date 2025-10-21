interface CloudLlamaProps {
  className?: string
}

export default function CloudLlama({ className = "" }: CloudLlamaProps) {
  return (
    <div className={`w-64 h-64 ${className}`}>
      <svg
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cloud */}
        <path
          d="M80 180c-15 0-28-12-28-28 0-12 8-22 19-26 2-18 17-32 36-32 8 0 15 3 21 7 6-8 16-13 27-13 19 0 35 16 35 35 0 2 0 4-1 6 11 4 19 15 19 27 0 16-13 29-29 29H80z"
          fill="white"
          stroke="black"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        
        {/* Llama body on cloud */}
        <g transform="translate(128, 120)">
          {/* Body */}
          <ellipse cx="0" cy="10" rx="25" ry="35" fill="white" stroke="black" strokeWidth="3" />
          
          {/* Head */}
          <ellipse cx="0" cy="-25" rx="20" ry="25" fill="white" stroke="black" strokeWidth="3" />
          
          {/* Ears */}
          <ellipse cx="-15" cy="-35" rx="6" ry="12" fill="white" stroke="black" strokeWidth="3" />
          <ellipse cx="15" cy="-35" rx="6" ry="12" fill="white" stroke="black" strokeWidth="3" />
          
          {/* Goggles */}
          <rect x="-18" y="-30" width="36" height="12" rx="6" fill="black" />
          <circle cx="-8" cy="-24" r="6" fill="white" stroke="black" strokeWidth="2" />
          <circle cx="8" cy="-24" r="6" fill="white" stroke="black" strokeWidth="2" />
          
          {/* Eyes */}
          <circle cx="-8" cy="-24" r="3" fill="black" />
          <circle cx="8" cy="-24" r="3" fill="black" />
          
          {/* Goggle details */}
          <circle cx="-8" cy="-24" r="8" fill="none" stroke="black" strokeWidth="2" />
          <circle cx="8" cy="-24" r="8" fill="none" stroke="black" strokeWidth="2" />
          
          {/* Nose */}
          <ellipse cx="0" cy="-15" rx="3" ry="2" fill="black" />
          
          {/* Mouth */}
          <path d="M-4 -10 Q0 -8 4 -10" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
          
          {/* Arms */}
          <ellipse cx="-20" cy="-5" rx="8" ry="20" fill="white" stroke="black" strokeWidth="3" />
          <ellipse cx="20" cy="-5" rx="8" ry="20" fill="white" stroke="black" strokeWidth="3" />
          
          {/* Legs */}
          <ellipse cx="-10" cy="35" rx="6" ry="15" fill="white" stroke="black" strokeWidth="3" />
          <ellipse cx="10" cy="35" rx="6" ry="15" fill="white" stroke="black" strokeWidth="3" />
        </g>
      </svg>
    </div>
  )
}