import { createStore } from "redux";
import rootReducer from "./reducers";

// File chính để gọi các action thay đổi

const store = createStore(rootReducer);
export default store;