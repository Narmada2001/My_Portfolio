import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiFigma, SiCanva, SiAdobephotoshop } from "react-icons/si";

function DesignToolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
    </Row>
  );
}

export default DesignToolstack;

