import * as types from "./actionTypes";
import axios from 'axios';

export function loadNotesSuccess(notes) {
    return { type: types.LOAD_NOTES_SUCCESS, notes };
}

export function createNotesSuccess(notes) {
    return { type: types.CREATE_NOTES_SUCCESS, notes };
}

export function deleteNotesSuccess(notes) {
    return { type: types.DELETE_NOTES_SUCCESS, notes }
}


export const loadNotes = () => async (dispatch) => {
    const { data } = await axios.get('/api/notes');
    dispatch(loadNotesSuccess(data));
}


export const createNotes = ({ title, content, priority, startDate, endDate }) => async (dispatch) => {
    const { data } = await axios.post('/api/notes/create', {
        title,
        content,
        priority,
        startDate,
        endDate
    });
    dispatch(createNotesSuccess(data));
}

export const deleteNotes = (id) => async (dispatch) => {
    const { data } = await axios.delete(`/api/notes/${id}`);
    dispatch(deleteNotesSuccess(data))
}




