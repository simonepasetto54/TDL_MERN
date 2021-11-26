import { React, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export function CreateActivity() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Nuova nota
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Nuova nota</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Row >
              <Form.Group className="mb-3" controlId="formGridActivity">
                <Form.Label>Attività</Form.Label>
                <Form.Control placeholder="Inserisci qui una breve descrizione della tua nota" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridState">
                <Form.Label>Priorità</Form.Label>
                <Form.Select defaultValue="Selezionare una priorità">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridState">
                <Form.Label>Data di apertura</Form.Label>
                <Form.Control type="date" name='creationDate' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridState">
                <Form.Label>Data di scadenza</Form.Label>
                <Form.Control type="date" name='expiringDate' />
              </Form.Group>

            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">
              Chiudi
            </Button>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateActivity