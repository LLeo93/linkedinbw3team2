import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";


function UserProfile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE",
          },
        }
      );
      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, [userId]);

  if (!profile) return <p>Caricamento...</p>;

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
          <p className="text-secondary small">{profile.area || "--"}</p>
          <p className="mb-2">{profile.bio || "--"}</p>
          <p className="mb-1">Email: <a href={`mailto:${profile.email || ""}`}>{profile.email || "--"}</a></p>
          <p className="mb-0">Username: {profile.username || "--"}</p>
        </Col>
      </Row>
    </div>
    
  </Container>
  
  );
}

export default UserProfile;
