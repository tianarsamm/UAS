// components/atoms/AuthorImage.tsx
const AuthorImage = ({ src, alt }: { src: string; alt: string }) => (
    <img
      src={src}
      alt={alt}
      className="w-15 h-15 rounded-full object-cover"
    />
  );
  
  export default AuthorImage;
  