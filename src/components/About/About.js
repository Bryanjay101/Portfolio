import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import "animate.css";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            lg={7}
            md={12}
            className="animate__animated animate__fadeIn"
            style={{
              justifyContent: "center",
              padding: "30px 20px",
            }}
          >
            <h1 className="project-heading mb-4">
              Know Who <strong className="purple">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            lg={5}
            md={8}
            className="about-img animate__animated animate__fadeInRight"
            style={{ padding: "20px" }}
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Col>
        </Row>
        <h1 className="project-heading animate__animated animate__fadeIn">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading animate__animated animate__fadeIn">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
