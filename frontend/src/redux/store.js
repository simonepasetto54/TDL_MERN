import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import reducersManager from './reducers';

export default function configureStore(initialState) {
        const composeEnhancers =
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        return createStore(
                reducersManager,
                initialState,
                composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
        )
}
