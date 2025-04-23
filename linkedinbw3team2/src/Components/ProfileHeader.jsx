import { useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

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

export default ProfileHeader;
