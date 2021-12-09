import { React, useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FormControl } from 'react-bootstrap';

import { useDispatch } from 'react-redux'
import { createNotes } from "../redux/actions/notesActions";

export function CreateActivity() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    title: "",
    content: "",
    priority: "High",
    startDate: "",
    endDate: ""
  });
  const [checkForm, setCheckForm] = useState({
    title: "",
    content: "",
    priority: "",
    startDate: "",
    endDate: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault(); //si utilizza preventDefault per evitare che il browser si riaggiorni
    if (!form.title || !form.content || !form.priority || !form.startDate || !form.endDate) {

    };
    dispatch(createNotes(form));
    handleClose();
  }

  useEffect(() => {
    console.log('create activity component caricato')
  }, []);


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
                <Form.Control name="title" isInvalid={checkForm.title} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Inserisci il titolo" />
                <FormControl.Feedback type="invalid">
                  <div className="fieldError">Errore</div>
                </FormControl.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Content">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control as="textarea" rows={3} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="Inserisci qui una breve descrizione della tua nota" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Priority">
                <Form.Label>Priorità</Form.Label>
                <Form.Select defaultValue={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Startdate">
                <Form.Label>Data di apertura</Form.Label>
                <Form.Control value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} type="date" name='creationDate' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Enddate">
                <Form.Label>Data di scadenza</Form.Label>
                <Form.Control value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} type="date" name='expiringDate' />
              </Form.Group>


            </Row>
          </Modal.Body>
          <Modal.Footer>
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