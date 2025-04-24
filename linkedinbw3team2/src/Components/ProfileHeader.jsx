import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { fetchLoggedUser } from "../reducers/userSlice";

function ProfileHeader() {
  const profile = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (imageFile) => {
    if (!imageFile || !profile?._id) return;
    const formData = new FormData();
    formData.append("profile", imageFile);

    setUploading(true);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NDc3M2Q0NTE4MTAwMTVjZTgzY2UiLCJpYXQiOjE3NDUzMDc1MDcsImV4cCI6MTc0NjUxNzEwN30.u0YJhaM-DckuqeyqScIIgbQsaBB7E5H9SBDxS4Wj5mE",
          },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Errore nel caricamento dell'immagine");

      dispatch(fetchLoggedUser());
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  if (!profile)
    return <p className="text-center my-5">Caricamento profilo...</p>;

  return (
    <Container fluid className="bg-light border rounded shadow-sm my-4 p-0">
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
              <Button variant="primary" size="sm" className="rounded-pill px-3">
                Disponibile per
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-pill px-3"
              >
                Migliora profilo
              </Button>
              <Button
                variant="light"
                size="sm"
                className="rounded-pill px-3 border border-secondary"
              >
                Risorse
              </Button>
            </div>
            <div className="mt-3">
              <label className="btn btn-outline-secondary btn-sm">
                Cambia immagine
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      handleImageUpload(file);
                    }
                  }}
                  hidden
                />
              </label>
              {uploading && (
                <p className="text-muted small mt-2">Caricamento in corso...</p>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProfileHeader;
