import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./user/userReducer";

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {
        name: "",
        email: "",
        profilePic: "",
      },
};

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
