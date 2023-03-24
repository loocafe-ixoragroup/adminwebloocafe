import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const cookies = new Cookies();

//ACTIONS

export const getKycData = createAsyncThunk("kyc/getKycData", (id) => {
  return axios({
    method: "get",
    url: `${BASE_URL}/loocafe/get-kyc-details/${id}`,
    headers: { Authorization: `Bearer ${cookies.get("token")}` },
  }).then((res) => res.data);
});

const initialState = {
  tenant: [],
  partner: [],
  rental: [],
  unit: [],
  isloading: false,
  error: "",
};

const KycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getKycData.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getKycData.fulfilled, (state, action) => {
      state.isloading = false;
      state.tenant = action.payload.tenant[0];
      state.rental = action.payload.rental;
      state.partner = action.payload.partner;
      state.unit = action.payload.loocafe;
      state.error = "";
    });
    builder.addCase(getKycData.rejected, (state, action) => {
      state.isloading = false;
      state.tenant = [];
      state.rental = [];
      state.partner = [];
      state.unit = [];
      state.error = action.error.message;
    });
  },
});

export default KycSlice.reducer;
