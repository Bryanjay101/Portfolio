import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiRedis, SiFirebase, SiNestjs } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { motion } from "framer-motion";

function Techstack() {
  const icons = [
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    SiFirebase,
    DiGit,
    SiNestjs,
    GrGraphQl,
    SiRedis,
    DiPython,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((Icon, index) => (
        <Col xs={4} md={2} key={index}>
          <motion.div
            className="tech-icons"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon />
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
