import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="project-card-view glass-card h-100">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          className="project-card-img"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <Card.Body className="d-flex flex-column text-start">
          <Card.Title className="purple fw-bold mb-3">{props.title}</Card.Title>
          <Card.Text className="project-description flex-grow-1" style={{ fontSize: "0.95rem" }}>
            {props.description}
          </Card.Text>
          <div className="mt-auto d-flex gap-2 pt-3">
            {props.ghLink && (
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                className="project-button flex-grow-1"
              >
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="project-button flex-grow-1"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default ProjectCards;
