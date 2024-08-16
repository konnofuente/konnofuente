import assets from "../../assets/assets";
import { labelStyles, Stack } from "../enums/Stacks";

interface ProjectCardProps {
  imageUrl?: string;
  projectName: string;
  description: string;
  link?: string;
  labels?: Stack[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl = assets.Images.projetCardDefault,
  projectName,
  description,
  link,
  labels = [],
}) => {
  // If the link is provided, wrap the card in an anchor tag
  const cardContent = (
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
        <div className="text-whiteDark text-[12] font-light font-['Poppins'] leading-snug">
          {description}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {labels.map((label) => (
            <div
              key={label}
              className={`min-w-[80px] px-2 py-1  rounded ${labelStyles[label].bgColor} ${labelStyles[label].gradient} ${labelStyles[label].textColor} text-xs shadow-sm font-semibold text-center`}
            >
              {labelStyles[label].text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // If a link is provided, wrap the cardContent in an anchor tag
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default ProjectCard;
