import { configureStore } from "@reduxjs/toolkit";
import SupervisorReducer from "../features/SupervisorSlice";

const store = configureStore({
  reducer: {
    supervisor: SupervisorReducer,
  },
});

export default store;
