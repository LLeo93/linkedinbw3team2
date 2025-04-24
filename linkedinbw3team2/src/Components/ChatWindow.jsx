import React, { useState } from "react";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const ChatWindow = () => {
  const [open, setOpen] = useState(false);
  const profile = useSelector((state) => state.user.data);

  return (
    <div
      className="position-fixed bottom-0 end-0"
      style={{ zIndex: 9999, width: "280px" }}
    >
      <Card className="rounded-4 border-0">
        <Card.Header className="d-flex align-items-center justify-content-between bg-white py-2 px-2">
          <div className="d-flex align-items-center">
            <div className="me-2 position-relative">
              {profile?.image ? (
                <img
                  src={profile.image}
                  alt="Avatar"
                  className="rounded-circle"
                  style={{ width: "24px", height: "24px", objectFit: "cover" }}
                />
              ) : (
                <div
                  className="rounded-circle ms-0"
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: "#bfc5ca",
                  }}
                ></div>
              )}
              <div
                className="bg-success border border-white rounded-circle position-absolute"
                style={{
                  width: "8px",
                  height: "8px",
                  bottom: 0,
                  right: 0,
                }}
              ></div>
            </div>
            <span className="fw-semibold small">Messaggistica</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-three-dots fs-6 mx-1" role="button"></i>
            <i className="bi bi-pencil-square fs-6" role="button"></i>
            <i
              className={`bi ${
                open ? "bi-chevron-down" : "bi-chevron-up"
              } fs-6`}
              role="button"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
        </Card.Header>

        {open && (
          <>
            <Card.Body
              className="text-muted px-1 py-2"
              style={{ maxHeight: "180px", overflowY: "auto" }}
            >
              <p className="mb-0 small">Nessun messaggio</p>
            </Card.Body>
            <Card.Footer className="bg-white px-1 py-2 border-top-0">
              <InputGroup size="sm">
                <Form.Control placeholder="Scrivi..." />
                <Button variant="primary">
                  <i className="bi bi-send"></i>
                </Button>
              </InputGroup>
            </Card.Footer>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatWindow;
