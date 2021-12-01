import { React, useEffect } from "react";
import SingleActivity from "./SingleActivity";
import CreateActivity from "./CreateActivity";
import { useDispatch, useSelector } from 'react-redux'
import { loadNotes } from "../redux/actions/notesActions";

const WipActivity = () => {
    const dispatch = useDispatch();
    const noteList = useSelector(state => state.notes);
    const notes = noteList;

    useEffect(() => {
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
            <div className="row">
                <div className="col-md-6">Attività</div>
                <div className="col-md-2">Priorità</div>
                <div className="col-md-2">Data di apertura</div>
                <div className="col-md-2">Data di scadenza</div>
            </div>

            {

                notes?.reverse().map((note, id) => (
                    <SingleActivity key={id} note={note}></SingleActivity>
                ))
            }
        </div>
    );

}

export default WipActivity;