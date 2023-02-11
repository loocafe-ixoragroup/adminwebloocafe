import { configureStore } from "@reduxjs/toolkit";
import LoocafeSlice from "../features/LoocafeSlice";
import SupervisorReducer from "../features/SupervisorSlice";
import TrackRentalSlice from "../features/TrackRentalSlice";
import UserSlice from "../features/UserSlice";

const store = configureStore({
  reducer: {
    supervisor: SupervisorReducer,
    trackrental: TrackRentalSlice,
    users: UserSlice,
    loocafe: LoocafeSlice,
  },
});

export default store;
