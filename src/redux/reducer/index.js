import counterReducer from "./countReducer";
import toogleBtn from "./toggleBtn";

import { combineReducers } from "redux";


 const rootReducer = combineReducers({
    counter: counterReducer,
    toogle: toogleBtn,
})

export default rootReducer