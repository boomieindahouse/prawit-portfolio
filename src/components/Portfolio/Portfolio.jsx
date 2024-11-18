import { Container, Row, Col } from 'react-bootstrap';
import { portfolios } from '../Constants/Constants';
import ProjectCard from '../Portfolio/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Portfolio/Portfolio.css';

function Portfolio() {
  return (
    <Container fluid className="portfolio-container">
      <h1 className="portfolio-heading">My Projects</h1>
      <p className="portfolio-description">Here are some of the projects I&apos;ve worked on recently.</p>
      <Row className="justify-content-center">
        {portfolios.map((project) => (
          /* if i have new project, make col to md 4 for reshape the column */
          <Col key={project.id} md={5} className="mb-4 d-flex justify-content-center">
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
