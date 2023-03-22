import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
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
    }).then((res) => res.data.data);
  }
);

//get supervisor by state and city
export const getSupervisor = createAsyncThunk(
  "supervisor/getSupervisor",
  (id) => {
    return axios({
      method: "get",
      url: `${BASE_URL}/supervisor/get-specific-supervisor/${id}`,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    }).then((res) => res.data.data);
  }
);

const initialState = {
  supervisor: [],
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
      state.supervisor = action.payload;
      state.error = "";
    });
    builder.addCase(getAllSupervisor.rejected, (state, action) => {
      state.isloading = false;
      state.supervisor = [];
      state.error = action.error.message;
    });
    builder.addCase(getSupervisor.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getSupervisor.fulfilled, (state, action) => {
      state.isloading = false;
      state.supervisor = action.payload;
      state.error = "";
    });
    builder.addCase(getSupervisor.rejected, (state, action) => {
      state.isloading = false;
      state.supervisor = [];
      state.error = action.error.message;
    });
  },
});

export default SupervisorSlice.reducer;
