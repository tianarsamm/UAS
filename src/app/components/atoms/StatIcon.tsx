// components/atoms/StatIcon.tsx
interface StatIconProps {
    src: string;
    alt: string;
  }
  
  const StatIcon = ({ src, alt }: StatIconProps) => (
    <img src={src} alt={alt} className="w-11 h-12 mx-auto" />
  );
  
  export default StatIcon;
  