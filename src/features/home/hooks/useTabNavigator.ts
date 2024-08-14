import { useEffect, useState } from "react";
import { useProjects } from "../../../shared/context/ProjectContext";

export const useTabNavigator = () => {
  const [tabLabels, setTabLabel] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { projects, loading, error } = useProjects();

  useEffect(() => {
    const projetCategories = Array.from(
      new Set(projects.map((project) => project.category))
    );
    setTabLabel(projetCategories);
  }, [projects]);

  const activeCategory = tabLabels[activeIndex];

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return {
    activeIndex,
    tabLabels,
    setActiveIndex,
    loading,
    error,
    filteredProjects,
  };
};
