import assets from "../../assets/assets";
import { labelStyles, ProjectLabel } from "../enums/ProjectLabels";

interface ProjectCardProps {
  imageUrl?: string;
  projectName: string;
  clientName: string;
  labels?: ProjectLabel[]; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl = assets.Images.projetCardDefault,
  projectName,
  clientName,
  labels = [], // Default to an empty array if no labels are provided
}) => {
  return (
    <div className="w-full px-6 py-[30px] bg-white rounded shadow flex-col justify-center items-start gap-5 inline-flex max-w-lg">
      <div className="w-full h-auto justify-center items-center inline-flex">
        <img
          className="w-full h-auto relative rounded"
          alt="Project Thumbnail"
          src={imageUrl}
        />
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
        <div className="text-whiteDarker text-xl font-bold font-['Poppins'] leading-snug">
          {projectName}
        </div>
        <div className="text-blackNormal text-base font-light font-['Poppins'] leading-snug">
          {clientName}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {labels.map((label) => (
            <div
              key={label}
              className={`min-w-[80px] px-2 py-1  rounded ${labelStyles[label].bgColor} ${labelStyles[label].gradient} ${labelStyles[label].textColor} text-xs font-semibold text-center`}
            >
              {labelStyles[label].text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
