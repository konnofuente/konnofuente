import React from "react";
import './style.css'; 
import { TabButton } from "../../../shared/components/buttons";
import ProjectCard from "../../../shared/components/ProjectCard";
import { useTabNavigator } from "../hooks/useTabNavigator";


const TabNavigator: React.FC = () => {
const {activeIndex,tabLabels,setActiveIndex,loading,error,filteredProjects} = useTabNavigator()


  return (
    <div className="  w-full flex-col justify-start items-center inline-flex">
      <div className=" no-scrollbar w-full overflow-x-auto">
        <div className="flex space-x-10 sm:justify-between items-center cursor-pointer flex-nowrap">
          {tabLabels.map((label, index) => (
            <TabButton
              key={index}
              onClick={() => setActiveIndex(index)}
              isActive={activeIndex === index}
            >
              {label}
            </TabButton>
          ))}
        </div>
      </div>

      <div className="grid justify-center items-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full mt-5">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading &&
          !error &&
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.name}
              description={project.client}
              link={project.livelink}
              labels={project.labels}
            />
          ))}
      </div>
    </div>
  );
};

export default TabNavigator;
