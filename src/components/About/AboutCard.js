import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bryan Jay Mabuan </span>
            from <span className="purple"> Cebu, Philippines.</span>
            <br />
            I am currently employed as a software developer at DNA Micro Software Inc.
            <br />
            I have completed a bachelor's degree in <span className="purple">Computer Engineering.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games ( Mostly Mobile Games and Scrabble )
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Webnovels.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep seeing positives in each negative situation!"{" "}
          </p>
          <footer className="blockquote-footer">Bryan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
