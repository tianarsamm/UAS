// components/atoms/TestimonialAuthor.tsx
interface AuthorProps {
    name: string;
    title: string;
  }
  
  const TestimonialAuthor = ({ name, title }: AuthorProps) => (
    <div>
      <p className="font-semibold text-sm text-gray-900">{name}</p>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  );
  
  export default TestimonialAuthor;
  