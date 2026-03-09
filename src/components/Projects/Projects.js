import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import okidokisocial from "../../Assets/Projects/okidokisocial.jpg";
import marianna from "../../Assets/Projects/marianna.png";
import privateBg from "../../Assets/Projects/private.jpg";
import { motion } from "framer-motion";

function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently with approval to add to my portfolio.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Row className="justify-content-center g-5" style={{ paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <motion.div variants={item} className="h-100">
                <ProjectCard
                  imgPath={okidokisocial}
                  isBlog={false}
                  title="Okidokisocial"
                  description="A social networking website where users can post comments, share photographs, and post links to news or other interesting content on the web. Designed using ReactJS as frontend library, SailsJs for the backend side and with MongoDB as a database."
                  ghLink=""
                  demoLink=""
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={item} className="h-100">
                <ProjectCard
                  imgPath={marianna}
                  isBlog={false}
                  title="Marianna's Books"
                  description="A website for an author to introduce herself and her books. Has links connected to other different book selling websites, email the author for suggestions or queries, and general overview of the books."
                  ghLink=""
                  demoLink=""
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={item} className="h-100">
                <ProjectCard
                  imgPath={privateBg}
                  isBlog={false}
                  title="More Projects"
                  description="Other Projects I work on are company's assets to which I can't divulge due to confidentiality. I can briefly talk about it as an overview."
                  ghLink=""
                  demoLink=""
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
