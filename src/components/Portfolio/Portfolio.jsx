import { Container, Col } from 'react-bootstrap';
import { portfolios } from '../Constants/Constants';
import ProjectCard from '../Portfolio/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Portfolio/Portfolio.css';


function Portfolio() {
  return (
    <Container fluid className="portfolio-container">
      <h1 className="portfolio-heading">My Projects</h1>
      <p className="portfolio-description">Here are some of the projects I&apos;ve worked on recently.</p>
      <div className="row justify-content-center">
        <div className="project-card d-flex justify-content-center">
          {portfolios.map((project) => (
            <Col key={project.id} md={6} className="mb-4">
              <ProjectCard project={project} />
            </Col>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
