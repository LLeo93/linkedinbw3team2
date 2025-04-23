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

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const newExp = await response.json();
        setExperiences([...experiences, newExp]);
        setNewExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      } else {
        console.error("Errore nel salvataggio dell'esperienza");
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
              src={exp.image || "https://via.placeholder.com/50"}
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
          </Col>
        </Row>
      ))}
      <Row className='mb-4'>
        <Col>
          <h4>Aggiungi Esperienza</h4>
          <ExpForm
            experience={newExperience}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Experiences;
