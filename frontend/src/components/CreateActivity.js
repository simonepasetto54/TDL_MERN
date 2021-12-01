import { React, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { useDispatch } from 'react-redux'
import { createNotes } from "../redux/actions/notesActions";

export function CreateActivity() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("High");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !priority || !startDate || !endDate) return;
    dispatch(createNotes(title, content, priority, startDate, endDate));
    handleClose();


  }


  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Nuova nota
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={submitHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Nuova nota</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Row >
              <Form.Group className="mb-3" controlId="Title">
                <Form.Label>Titolo</Form.Label>
                <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Inserisci il titolo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Content">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control value={content} onChange={(e) => setContent(e.target.value)} placeholder="Inserisci qui una breve descrizione della tua nota" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Priority">
                <Form.Label>Priorità</Form.Label>
                <Form.Select defaultValue={priority} onChange={(e) => setPriority(e.target.value)} >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Startdate">
                <Form.Label>Data di apertura</Form.Label>
                <Form.Control value={startDate} onChange={(e) => setStartdate(e.target.value)} type="date" name='creationDate' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Enddate">
                <Form.Label>Data di scadenza</Form.Label>
                <Form.Control value={endDate} onChange={(e) => setEnddate(e.target.value)} type="date" name='expiringDate' />
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