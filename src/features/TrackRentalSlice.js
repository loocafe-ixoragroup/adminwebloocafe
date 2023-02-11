import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "https://loocafe.herokuapp.com/api";
const cookies = new Cookies();

//ACTIONS
export const trackRental = createAsyncThunk(
  "trackrental/trackRental",
  ({ state, city, from, to }) => {
    return axios({
      method: "post",
      data: { state, city, from_date: from, to_date: to },
      url: `${BASE_URL}/rental/track-rental`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    }).then((res) => res.data.data);
  }
);

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
      state.rentals = action.payload;
      state.error = "";
    });
    builder.addCase(trackRental.rejected, (state, action) => {
      state.isloading = false;
      state.rentals = [];
      state.error = action.error.message;
    });
  },
});

export default TrackRentalSlice.reducer;
