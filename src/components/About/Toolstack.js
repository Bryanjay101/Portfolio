import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiNetlify } from "react-icons/si";
import "animate.css";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { Icon: SiVisualstudiocode, delay: "0s" },
        { Icon: SiPostman, delay: "0.2s" },
        { Icon: SiNetlify, delay: "0.4s" },
      ].map(({ Icon, delay }, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons animate__animated animate__fadeInUp"
          style={{ animationDelay: delay }}
        >
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
