import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "https://loocafe.herokuapp.com/api";
const cookies = new Cookies();

//ACTIONS
export const trackRental = createAsyncThunk("trackrental/trackRental", () => {
  return axios({
    method: "post",
    // data: { state, city },
    url: `${BASE_URL}/rental/track-rental`,
    headers: { Authorization: `Bearer ${cookies.get("token")}` },
  }).then((res) => res.data);
});

const initialState = {
  rentals: [],
  isloading: false,
  error: "",
};

const TrackRentalSlice = createSlice({
  name: "trackrental",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(trackRental.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(trackRental.fulfilled, (state, action) => {
      state.isloading = false;
      state.supervisors = action.payload;
      state.error = "";
    });
    builder.addCase(trackRental.rejected, (state, action) => {
      state.isloading = false;
      state.supervisors = [];
      state.error = action.error.message;
    });
  },
});

export default TrackRentalSlice.reducer;
