import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import WebTechnologies from "./WebTechnologies";
import Tools from "./Tools";
import DesignToolstack from "./DesignToolstack";


function About() {
  return (
    <Container fluid className="about-section" style={{ position: "relative" }}>
      {/* Particle behind content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particle />
      </div>

      {/* Main Content */}
      <Container style={{ position: "relative", zIndex: 1, paddingTop: "60px", paddingBottom: "60px" }}>
        {/* About Text */}
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} className="about-text">
            <h1 className="section-heading text-center">
              ABOUT <strong className="purple">ME</strong>
            </h1>
            <p className="about-description text-justify">
              Motivated and detail-oriented Information Systems undergraduate with practical experience in software design, web development, and project coordination. Skilled in technical, analytical, and problem-solving areas, with a strong foundation in programming, UI/UX design, database management, and agile teamwork. A fast learner with excellent communication and leadership abilities, eager to contribute to innovative IT projects and grow through hands-on industry experience.
            </p>
          </Col>
        </Row>

        {/* Tech Stacks Sections */}
        <section className="stack-section">
          <h2 className="project-heading text-center">Frameworks</h2>
          <Techstack />
        </section>

        <section className="stack-section">
          <h2 className="project-heading text-center">Databases</h2>
          <Toolstack />
        </section>

        <section className="stack-section">
          <h2 className="project-heading text-center">Web Technologies</h2>
          <WebTechnologies />
        </section>

        <section className="stack-section">
          <h2 className="project-heading text-center">Tools</h2>
          <Tools />
        </section>

        <section className="stack-section">
          <h2 className="project-heading text-center">Design Tools</h2>
          <DesignToolstack />
        </section>

       
      </Container>
    </Container>
  );
}

export default About;

