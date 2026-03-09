import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiNetlify } from "react-icons/si";
import { motion } from "framer-motion";

function Toolstack() {
  const icons = [SiVisualstudiocode, SiPostman, SiNetlify];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((Icon, index) => (
        <Col xs={4} md={2} key={index}>
          <motion.div
            className="tech-icons"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default Toolstack;
