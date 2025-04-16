// components/atoms/TextHeading.tsx
interface TextHeadingProps {
    children: React.ReactNode;
  }
  
  const TextHeading = ({ children }: TextHeadingProps) => (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{children}</h2>
  );
  
  export default TextHeading;
  