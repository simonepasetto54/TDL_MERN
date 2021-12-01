import * as types from "../actions/actionTypes.js";
import initialState from "./initialState";

export default function notesReducer(state = initialState.notes, action) {
    switch (action.type) {
        case types.LOAD_NOTES_SUCCESS:
            return action.notes;
        case types.CREATE_NOTES_SUCCESS:
            return [...state, { ...action.notes }];
        case types.DELETE_NOTES_SUCCESS:
            return action.notes;
        default:
            return state;
    }
}