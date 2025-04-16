// components/atoms/SectionTitle.tsx
interface SectionTitleProps {
    label: string;
    title: string;
  }
  
  const SectionTitle = ({ label, title }: SectionTitleProps) => (
    <div className="text-start mb-16">
      <p className="text-2xl text-green-500 font-semibold">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
    </div>
  );
  
  export default SectionTitle;
  