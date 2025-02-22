import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/BryanResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume-header animate__animated animate__fadeIn">
          <h1 className="project-heading">
            My <strong className="purple">Resume</strong>
          </h1>
        </Row>

        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="resume-btn-container"
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume-btn animate__animated animate__fadeInUp"
          >
            <AiOutlineDownload className="download-icon" />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume animate__animated animate__fadeIn">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            loading={<div className="pdf-loader">Loading PDF...</div>}
            onLoadSuccess={() => setLoading(false)}
          >
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.6 : 0.6}
              className={loading ? "loading" : "loaded"}
            />
          </Document>
        </Row>

        <Row
          style={{ justifyContent: "center", position: "relative" }}
          className="resume-btn-container"
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume-btn animate__animated animate__fadeInUp"
          >
            <AiOutlineDownload className="download-icon" />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
