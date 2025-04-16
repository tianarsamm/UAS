// components/molecules/TestimonialCard.tsx
import TestimonialMessage from "../atoms/TestimonialMessage";
import AuthorImage from "../atoms/AuthorImage";
import TestimonialAuthor from "../atoms/TestimonialAuthor";

interface CardProps {
  message: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard = ({ message, name, title, image }: CardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <TestimonialMessage message={message} />
    <div className="flex items-center space-x-4">
      <AuthorImage src={image} alt={name} />
      <TestimonialAuthor name={name} title={title} />
    </div>
  </div>
);

export default TestimonialCard;
