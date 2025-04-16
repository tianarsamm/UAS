// components/molecules/FeatureCard.tsx
import IconBox from "../atoms/IconBox";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="space-y-4 text-center">
    <IconBox src={icon} alt={title} />
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
    <a
      href="#"
      className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-green-500 transition-colors"
    >
      Learn More <ArrowRight size={16} />
    </a>
  </div>
);

export default FeatureCard;
