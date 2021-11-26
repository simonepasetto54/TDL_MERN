import * as types from "../actions/actionTypes.js";
import initialState from "./initialState";

export default function productReducer(state = initialState.catalogue, action) {
    switch (action.type) {
        case types.LOAD_CATALOGUE_SUCCESS:
            return action.catalogue;
        default:
            return state;
    }
}