import { useMemo } from 'react';
import projectData from '../../data/projectData.json';
import Card from '../Card';

const Projects = () => {
  const reversedProjects = useMemo(() => {
    return [...projectData].reverse();
  }, []);

  return (
    <div className="overflow-container project-container">
      {reversedProjects.map((project) => (
        <Card
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
