import { Form, Button, Row, Col } from "react-bootstrap";

function ExpForm({ experience, onChange, onSubmit, onCancel, isEditing }) {
  return (
    <Form onSubmit={onSubmit} className='mb-4'>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-2'>
            <Form.Label>Ruolo</Form.Label>
            <Form.Control
              name='role'
              value={experience.role}
              onChange={onChange}
              placeholder='Ruolo'
            />
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label>Azienda</Form.Label>
            <Form.Control
              name='company'
              value={experience.company}
              onChange={onChange}
              placeholder='Azienda'
            />
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label>Inizio</Form.Label>
            <Form.Control
              type='date'
              name='startDate'
              value={experience.startDate}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label>Fine</Form.Label>
            <Form.Control
              type='date'
              name='endDate'
              value={experience.endDate}
              onChange={onChange}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className='mb-2'>
            <Form.Label>Luogo</Form.Label>
            <Form.Control
              name='area'
              value={experience.area}
              onChange={onChange}
              placeholder='Location'
            />
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='description'
              value={experience.description}
              onChange={onChange}
              placeholder='Descrizione'
            />
          </Form.Group>
        </Col>
      </Row>

      <Button type='submit' variant='primary'>
        {isEditing ? "Salva Modifiche" : "Aggiungi"}
      </Button>
      {isEditing && (
        <Button variant='secondary' className='ms-2' onClick={onCancel}>
          Annulla
        </Button>
      )}
    </Form>
  );
}

export default ExpForm;
