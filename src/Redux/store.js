import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import RecentReducer from "./RecentReducer";
import FilmReducer from "./FilmReducer";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const rootReducer = combineReducers({
    RecentReducer,
    FilmReducer,
})


const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(

        ),
    )
);

const store = configureStore({});

export default store;