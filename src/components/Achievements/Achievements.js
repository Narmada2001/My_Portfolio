import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Image } from "react-bootstrap";
import { AiOutlineTrophy } from "react-icons/ai";
import Particle from "../Particle"; // ✅ Adds the starry background
import pearlImg from "../../Assets/pearlhack.jpg";

function Achievements() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="about-section">
      <Particle /> {/* same background as About page */}
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card
              className="achievement-card text-center text-md-start"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(167, 85, 247, 0.3)",
                borderRadius: "15px",
                color: "white",
                padding: "25px 20px",
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.15)",
              }}
            >
              <Card.Body>
                {/* Title */}
                <h1
                  className="project-heading text-center"
                  style={{
                    fontSize: "2.2em",
                    fontWeight: "700",
                    marginBottom: "30px",
                    color: "white",
                  }}
                >
                  <AiOutlineTrophy
                    style={{
                      marginRight: "10px",
                      verticalAlign: "middle",
                      color: "#a855f7",
                    }}
                  />
                  My <strong className="purple">Achievements</strong>
                </h1>

                {/* Content */}
                <Row className="align-items-center justify-content-center">
                  {/* Image Section */}
                  <Col
                    xs={12}
                    md={5}
                    className="d-flex flex-column align-items-center mb-4 mb-md-0"
                  >
                    <div
                      className="image-container"
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        border: "1px solid rgba(167, 85, 247, 0.4)",
                      }}
                    >
                      <Image
                        src={pearlImg}
                        alt="Vivid Visions - PearlHack 2024 Semi-Finalist"
                        onClick={handleShow}
                        className="img-fluid"
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          maxHeight: "300px",
                          objectFit: "cover",
                          borderRadius: "12px",
                        }}
                      />
                    </div>
                    <small
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        marginTop: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      Click to enlarge
                    </small>
                  </Col>

                  {/* Text Section */}
                  <Col xs={12} md={7}>
                    <p
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: "1.8",
                        marginBottom: "15px",
                        color: "white",
                      }}
                    >
                      My team, <strong className="purple">VIVID VISIONS</strong>, was
                      selected as a <strong>Semi-Finalist</strong> in the Designathon at{" "}
                      <strong className="purple">PearlHack 2024.</strong>{" "}
                       It was an incredible experience showcasing our innovative design
                      ideas and teamwork.
                    </p>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.75)",
                        marginBottom: "18px",
                      }}
                    >
                      Organized by{" "}
                      <strong>IEEE WIE Affinity Group</strong>, Sabaragamuwa
                      University of Sri Lanka.
                    </p>

                    <Button
                      variant="outline-light"
                      onClick={handleShow}
                      className="rounded-pill px-4 py-2"
                      style={{
                        fontWeight: "500",
                        borderColor: "#a855f7",
                        color: "#a855f7",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#a855f7";
                        e.target.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#a855f7";
                      }}
                    >
                      View Poster
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Modal for enlarged image */}
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center">
              <span className="purple">VIVID VISIONS</span> — PearlHack 2024 (Semi-Finalist)
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image
              src={pearlImg}
              alt="Vivid Visions Poster"
              fluid
              style={{
                borderRadius: "12px",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default Achievements;

