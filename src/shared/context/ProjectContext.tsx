import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Project } from "../models";
import { fetchProjects } from "../services/ProjectService";

interface ProjectContextState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const ProjectContext = createContext<ProjectContextState | undefined>(
  undefined
);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to fetch projects" + err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading, error }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = (): ProjectContextState => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};
