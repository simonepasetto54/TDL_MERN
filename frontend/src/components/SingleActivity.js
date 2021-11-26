import React from "react";
import Card from 'react-bootstrap/Card';
import '../css/_card.css';
import Accordion from 'react-bootstrap/Accordion';
import { CustomToggle } from "./shared/CustomToggle";
import Badge from 'react-bootstrap/Badge'

const SingleActivity = ({ note }) => {

    return (
        <Accordion style={{ marginBottom: '10px' }}>
            <Card>
                <Card.Header>
                    <div className="row">
                        <div className="col-md-6">
                            <CustomToggle eventKey={note._id}>{note.title}</CustomToggle>

                        </div>
                        <div className="col-md-2">  {/*this is an else if ternary operator */}
                            <Badge pill bg={
                                note.priority === 'High' ? 'danger'
                                    :
                                    note.priority === 'Medium' ? 'warning'
                                        : 'info'
                            }>{note.priority}</Badge>
                        </div>
                        <div className="col-md-2">
                            {note.creationDate}
                        </div>
                        <div className="col-md-2">
                            {note.expiringDate}
                        </div>
                    </div>
                </Card.Header>
                <Accordion.Collapse eventKey={note._id}>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {note.content}
                            </p>
                        </blockquote>
                    </Card.Body>
                </Accordion.Collapse>

            </Card>
        </Accordion>


    )

};

export default SingleActivity;