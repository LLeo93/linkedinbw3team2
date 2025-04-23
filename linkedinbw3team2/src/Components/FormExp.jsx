import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ExpForm({ experience, onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Ruolo</Form.Label>
        <Form.Control
          name='role'
          value={experience.role}
          onChange={onChange}
          placeholder='Ruolo'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Azienda</Form.Label>
        <Form.Control
          name='company'
          value={experience.company}
          onChange={onChange}
          placeholder='Azienda'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Data Inizio</Form.Label>
        <Form.Control
          name='startDate'
          type='date'
          value={experience.startDate}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Data Fine</Form.Label>
        <Form.Control
          name='endDate'
          type='date'
          value={experience.endDate}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Luogo</Form.Label>
        <Form.Control
          name='area'
          value={experience.area}
          onChange={onChange}
          placeholder='Luogo'
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Descrizione</Form.Label>
        <Form.Control
          name='description'
          value={experience.description}
          onChange={onChange}
          placeholder='Descrizione'
          as='textarea'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Salva
      </Button>
    </Form>
  );
}

export default ExpForm;
