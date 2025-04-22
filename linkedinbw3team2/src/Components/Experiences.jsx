import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

function Experiences() {
  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3N2UzZGQ0NTE4MTAwMTVjZTgzZGQiLCJpYXQiOjE3NDUzMjE1MzMsImV4cCI6MTc0NjUzMTEzM30.LTwYloXHYIwB75XWa1MVZmD9zX-NUBQDIp9WSrB1Gmc";

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const profileResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );

        if (!profileResponse.ok)
          throw new Error("Errore nel recupero del profilo");

        const profileData = await profileResponse.json();
        console.log("Dati profilo:", profileData);
      } catch (error) {
        console.error("Errore:", error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h3>Esperienza</h3>
        </Col>
      </Row>
      <Row>
        <Col sx={2} md={2}>
          <img
            src='https://static.vecteezy.com/ti/vettori-gratis/p1/20502973-bentley-marca-logo-simbolo-con-nome-bianca-design-britannico-macchine-automobile-vettore-illustrazione-con-nero-sfondo-gratuito-vettoriale.jpg'
            alt='Logo Bentley'
            height={50}
          />
        </Col>
        <Col>
          <h4>Stagista</h4>
          <p>Bentley Motors Ltd</p>
          <p>lug 2012 - lug 2012 | 1 mese</p>
          <p>Crewe, Regno Unito</p>
          <br />
          <p>
            Modellatore all`interno di un team di lavoro finalizzato alla
            preparazione di un prototipo da esibire al Salone Internazionale
            dell`automobile di Ginevra.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Experiences;
