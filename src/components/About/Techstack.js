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
import "animate.css";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { Icon: DiJavascript1, delay: "0s" },
        { Icon: DiReact, delay: "0.2s" },
        { Icon: DiNodejs, delay: "0.4s" },
        { Icon: DiMongodb, delay: "0.6s" },
        { Icon: SiFirebase, delay: "0.8s" },
        { Icon: DiGit, delay: "1s" },
        { Icon: SiNestjs, delay: "1.2s" },
        { Icon: GrGraphQl, delay: "1.4s" },
        { Icon: SiRedis, delay: "1.6s" },
        { Icon: DiPython, delay: "1.8s" },
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

export default Techstack;
