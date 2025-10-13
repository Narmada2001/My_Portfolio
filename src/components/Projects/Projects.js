import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/StoreManagement.jpeg";
import editor from "../../Assets/Projects/KaviFood.png";
import chatify from "../../Assets/Projects/DenguePatient.jpg";
import bitsOfCode from "../../Assets/Projects/SportCenter.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Heading */}
        <h1 className="project-heading text-center">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p
          className="text-center"
          style={{ color: "white", marginBottom: "35px" }}
        >
          Here are a few projects I've worked on recently.
        </p>

        {/* Responsive Grid - 2 cards per row */}
        <Row
          className="justify-content-center"
          style={{ rowGap: "25px", columnGap: "10px" }}
        >
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className="project-card d-flex align-items-stretch justify-content-center"
            style={{ padding: "10px" }}
          >
            <div style={{ maxWidth: "90%", transform: "scale(0.95)" }}>
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Dengue Patient Management System"
                description="Developing a web-based system for managing dengue patient records, including ward management, vitals tracking, and secure authentication to improve hospital efficiency."
                ghLink="https://github.com/mayuraabhayasinghe/dengue-patient-management-system-grp4.git"
              />
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className="project-card d-flex align-items-stretch justify-content-center"
            style={{ padding: "10px" }}
          >
            <div style={{ maxWidth: "90%", transform: "scale(0.95)" }}>
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Sport Center Inventory Management System"
                description="This system is developed for the Sports Center of Sabaragamuwa University of Sri Lanka to efficiently manage and maintain sports equipment and inventory records."
                ghLink="https://github.com/IndWit/sport-center-inventory-management"
              />
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className="project-card d-flex align-items-stretch justify-content-center"
            style={{ padding: "10px" }}
          >
            <div style={{ maxWidth: "90%", transform: "scale(0.95)" }}>
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Kavi FooD"
                description="A responsive food ordering platform that allows users to browse menus, add items to cart, place orders, and manage accounts through Sign In/Sign Up functionality."
                ghLink="https://github.com/Narmada2001/Kavi_FooD.git"
              />
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className="project-card d-flex align-items-stretch justify-content-center"
            style={{ padding: "10px" }}
          >
            <div style={{ maxWidth: "90%", transform: "scale(0.95)" }}>
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Kolonna StoreTrack"
                description="Designing a digital system to automate store and inventory operations, enabling efficient tracking, request management, and reporting for improved transparency and service delivery."
                ghLink="https://github.com/IndWit/sport-center-inventory-management"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
