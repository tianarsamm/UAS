// components/atoms/LogoImage.tsx
interface LogoImageProps {
    src: string;
    alt: string;
  }
  
  const LogoImage = ({ src, alt }: LogoImageProps) => (
    <img src={src} alt={alt} className="h-6 md:h-8 object-contain" />
  );
  
  export default LogoImage;
  