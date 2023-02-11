import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "https://loocafe.herokuapp.com/api";
const cookies = new Cookies();
//ACTIONS

//get all supervisors
export const getAllSupervisor = createAsyncThunk(
  "supervisor/getAllSupervisor",
  () => {
    return axios({
      method: "get",
      url: `${BASE_URL}/supervisor/get-all-supervisors`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    }).then((res) => res.data);
  }
);

//get supervisor by state and city
export const getSupervisor = createAsyncThunk(
  "supervisor/getSupervisor",
  ({ state, city }) => {
    return axios({
      method: "post",
      data: { state, city },
      url: `${BASE_URL}/supervisor/get-supervisor`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    }).then((res) => res.data);
  }
);

const initialState = {
  supervisors: [],
  isloading: false,
  error: "",
};

const SupervisorSlice = createSlice({
  name: "supervisor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSupervisor.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getAllSupervisor.fulfilled, (state, action) => {
      state.isloading = false;
      state.supervisors = action.payload;
      state.error = "";
    });
    builder.addCase(getAllSupervisor.rejected, (state, action) => {
      state.isloading = false;
      state.supervisors = [];
      state.error = action.error.message;
    });
    builder.addCase(getSupervisor.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getSupervisor.fulfilled, (state, action) => {
      state.isloading = false;
      state.supervisors = action.payload;
      state.error = "";
    });
    builder.addCase(getSupervisor.rejected, (state, action) => {
      state.isloading = false;
      state.supervisors = [];
      state.error = action.error.message;
    });
  },
});

export default SupervisorSlice.reducer;
