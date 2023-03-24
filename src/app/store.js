import { configureStore } from "@reduxjs/toolkit";
import KycSlice from "../features/KycSlice";
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
    kyc: KycSlice,
  },
});

export default store;
