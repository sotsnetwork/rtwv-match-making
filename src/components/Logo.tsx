import { Heart } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 32 }: LogoProps) => {
  const crossSize = size * 0.5;
  
  return (
    <div className={`relative ${className}`}>
      <Heart 
        size={size} 
        className="text-accent" 
        fill="currentColor" 
      />
      <div 
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          width={crossSize}
          height={crossSize}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L12 18M8 8L16 8"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
