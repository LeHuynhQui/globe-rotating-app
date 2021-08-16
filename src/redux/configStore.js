import { combineReducers, createStore } from "redux";
import { GlobeReducer } from "./reducers/GlobeReducer"
const rootReducer = combineReducers({
    GlobeReducer
});

const store = createStore(rootReducer)

export default store;