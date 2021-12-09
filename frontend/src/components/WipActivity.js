import { React, useEffect } from "react";
import SingleActivity from "./SingleActivity";
import CreateActivity from "./CreateActivity";
import { useDispatch, useSelector } from 'react-redux';
import { loadNotes } from "../redux/actions/notesActions";
import Table from 'react-bootstrap/Table';


const WipActivity = () => {
    const dispatch = useDispatch();
    const noteList = useSelector(state => state.notes);
    const notes = noteList;

    useEffect(() => {
        console.log('wip activity caricato')
        dispatch(loadNotes())
    }, [dispatch]);

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
            <Table className="text-white" responsive>
                <thead>
                    <tr>
                        <th>Attività</th>
                        <th>Priorità</th>
                        <th>Data di apertura</th>
                        <th>Data di scadenza</th>
                        <th>Azioni</th>

                    </tr>
                </thead>
                {

                    notes?.reverse().map((note, id) => (
                        <SingleActivity key={id} note={note}></SingleActivity>
                    ))
                }
            </Table>
        </div>
    );

}

export default WipActivity;