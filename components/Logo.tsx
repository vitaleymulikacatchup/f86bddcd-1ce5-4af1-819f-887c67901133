interface LogoProps {
  className?: string
}

export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Llama head outline */}
      <path
        d="M8 12c0-2.5 1.5-4.5 4-5.5C13 5.5 14.5 5 16 5s3 .5 4 1.5c2.5 1 4 3 4 5.5v8c0 2-1.5 3.5-3.5 3.5h-9C9.5 23.5 8 22 8 20v-8z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Ears */}
      <path
        d="M10 8c0-1 .5-2 1.5-2.5M22 8c0-1-.5-2-1.5-2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Eyes with goggles */}
      <circle cx="13" cy="14" r="1.5" fill="currentColor" />
      <circle cx="19" cy="14" r="1.5" fill="currentColor" />
      
      {/* Goggle strap */}
      <path
        d="M10 13h2m6 0h4M11 15h2m6 0h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Nose */}
      <path
        d="M15 17h2v1h-2z"
        fill="currentColor"
      />
      
      {/* Mouth */}
      <path
        d="M14 19c1 1 3 1 4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}