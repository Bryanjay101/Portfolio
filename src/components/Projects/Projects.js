import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gocab from '../../Assets/Projects/gocab.jpg'
import okidokisocial from '../../Assets/Projects/okidokisocial.jpg'
import unfied from '../../Assets/Projects/unified.png'
import marianna from '../../Assets/Projects/marianna.png'
import gorentals from '../../Assets/Projects/gorentals.jpg'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gocab}
              isBlog={false}
              title="Gocab"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unfied}
              isBlog={false}
              title="Unified Company Portal"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={okidokisocial}
              isBlog={false}
              title="Okidokisocial"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marianna}
              isBlog={false}
              title="Marianna's Books Webpage"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gorentals}
              isBlog={false}
              title="Gorentals"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
