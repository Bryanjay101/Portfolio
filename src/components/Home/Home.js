import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import 'animate.css';
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading animate__animated animate__fadeIn">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name animate__animated animate__fadeIn animate__delay-1s">
                I'm
                <strong className="main-name"> Bryan Jay Mabuan</strong>
              </h1>

              <div style={{ 
                padding: "30px 0",
                textAlign: "left",
                fontSize: "1.2rem"
              }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid animate__animated animate__fadeInRight"
                style={{ 
                  maxHeight: "450px",
                  filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))"
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
