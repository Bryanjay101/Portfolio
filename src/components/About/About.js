import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { motion } from "framer-motion";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            lg={7}
            md={12}
            style={{
              justifyContent: "center",
              padding: "30px 20px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="project-heading mb-4">
                Know Who <strong className="purple">I am</strong>
              </h1>
              <Aboutcard />
            </motion.div>
          </Col>
          <Col
            lg={5}
            md={8}
            className="about-img"
            style={{ padding: "20px" }}
          >
            <motion.img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{
                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
              }}
            />
          </Col>
        </Row>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </motion.div>
      </Container>
    </Container>
  );
}

export default About;
