// src/components/Contact/Contact.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineMail, AiOutlinePhone, AiOutlineDownload } from "react-icons/ai";
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // FaFacebook, FaInstagram, FaLinkedin are not used in your current HTML
import pdf from "../../Assets/Narmada (SE).pdf";
import "./Contact.css";

const Contact = () => {
  return (
    <Container fluid className="contact-section py-5">
      <Container>
        <Row className="justify-content-center align-items-start">
          
          {/* ===== LEFT SIDE: Contact Info ===== */}
          <Col lg={5} md={6} sm={12} className="contact-info mb-4">
            <h2 className="section-title mb-4">Get in Touch</h2>

            <div className="contact-item mb-3">
              <div className="icon-circle">
                <FaMapMarkerAlt size={22} />
              </div>
              <div>
                <h6>Address</h6>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>

            <div className="contact-item mb-3">
              <div className="icon-circle">
                <AiOutlineMail size={22} />
              </div>
              <div>
                <h6>Email</h6>
                <p>narmadagunathilaka9@gmail.com</p>
              </div>
            </div>

            <div className="contact-item mb-3">
              <div className="icon-circle">
                <AiOutlinePhone size={22} />
              </div>
              <div>
                <h6>Phone</h6>
                <p>(+94) 76 542 0582</p>
              </div>
            </div>

            {/* Social media links could go here if you decide to add them back */}
            {/* <div className="social-area">
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
            </div> */}

            <div className="mt-4">
              <Button variant="primary" href={pdf} target="_blank" className="download-btn">
                <AiOutlineDownload /> &nbsp; Download CV
              </Button>
            </div>
           
          </Col>

          {/* ===== RIGHT SIDE: Contact Form ===== */}
          <Col lg={6} md={6} sm={12}>
            <div className="contact-form p-4 rounded shadow-sm">
              <form action="https://formspree.io/f/xrbyrzve" method="POST">
                <Row className="mb-3">
                  <Col md={6} className="mb-3 mb-md-0">
                    <input
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </Col>
                </Row>

                <input
                  className="form-control mb-3"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  className="form-control mb-3"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                />
                <Button variant="primary" type="submit" className="w-100 send-btn">
                  Send Message
                </Button>
              </form>
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Contact;

