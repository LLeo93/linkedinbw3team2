import React from "react";
import { Container, Row, Col, Dropdown, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="text-dark pt-5"
      style={{ background: "rgb(244, 242, 238)" }}
    >
      <Container>
        <Row className="text-start mt-5">
          <Col xs={12} md={10}>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="mb-3">
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Informazioni
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Informativa sulla community professionale
                  </a>
                </p>
                <Dropdown>
                  <Dropdown.Toggle
                    className="p-0 mb-3 border-0 fw-bold text-decoration-none bg-transparent"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Privacy e condizioni
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Informativa sulla privacy</Dropdown.Item>
                    <Dropdown.Item>Contratto di licenza</Dropdown.Item>
                    <Dropdown.Item>
                      Termini e condizioni delle pagine
                    </Dropdown.Item>
                    <Dropdown.Item>Informativa sui cookie</Dropdown.Item>
                    <Dropdown.Item>Informativa sul copyright</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Sales Solutions
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Centro sicurezza
                  </a>
                </p>
              </Col>

              <Col className="mb-3">
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Accessibilità
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Carriera
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Opzioni per gli annunci pubblicitari
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Mobile
                  </a>
                </p>
              </Col>

              <Col className="mb-3">
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Talent Solutions
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Soluzioni di marketing
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Pubblicità
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="fw-bold text-decoration-none"
                    style={{ color: "rgb(98, 97,95)" }}
                  >
                    Piccole imprese
                  </a>
                </p>
              </Col>
              <Col className="mb-3">
                <div className="mb-3">
                  <a
                    href="#"
                    className="text-dark fw-bold text-decoration-none"
                  >
                    <i className="bi bi-question-circle-fill me-2"></i>
                    Domande?
                  </a>
                  <p className="mb-0" style={{ color: "rgb(98, 97,95)" }}>
                    Visita il nostro Centro assistenza.
                  </p>
                </div>
                <div className="mb-3">
                  <a
                    href="#"
                    className="text-dark fw-bold text-decoration-none"
                  >
                    <i className="bi bi-gear-fill me-2"></i>
                    Gestisci il tuo account e la tua privacy
                  </a>
                  <p className="mb-0" style={{ color: "rgb(98, 97,95)" }}>
                    Vai alle impostazioni
                  </p>
                </div>
                <div className="mb-3">
                  <a
                    href="#"
                    className="text-dark fw-bold text-decoration-none"
                  >
                    <i className="bi bi-shield-shaded me-2"></i>
                    Trasparenza sui contenuti consigliati
                  </a>
                  <p className="mb-0" style={{ color: "rgb(98, 97,95)" }}>
                    Scopri di più sui contenuti consigliati.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="my-3 text-secondary">
                LinkedIn Corporation &copy; {new Date().getFullYear()}
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={2} className="mt-4 mt-md-0">
            <Form.Group controlId="languageSelect">
              <Form.Label>Seleziona lingua</Form.Label>
              <Form.Select className="border-1">
                <option>Italiano (Italian)</option>
                <option>English (English)</option>
                <option>Français (French)</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
