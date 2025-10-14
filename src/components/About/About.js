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
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ padding: "20px 10px" }}>
          <Col
            xs={12}
            md={10}
            lg={8}
            style={{ textAlign: "center", padding: "30px 15px" }}
          >
            <h1 style={{ fontSize: "2.1em", marginBottom: "20px" }}>
              ABOUT <strong className="purple">ME</strong>
            </h1>
            <p style={{ fontSize: "1.1em", lineHeight: "1.8", color: "white" }}>
              I’m an undergraduate at the Sabaragamuwa University of Sri Lanka,
              passionate about creating meaningful digital experiences through
              design and development. As a Front-End Developer, Full Stack
              Developer, and UI/UX Designer, I enjoy crafting clean,
              user-friendly interfaces using React.js, Node.js, and modern web
              technologies. I’m also deeply interested in Project Management,
              where I love planning, organizing, and leading projects from
              concept to completion.
            </p>
          </Col>
        </Row>

        <h1 className="project-heading text-center">Frameworks</h1>
        <Techstack />

        <h1 className="project-heading text-center">Databases</h1>
        <Toolstack />

        <h1 className="project-heading text-center">Web Technologies</h1>
        <WebTechnologies />

        <h1 className="project-heading text-center">Tools</h1>
        <Tools />

        <h1 className="project-heading text-center">Design Tools</h1>
        <DesignToolstack />

        {/* 🌟 New Achievements Section */}
        

        <Github />
      </Container>
    </Container>
  );
}

export default About;

