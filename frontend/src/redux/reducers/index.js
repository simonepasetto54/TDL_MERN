import { combineReducers } from "redux";
import catalogue from "./catalogueReducer";

const reducersManager = combineReducers({
    catalogue
})

export default reducersManager