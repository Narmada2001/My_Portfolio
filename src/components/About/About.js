import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import WebTechnologies from "./WebTechnologies";
import Tools from "./Tools";
import DesignToolstack from "./DesignToolstack";
import Github from "./Github";

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
              I’m an undergraduate at the Sabaragamuwa University of Sri Lanka, passionate about creating meaningful digital experiences through design and development. 
              As a Front-End Developer, Full Stack Developer, and UI/UX Designer, I enjoy crafting clean, user-friendly interfaces using React.js, Node.js, and modern web technologies. 
              I’m also deeply interested in Project Management, where I love planning, organizing, and leading projects from concept to completion.
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

        {/* GitHub Section */}
        <section className="stack-section">
          <Github />
        </section>
      </Container>
    </Container>
  );
}

export default About;

