// components/atoms/ProjectDescription.tsx
interface ProjectDescriptionProps {
    description: string;
  }
  
  const ProjectDescription = ({ description }: ProjectDescriptionProps) => (
    <p className="text-gray-600 text-sm">{description}</p>
  );
  
  export default ProjectDescription;
  