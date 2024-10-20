import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../Portfolio/ProjectCard.css';

const images = import.meta.glob('../../assets/projects/**');

function ProjectCard({ project }) {
  const [imgSrcs, setImgSrcs] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        project.pics.map(async (pic) => {
          const imagePath = images[`../../assets/projects/${project.id}/${pic}`];
          if (imagePath) {
            const mod = await imagePath();
            return mod.default;
          }
          return null;
        })
      );
      setImgSrcs(loadedImages);
    };

    loadImages();
  }, [project.id, project.pics]);

  return (
    <div className="custom-card shadow-sm">
      <Carousel>
        {imgSrcs.map((src, index) => (
          <Carousel.Item key={index}>
            {src ? (
              <img
                src={src}
                className="d-block w-100"
                alt={`${project.name} screenshot ${index + 1}`}
              />
            ) : (
              <div>Loading...</div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="custom-card-body">
        <h1 className="project-card-title">{project.name}</h1>
        <p className="project-card-text">{project.desc}</p>
        <p><strong>Technologies:</strong> {project.dev.join(', ')}</p>
      </div>
      <div className="button-container">
        <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    dev: PropTypes.arrayOf(PropTypes.string).isRequired,
    pics: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
