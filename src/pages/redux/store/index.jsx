import { createStore } from "redux";
import reducer from "../reducer/index";
// import { composeWithDevTools } from "redux-devtools-extension";
export default () => createStore(reducer);
