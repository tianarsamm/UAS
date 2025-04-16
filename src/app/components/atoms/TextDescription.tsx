// components/atoms/TextDescription.tsx
interface TextDescriptionProps {
    children: React.ReactNode;
  }
  
  const TextDescription = ({ children }: TextDescriptionProps) => (
    <p className="text-sm text-gray-500 mb-8">{children}</p>
  );
  
  export default TextDescription;
  