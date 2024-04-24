import { useMemo } from 'react';
import projectData from '../../data/projectData.json';

const Projects = () => {
  const reversedProjects = useMemo(() => {
    return [...projectData].reverse();
  }, []);

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <div className="overflow-container project-container">
      {reversedProjects.map((project) => (
        <div
          key={project.id}
          className="card"
          onClick={(e) => handleLinkClick(e, project.liveLink)}
        >
          <img
            className="card-image"
            src={project.image}
            alt={project.title}
            title={project.title}
          />
          <div className="card-info">
            <p className="title">{project.title}</p>
            <p className="description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
