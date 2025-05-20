import { Props, sizeMap } from "./iconUtils"

const LogoIcon = (props: Props) => {
  return (
    <svg
    className={`${sizeMap[props.size]}`}
    viewBox="0 0 200 240"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g stroke="currentColor" strokeWidth="4">
      {/* Gear Core */}
      <circle cx="100" cy="100" r="40" fill="#fbbf24" stroke="#111" strokeWidth="6" />
      
      {/* Gear Teeth */}
      <path d="M100 20 l5 20 a50 50 0 0 1 10 0 l5 -20 a60 60 0 0 0 -20 0 z" fill="#fbbf24" />
      <path d="M140 30 l-10 17 a50 50 0 0 1 7 7 l17 -10 a60 60 0 0 0 -14 -14 z" fill="#fbbf24" />
      <path d="M170 60 l-17 10 a50 50 0 0 1 4 10 l20 -5 a60 60 0 0 0 -7 -15 z" fill="#fbbf24" />
      <path d="M180 100 l-20 0 a50 50 0 0 1 0 10 l20 0 a60 60 0 0 0 0 -10 z" fill="#fbbf24" />
      <path d="M170 140 l-17 -10 a50 50 0 0 1 -4 10 l20 5 a60 60 0 0 0 1 -5 z" fill="#fbbf24" />
      <path d="M140 170 l-10 -17 a50 50 0 0 1 -7 7 l10 17 a60 60 0 0 0 7 -7 z" fill="#fbbf24" />
      <path d="M100 180 l-5 -20 a50 50 0 0 1 -10 0 l-5 20 a60 60 0 0 0 20 0 z" fill="#fbbf24" />
      <path d="M60 170 l10 -17 a50 50 0 0 1 -7 -7 l-17 10 a60 60 0 0 0 14 14 z" fill="#fbbf24" />
      <path d="M30 140 l17 -10 a50 50 0 0 1 -4 -10 l-20 5 a60 60 0 0 0 7 15 z" fill="#fbbf24" />
      <path d="M20 100 l20 0 a50 50 0 0 1 0 -10 l-20 0 a60 60 0 0 0 0 10 z" fill="#fbbf24" />
      <path d="M30 60 l17 10 a50 50 0 0 1 4 -10 l-20 -5 a60 60 0 0 0 -1 5 z" fill="#fbbf24" />
      <path d="M60 30 l10 17 a50 50 0 0 1 7 -7 l-10 -17 a60 60 0 0 0 -7 7 z" fill="#fbbf24" />

      {/* Clock Hands */}
      <line x1="100" y1="100" x2="100" y2="70" stroke="#111" strokeWidth="4" />
      <line x1="100" y1="100" x2="120" y2="90" stroke="#111" strokeWidth="4" />
      <circle cx="100" cy="100" r="5" fill="#111" />
    </g>
  </svg>
  )
}

export default LogoIcon
