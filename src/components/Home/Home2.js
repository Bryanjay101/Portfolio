import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import "animate.css";
import "./home.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={8} md={10} sm={12} className="home-about-description">
            <h1
              style={{ fontSize: "clamp(1.8em, 4vw, 2.6em)" }}
              className="animate__animated animate__fadeIn"
            >
              LET ME INTRODUCE <span className="purple">MYSELF</span>
            </h1>
            <p className="home-about-body animate__animated animate__fadeIn animate__delay-1s">
              I am a dedicated <b className="purple">Full Stack Developer</b>{" "}
              with over two years of professional experience in the industry. My
              journey began with backend development using{" "}
              <b className="purple">Node.js</b>, where I spent two years
              crafting efficient and scalable server-side solutions. Currently,
              I work as a <b className="purple">Full Stack Developer</b>,
              leveraging my expertise in both backend and frontend development
              to create comprehensive solutions.
              <br />
              <br />
              My experience includes <b className="purple">freelance</b> work,
              where I've spent a year independently managing full stack
              development projects. This has enhanced my technical skills and
              ability to adapt to diverse project requirements.
              <br />
              <br />
              With a passion for problem-solving and attention to detail, I
              thrive in collaborative environments where I can contribute my
              expertise while continuously learning from peers. My journey has
              equipped me with a versatile skill set in full stack development,
              backed by a strong commitment to delivering high-quality
              solutions.
            </p>
          </Col>
          <Col
            lg={4}
            md={6}
            sm={8}
            xs={9}
            className="myAvtar animate__animated animate__fadeInRight"
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
                  transition: "transform 0.3s ease-in-out",
                  maxWidth: "100%",
                  height: "auto",
                  margin: "20px 0",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            className="home-about-social animate__animated animate__fadeInUp animate__delay-2s"
          >
            <h1 style={{ fontSize: "clamp(1.5em, 3vw, 2em)" }}>
              CONNECT WITH ME
            </h1>
            <p style={{ fontSize: "clamp(1em, 2vw, 1.2em)" }}>
              Let's build something <span className="purple">amazing </span>
              together
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Bryleezy98/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ transition: "transform 0.3s ease-in-out" }}
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bryleezy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  style={{ transition: "transform 0.3s ease-in-out" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bryleezy/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ transition: "transform 0.3s ease-in-out" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
