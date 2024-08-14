import assets from "../../assets/assets";

interface ProjectCardProps {
    imageUrl?: string;
    projectName: string;
    clientName: string;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({
    imageUrl = assets.Images.projetCardDefault,
    projectName,
    clientName,
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
        </div>
      </div>
    );
  };

  export default ProjectCard;
  