// components/atoms/StatText.tsx
interface StatTextProps {
    title: string;
    value: string;
  }
  
  const StatText = ({ title, value }: StatTextProps) => (
    <>
      <p className="text-sm text-gray-700">{title}</p>
      <h3 className="text-xl font-bold text-green-600">{value}</h3>
    </>
  );
  
  export default StatText;
  