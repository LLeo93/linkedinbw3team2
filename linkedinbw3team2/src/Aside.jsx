import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "./reducers/profilesSlice";
import { Link } from "react-router-dom";
import Experiences from "./Components/Experiences";

function ProfileHeader() {
  const profile = useSelector((state) => state.user.data);

  if (!profile)
    return <p className="text-center my-5">Caricamento profilo...</p>;

  return (
    <Container fluid className="bg-light border rounded shadow-sm mb-4 p-0">
      <div
        style={{ backgroundColor: "#b0c4c9", height: "140px" }}
        className="position-relative"
      >
        <div
          className="position-absolute rounded-circle bg-white border"
          style={{
            bottom: "-40px",
            left: "30px",
            width: "80px",
            height: "80px",
            overflow: "hidden",
          }}
        >
          <img
            src={profile.image}
            alt="Foto profilo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="p-4 pt-5">
        <Row>
          <Col>
            <h4 className="fw-bold mb-0">
              {profile.name} {profile.surname}
            </h4>
            <p className="text-muted mb-1">{profile.title || "--"}</p>
            <p className="text-secondary small">{profile.area}</p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <Button variant="primary" size="sm">
                Disponibile per
              </Button>
              <Button variant="outline-primary" size="sm">
                Aggiungi sezione
              </Button>
              <Button variant="outline-primary" size="sm">
                Migliora profilo
              </Button>
              <Button variant="light" size="sm">
                Risorse
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

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
          <ProfileHeader />
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

            <div className="box2 mt-4">
              <h2>Profili seguiti</h2>
              {loading && <p>Caricamento profili...</p>}
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
                            style={{
                              objectFit: "cover",
                              paddingLeft: "1em",
                            }}
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
