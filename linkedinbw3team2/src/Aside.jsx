import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Experiences from "./Components/Experiences";

function Aside() {
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Experiences />
        </Col>
        <Col lg={4}>
          <aside className='bg-light p-3 border rounded'>
            <div className='box1'>
              <h2>
                Lingua del profilo{" "}
                <a
                  href='/edit-language'
                  style={{
                    marginLeft: "0.5em",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <i
                    className='bi bi-pencil-fill'
                    style={{
                      fontSize: "0.8em",
                      color: "gray",
                      paddingLeft: "3em",
                    }}
                  ></i>
                </a>
              </h2>
              <p>italiano</p>
              <hr className='hr-light-gray' />
              <h2>
                Profilo pubblico e URL
                <a
                  href='/edit-language'
                  style={{
                    marginLeft: "0.5em",
                    textDecoration: "none",
                    color: "inherit",
                    display: "inline-block",
                  }}
                >
                  <i
                    className='bi bi-pencil-fill'
                    style={{
                      fontSize: "0.8em",
                      color: "gray",
                      paddingLeft: "0.5em",
                    }}
                  ></i>
                </a>
              </h2>
              <p>Qui ci va il link</p>
            </div>
            {/* secondo box */}
            <div className='box2'>
              <h2>Profili seguiti</h2>
              <Card className='mb-2 card-bottom-border'>
                <Row className='g-0 align-items-center'>
                  <Col xs={12} lg={3}>
                    <i
                      className='bi bi-person-circle'
                      style={{
                        fontSize: "2em",
                        color: "black",
                        paddingLeft: "1em",
                      }}
                    ></i>
                  </Col>
                  <Col xs={12} lg={9}>
                    <Card.Body className='p-2'>
                      <Card.Title className='mb-0 fw-bold'>
                        Antonio Barone
                      </Card.Title>
                      <Card.Text className='small text-muted mb-0'>
                        @handle1
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              {/* secondo box */}
              <Card className='mb-2 card-bottom-border'>
                <Row className='g-0 align-items-center'>
                  <Col xs={12} lg={3}>
                    <i
                      className='bi bi-person-circle'
                      style={{
                        fontSize: "2em",
                        color: "black",
                        paddingLeft: "1em",
                      }}
                    ></i>
                  </Col>
                  <Col xs={12} lg={9}>
                    <Card.Body className='p-2'>
                      <Card.Title className='mb-0 fw-bold'>
                        Silvia Gasparini
                      </Card.Title>
                      <Card.Text className='small text-muted mb-0'>
                        @handle1
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              {/* secondo box */}
              <Card className='mb-2 card-bottom-border'>
                <Row className='g-0 align-items-center'>
                  <Col xs={12} lg={3}>
                    <i
                      className='bi bi-person-circle'
                      style={{
                        fontSize: "2em",
                        color: "black",
                        paddingLeft: "1em",
                      }}
                    ></i>
                  </Col>
                  <Col xs={12} lg={9}>
                    <Card.Body className='p-2'>
                      <Card.Title className='mb-0 fw-bold'>
                        Lucrezia Martinelli
                      </Card.Title>
                      <Card.Text className='small text-muted mb-0'>
                        @handle1
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              {/* secondo box */}
              <Card className='mb-2 card-bottom-border'>
                <Row className='g-0 align-items-center'>
                  <Col xs={12} lg={3}>
                    <i
                      className='bi bi-person-circle'
                      style={{
                        fontSize: "2em",
                        color: "black",
                        paddingLeft: "1em",
                      }}
                    ></i>
                  </Col>
                  <Col xs={12} lg={9}>
                    <Card.Body className='p-2'>
                      <Card.Title className='mb-0 fw-bold'>
                        Libanio Leoncini
                      </Card.Title>
                      <Card.Text className='small text-muted mb-0'>
                        @handle1
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              {/* secondo box */}
              <Card className='mb-2 card-bottom-border'>
                <Row className='g-0 align-items-center'>
                  <Col xs={12} lg={3}>
                    <i
                      className='bi bi-person-circle'
                      style={{
                        fontSize: "2em",
                        color: "black",
                        paddingLeft: "1em",
                      }}
                    ></i>
                  </Col>
                  <Col xs={12} lg={9}>
                    <Card.Body className='p-2'>
                      <Card.Title className='mb-0 fw-bold'>
                        LeonardNicusor Dautaru
                      </Card.Title>
                      <Card.Text className='small text-muted mb-0'>
                        @handle1
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              {/* secondo box */}
              <Card className='mb-2 '>
                <Row className='g-0 align-items-center'>
                  <Col xs={12} lg={3}>
                    <i
                      className='bi bi-person-circle'
                      style={{
                        fontSize: "2em",
                        color: "black",
                        paddingLeft: "1em",
                      }}
                    ></i>
                  </Col>
                  <Col xs={12} lg={9}>
                    <Card.Body className='p-2'>
                      <Card.Title className='mb-0 fw-bold'>
                        Riccardo Sangermano
                      </Card.Title>
                      <Card.Text className='small text-muted mb-0'>
                        @handle1
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
          </aside>
        </Col>
      </Row>
    </Container>
  );
}

export default Aside;
