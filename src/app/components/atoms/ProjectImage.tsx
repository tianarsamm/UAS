// components/atoms/ProjectImage.tsx
interface ProjectImageProps {
    src: string;
    alt: string;
  }
  
  const ProjectImage = ({ src, alt }: ProjectImageProps) => (
    <img src={src} alt={alt} className="rounded-xl w-full object-cover" />
  );
  
  export default ProjectImage;
  