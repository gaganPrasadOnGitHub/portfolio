import { useState } from 'react';
import Loading from './Loading';
import PropTypes from 'prop-types';

const Card = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank');
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div
      className="card"
      onClick={(e) => handleLinkClick(e, project.liveLink)}
    >
      {!imageLoaded && (
        <div className="image-spinner-container">
          <Loading />
        </div>
      )}
      <img
        className="card-image"
        src={project.image}
        alt={project.title}
        title={project.title}
        onLoad={handleImageLoaded}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className="card-info">
        <p className="title">{project.title}</p>
        <p className="description">{project.description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    liveLink: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
