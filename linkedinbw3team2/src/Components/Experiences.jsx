import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

function Experiences() {
  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3N2UzZGQ0NTE4MTAwMTVjZTgzZGQiLCJpYXQiOjE3NDUzMjE1MzMsImV4cCI6MTc0NjUzMTEzM30.LTwYloXHYIwB75XWa1MVZmD9zX-NUBQDIp9WSrB1Gmc";

  const userId = "68077e3dd451810015ce83dd";

  useEffect(() => {
    const checkAndAddExperience = async () => {
      try {
        const checkResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );

        if (!checkResponse.ok)
          throw new Error("Errore nel recupero delle esperienze");

        const expData = await checkResponse.json();
        console.log("Esperienze trovate:", expData);

        if (expData.length === 0) {
          const newExperience = {
            role: "Freelance Artist",
            company: "Freelance",
            startDate: "2023-01-01",
            endDate: "2024-12-31",
            description: "Artista freelance, fumettista e illustratrice",
            area: "Milano",
          };

          const postResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: apiKey,
              },
              body: JSON.stringify(newExperience),
            }
          );

          if (postResponse.ok) {
            console.log("Esperienza aggiunta con successo!");
          } else {
            console.error("Errore nell'aggiunta:", await postResponse.text());
          }
        } else {
          console.log("Esperienza già presente, nessuna aggiunta.");
        }
      } catch (err) {
        console.error("Errore:", err);
      }
    };

    checkAndAddExperience();
  }, []);

  return (
    <Container className='border rounded-3 m-3 p-3'>
      <Row className='mb-3'>
        <Col>
          <h3 className=''>Esperienza</h3>
        </Col>
      </Row>

      <Row className='align-items-top'>
        <Col xs={1} md={1}>
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
            Modellatore all’interno di un team di lavoro finalizzato alla
            preparazione di un prototipo da esibire al Salone Internazionale
            dell’automobile di Ginevra.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Experiences;
