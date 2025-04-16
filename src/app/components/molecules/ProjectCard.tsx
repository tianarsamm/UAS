// components/molecules/ProjectCard.tsx
import ProjectImage from "../atoms/ProjectImage";
import ProjectTitle from "../atoms/ProjectTitle";
import ProjectDescription from "../atoms/ProjectDescription";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({ image, title, description }: ProjectCardProps) => (
  <div className="space-y-4">
    <ProjectImage src={image} alt={title} />
    <ProjectTitle title={title} />
    <ProjectDescription description={description} />
  </div>
);

export default ProjectCard;
