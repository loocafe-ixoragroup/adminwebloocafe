import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "https://loocafe.herokuapp.com/api";
const cookies = new Cookies();

//ACTIONS

//get all supervisors
export const getAllLoocafe = createAsyncThunk("loocafe/getAllLoocafe", () => {
  return axios({
    method: "get",
    url: `${BASE_URL}/loocafe/get-all-loocafes`,
    headers: { Authorization: `Bearer ${cookies.get("token")}` },
  }).then((res) => res.data.data);
});

const initialState = {
  loocafe: [],
  isloading: false,
  error: "",
};

const LoocafeSlice = createSlice({
  name: "loocafe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllLoocafe.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getAllLoocafe.fulfilled, (state, action) => {
      state.isloading = false;
      state.loocafe = action.payload;
      state.error = "";
    });
    builder.addCase(getAllLoocafe.rejected, (state, action) => {
      state.isloading = false;
      state.loocafe = [];
      state.error = action.error.message;
    });
  },
});

export default LoocafeSlice.reducer;
