import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/_card.css';
import Accordion from 'react-bootstrap/Accordion';
import { CustomToggle } from "./shared/CustomToggle";
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux'
import { deleteNotes } from "../redux/actions/notesActions";




const SingleActivity = ({ note }) => {

    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteNotes(id));
    }

    return (

        <tbody>
            <tr>
                <td>
                    <Accordion>
                        <CustomToggle eventKey={note._id}>{note.title}</CustomToggle>
                        <Accordion.Collapse eventKey={note._id}>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {note.content}
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </td>
                <td>
                    <Badge pill bg={
                        note.priority === 'High' ? 'danger'
                            :
                            note.priority === 'Medium' ? 'warning'
                                : 'info'
                    }>{note.priority}
                    </Badge>
                </td>
                <td>{note.startDate}</td>
                <td>{note.endDate}</td>
                <td><i class="bi bi-check-circle" onClick={() => deleteHandler(note._id)}></i></td>
            </tr >
        </tbody >
    )

};

export default SingleActivity;