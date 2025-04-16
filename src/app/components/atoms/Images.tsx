// components/atoms/Image.tsx
const Image = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="w-full md:w-1/2 mt-0" />
  );
  
  export default Image;
  