import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import ExpForm from "./FormExp";

function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  const [editingExpId, setEditingExpId] = useState(null);

  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3N2UzZGQ0NTE4MTAwMTVjZTgzZGQiLCJpYXQiOjE3NDUzMjE1MzMsImV4cCI6MTc0NjUzMTEzM30.LTwYloXHYIwB75XWa1MVZmD9zX-NUBQDIp9WSrB1Gmc";

  const userId = "68077e3dd451810015ce83dd";

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Errore nel recupero delle esperienze");
        }

        const expData = await response.json();
        setExperiences(expData);
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    fetchExperiences();
  }, []);

  const handleChange = (e) => {
    setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      role: newExperience.role,
      company: newExperience.company,
      startDate: newExperience.startDate,
      endDate: newExperience.endDate || null,
      description: newExperience.description,
      area: newExperience.area,
    };

    const url = editingExpId
      ? `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${editingExpId}`
      : `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;

    const method = editingExpId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const savedExp = await response.json();

        if (editingExpId) {
          setExperiences((prev) =>
            prev.map((exp) => (exp._id === editingExpId ? savedExp : exp))
          );
        } else {
          setExperiences([...experiences, savedExp]);
        }

        setNewExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
        setEditingExpId(null);
      } else {
        console.error("Errore nel salvataggio/modifica dell'esperienza");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "Presente";
    const options = { year: "numeric", month: "short" };
    return new Date(dateStr).toLocaleDateString("it-IT", options);
  };

  const handleDelete = async (expId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: apiKey,
          },
        }
      );

      if (response.ok) {
        setExperiences(experiences.filter((exp) => exp._id !== expId));
      } else {
        console.error("Errore durante l'eliminazione dell'esperienza");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  const handleEdit = async (expId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setNewExperience({
          role: data.role,
          company: data.company,
          startDate: data.startDate?.split("T")[0],
          endDate: data.endDate?.split("T")[0] || "",
          description: data.description,
          area: data.area,
        });
        setEditingExpId(expId);
      }
    } catch (error) {
      console.error(
        "Errore durante il recupero dell'esperienza da modificare:",
        error
      );
    }
  };

  return (
    <Container className='border rounded-3 m-3 p-3'>
      <Row className='mb-3'>
        <Col>
          <h4>Esperienze esistenti</h4>
        </Col>
      </Row>

      {experiences.map((exp) => (
        <Row className='align-items-top mb-3' key={exp._id}>
          <Col xs={1}>
            <img
              src={
                exp.image ||
                "https://firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"
              }
              alt={`Logo ${exp.company}`}
              height={50}
              className='p-0 m-0'
            />
          </Col>
          <Col>
            <p className='p-0 m-0 fw-bold' style={{ fontSize: "0.9em" }}>
              {exp.role}
            </p>
            <p className='p-0 m-0' style={{ fontSize: "0.8em" }}>
              {exp.company}
            </p>
            <p className='p-0 m-0 text-secondary' style={{ fontSize: "0.8em" }}>
              {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
            </p>
            <p className='p-0 m-0 text-secondary' style={{ fontSize: "0.8em" }}>
              {exp.area}
            </p>
            <br />
            <p className='p-0 m-0' style={{ fontSize: "0.8em" }}>
              {exp.description}
            </p>
            <button
              className='btn btn-warning btn-sm mt-2 me-2'
              onClick={() => handleEdit(exp._id)}
            >
              Modifica
            </button>
            <button
              className='btn btn-danger btn-sm mt-2'
              onClick={() => handleDelete(exp._id)}
            >
              Elimina
            </button>
          </Col>
        </Row>
      ))}

      <Row className='mb-4'>
        <Col>
          <h4>
            {editingExpId ? "Modifica Esperienza" : "Aggiungi Esperienza"}
          </h4>
          <ExpForm
            experience={newExperience}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          {editingExpId && (
            <button
              className='btn btn-secondary btn-sm mt-2'
              onClick={() => {
                setEditingExpId(null);
                setNewExperience({
                  role: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                  area: "",
                });
              }}
            >
              Annulla modifica
            </button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Experiences;
