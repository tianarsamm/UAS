// components/molecules/StatCard.tsx
import StatIcon from "../atoms/StatIcon";
import StatText from "../atoms/StatText";

interface StatCardProps {
  icon: string;
  title: string;
  value: string;
}

const StatCard = ({ icon, title, value }: StatCardProps) => (
  <div className="space-y-4 text-center">
    <StatIcon src={icon} alt={title} />
    <StatText title={title} value={value} />
  </div>
);

export default StatCard;
