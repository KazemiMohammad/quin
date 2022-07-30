import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "./reducer";

const Store = configureStore({ reducer: MainReducer });

export default Store;
