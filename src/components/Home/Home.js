import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png"; // Your photo or home illustration
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            {/* Text & Social Links */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Narmada Gunathilaka</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              {/* Social Links Section */}
              <div className="home-about-social" style={{ marginTop: "30px" }}>
                <p>
                  Feel free to <span className="purple">connect </span>with me
                </p>
                <ul
                  className="home-about-social-links"
                  style={{ display: "flex", gap: "20px" }}
                >
                  <li className="social-icons">
                    <a
                      href="https://github.com/Narmada2001"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      style={{ color: "#6c63ff", fontSize: "2rem" }}
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/narmada-gunathilaka-2818372a7/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      style={{ color: "#6c63ff", fontSize: "2rem" }}
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.facebook.com/narmada.gunathilaka.2025"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      style={{ color: "#6c63ff", fontSize: "2rem" }}
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Image with clickable link */}
            <Col
              md={5}
              style={{
                paddingBottom: 20,
                textAlign: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/narmada-gunathilaka-2818372a7/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={homeLogo} // Replace with your photo if you want
                  alt="Narmada Gunathilaka"
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                    borderRadius: "50%", // circular
                    objectFit: "cover",
                    border: "4px solid #6c63ff",
                    boxShadow: "0 0 25px rgba(108, 99, 255, 0.5)",
                    cursor: "pointer", // show clickable
                  }}
                />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
