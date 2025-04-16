// components/atoms/IconBox.tsx
interface IconBoxProps {
    src: string;
    alt: string;
  }
  
  const IconBox = ({ src, alt }: IconBoxProps) => (
    <div className="inline-block p-5 bg-green-100 rounded-2xl">
      <img src={src} alt={alt} className="w-10 h-10 mx-auto" />
    </div>
  );
  
  export default IconBox;
  