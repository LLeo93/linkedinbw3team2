import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "./reducers/profilesSlice";
import { Link } from "react-router-dom";
import Experiences from "./Components/Experiences";

function Aside() {
  const dispatch = useDispatch();
  const { list: profiles, loading } = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Experiences />
        </Col>
        <Col lg={4}>
          <aside className="bg-light p-3 border rounded">
            <div className="box1">
              <h2>
                Lingua del profilo{" "}
                <a
                  href="/edit-language"
                  style={{
                    marginLeft: "0.5em",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <i
                    className="bi bi-pencil-fill"
                    style={{
                      fontSize: "0.8em",
                      color: "gray",
                      paddingLeft: "3em",
                    }}
                  ></i>
                </a>
              </h2>
              <p>italiano</p>
              <hr className="hr-light-gray" />
              <h2>
                Profilo pubblico e URL
                <a
                  href="/edit-language"
                  style={{
                    marginLeft: "0.5em",
                    textDecoration: "none",
                    color: "inherit",
                    display: "inline-block",
                  }}
                >
                  <i
                    className="bi bi-pencil-fill"
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

            <div className="box2">
              <h2>Profili seguiti</h2>

              {loading && <p>Caricamento...</p>}

              {!loading &&
                profiles.slice(0, 6).map((profile) => (
                  <Link
                    key={profile._id}
                    to={`/profile/${profile._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card className="mb-2 card-bottom-border">
                      <Row className="g-0 align-items-center">
                        <Col xs={12} lg={3}>
                          <img
                            src={profile.image}
                            alt={profile.name}
                            className="rounded-circle"
                            width="40"
                            height="40"
                            style={{ objectFit: "cover", paddingLeft: "1em" }}
                          />
                        </Col>
                        <Col xs={12} lg={9}>
                          <Card.Body className="p-2">
                            <Card.Title className="mb-0 fw-bold">
                              {profile.name} {profile.surname}
                            </Card.Title>
                            <Card.Text className="small text-muted mb-0">
                              @{profile.username}
                            </Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Link>
                ))}
            </div>
          </aside>
        </Col>
      </Row>
    </Container>
  );
}

export default Aside;
