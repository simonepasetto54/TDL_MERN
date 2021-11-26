import { React, useEffect, useState } from "react";
import axios from 'axios';
import SingleActivity from "./SingleActivity";
import CreateActivity from "./CreateActivity";



const WipActivity = () => {

    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        const { data } = await axios.get('/api/notes');
        setNotes(data)
    }

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-10">
                    <h1 className="">Attività da svolgere</h1>

                </div>
                <div className="col-md-2">
                    <CreateActivity></CreateActivity>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Attività</div>
                <div className="col-md-2">Priorità</div>
                <div className="col-md-2">Data di apertura</div>
                <div className="col-md-2">Data di scadenza</div>
            </div>

            {
                notes.map((note, id) => (
                    <SingleActivity key={id} note={note}></SingleActivity>
                ))
            }
        </div>
    );

}

export default WipActivity;