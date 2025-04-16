// components/atoms/ProjectTitle.tsx
interface ProjectTitleProps {
    title: string;
  }
  
  const ProjectTitle = ({ title }: ProjectTitleProps) => (
    <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
  );
  
  export default ProjectTitle;
  