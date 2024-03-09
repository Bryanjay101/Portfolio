import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCE <span className="purple">MYSELF</span>
            </h1>
            <p className="home-about-body">
              I am a dedicated <b className="purple">Full Stack Developer</b> with over two years of
              professional experience in the industry. My journey began as
              backend development with <b className="purple">Node.js</b> for two years, delving deep into
              crafting efficient and scalable server-side solutions. Following
              this and <b className="purple">currently</b>, I specialized in being <b className="purple">Full Stack Developer</b>,
              where I honed my skills in both backend and frontend development,
              catering to diverse customer preferences.
              <br />
              <br />
              In addition to my professional roles, I have also ventured into <b className="purple">freelance</b> work,
              spending around a year independently tackling full stack
              development projects. This experience has not only expanded my
              technical repertoire but also sharpened my ability to adapt to
              varying project requirements and client expectations.
              <br />
              <br />
               With a
              passion for problem-solving and a keen eye for detail, I thrive in
              collaborative environments where I can contribute my expertise
              while continuously learning from my peers. My journey in the tech
              industry has equipped me with a versatile skill set, encompassing
              full stack development, backend specialization, and a commitment
              to delivering high-quality solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CHECK ME OUT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/HandsomeTortoise"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
