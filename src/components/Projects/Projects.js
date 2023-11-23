import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import okidokisocial from '../../Assets/Projects/okidokisocial.jpg'
import marianna from '../../Assets/Projects/marianna.png'
import privateBg from '../../Assets/Projects/private.jpg'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently with approval to add to my portfolio.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={okidokisocial}
              isBlog={false}
              title="Okidokisocial"
              description="A social networking website where users can post comments, share photographs, 
              and post links to news or other interesting content on the web. It was designed for a certain group
              of people who likes a certain crypto currency so that they have a platform to communicate into for the
              updates, movements and other crypto news. Designed using ReactJS as frontend library, SailsJs for the backend side and with
              MongoDB as a database."
              ghLink=""
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marianna}
              isBlog={false}
              title="Marianna's Books Webpage"
              description="A website for an author to introduce herself and her books. Has links connected to other different book selling websites, 
              email the author for suggestions or queries, and general overview of the books."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={privateBg}
              isBlog={false}
              title="More Projects"
              description="Other Projects I work on are company's assets to which I can't divulge due to confidentiality. I can briefly talk about it as an overview."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
