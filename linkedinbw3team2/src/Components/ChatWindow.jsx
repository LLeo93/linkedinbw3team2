import React, { useState } from "react";
import { Card, Button, InputGroup, Form } from "react-bootstrap";

const ChatWindow = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="position-fixed bottom-0 end-0"
      style={{ zIndex: 9999, width: "280px" }}
    >
      <Card className="rounded-4 border-0">
        <Card.Header className="d-flex align-items-center justify-content-between bg-white rounded-top-4 py-1 ps-1 pe-2">
          <div className="d-flex align-items-center">
            <div className="me-2 position-relative">
              <div
                className="rounded-circle ms-0"
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#bfc5ca",
                }}
              ></div>
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
