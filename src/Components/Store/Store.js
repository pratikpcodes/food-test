import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";

const persistConf={
  key: "root",
  version: 1,
  storage

};
const reducer = combineReducers({
  cart: cartSlice,
  user: userSlice,


})
const persistedReducer= persistReducer(persistConf,reducer);

const store = configureStore({
  reducer: persistedReducer
});

export default store;
