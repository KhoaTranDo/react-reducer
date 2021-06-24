import hobbyReducer from "./hobby";
import userReducer from "./user";
import { combineReducers } from "redux";

//Root reducer
//Chứa danh sách các action
const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer