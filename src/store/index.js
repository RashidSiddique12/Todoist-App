import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slice/projectSlice";
const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;
