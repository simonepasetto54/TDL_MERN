import { combineReducers } from "redux";
import notes from "./notesReducer";

const reducersManager = combineReducers({
    notes
})

export default reducersManager