import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "animate.css";
function AboutCard() {
  return (
    <Card className="quote-card-view animate__animated animate__fadeIn">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              textAlign: "justify",
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              lineHeight: "1.6",
            }}
          >
            Hi Everyone, I am <span className="purple">Bryan Jay Mabuan </span>
            from <span className="purple"> Cebu, Philippines.</span>
            <br />
            I am currently employed as a Fullstack developer at DNA Micro
            Software Inc.
            <br />I have completed a Bachelor's Degree in{" "}
            <span className="purple">Computer Engineering.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{ marginTop: "20px" }}>
            <li className="about-activity animate__animated animate__fadeInUp">
              <ImPointRight className="activity-icon" /> Playing Games ( Mostly
              Mobile Games and Scrabble )
            </li>
            <li className="about-activity animate__animated animate__fadeInUp animate__delay-1s">
              <ImPointRight className="activity-icon" /> Reading Webnovels.
            </li>
            <li className="about-activity animate__animated animate__fadeInUp animate__delay-2s">
              <ImPointRight className="activity-icon" /> Travelling
            </li>
          </ul>

          <p
            style={{
              color: "rgb(155 126 172)",
              fontSize: "1.1em",
              fontStyle: "italic",
              marginTop: "30px",
            }}
          >
            "Keep seeing positives in each negative situation!"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
