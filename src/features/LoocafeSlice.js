import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "https://loocafe.herokuapp.com/api";
const cookies = new Cookies();

//ACTIONS

//get all loocafes
export const getAllLoocafe = createAsyncThunk("loocafe/getAllLoocafe", () => {
  return axios({
    method: "get",
    url: `${BASE_URL}/loocafe/get-loocafe-details`,
    headers: { Authorization: `Bearer ${cookies.get("token")}` },
  }).then((res) => {
    const arr = Promise.all(
      res.data.data.map(async (r) => {
        const today = new Date();
        const endDate = new Date(r.agreement_end_date);
        const diff = parseInt(
          (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24) + 1
        );
        return { ...r, ...r["days_left"], ["days_left"]: diff };
      })
    );
    return arr;
  });
});

//get all loocafes by functional status
export const getFunctionalLoocafe = createAsyncThunk(
  "loocafe/getFunctionalLoocafe",
  (data) => {
    // console.log(data);
    return axios({
      method: "post",
      url: `${BASE_URL}/loocafe/get-functional-loocafe`,
      data: data,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    }).then((res) => {
      const arr = Promise.all(
        res.data.data.map(async (r) => {
          const today = new Date();
          const endDate = new Date(r.agreement_end_date);
          const diff = parseInt(
            (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24) + 1
          );
          return { ...r, ...r["days_left"], ["days_left"]: diff };
        })
      );
      return arr;
    });
  }
);

export const getLoocafeBySearch = createAsyncThunk(
  "loocafe/getLoocafeBySearch",
  (data) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/loocafe/search-loocafe`,
      data: data,
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    }).then((res) => {
      const arr = Promise.all(
        res.data.data.map(async (r) => {
          const today = new Date();
          const endDate = new Date(r.agreement_end_date);
          const diff = parseInt(
            (endDate.getTime() - today.getTime()) / (1000 * 3600 * 24) + 1
          );
          return { ...r, ...r["days_left"], ["days_left"]: diff };
        })
      );
      return arr;
    });
  }
);

export const getLoocafeBySupervisor = createAsyncThunk(
  "loocafe/getLoocafeBySupervisor",
  (id) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/loocafe/loocafe-from-supervisor`,
      data: { supervisorID: id },
      headers: { Authorization: `Bearer ${cookies.get("token")}` },
    }).then((res) => res.data.data);
  }
);

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
    builder.addCase(getFunctionalLoocafe.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getFunctionalLoocafe.fulfilled, (state, action) => {
      state.isloading = false;
      state.loocafe = action.payload;
      state.error = "";
    });
    builder.addCase(getFunctionalLoocafe.rejected, (state, action) => {
      state.isloading = false;
      state.loocafe = [];
      state.error = action.error.message;
    });
    builder.addCase(getLoocafeBySearch.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getLoocafeBySearch.fulfilled, (state, action) => {
      state.isloading = false;
      state.loocafe = action.payload;
      state.error = "";
    });
    builder.addCase(getLoocafeBySearch.rejected, (state, action) => {
      state.isloading = false;
      state.loocafe = [];
      state.error = action.error.message;
    });
    builder.addCase(getLoocafeBySupervisor.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getLoocafeBySupervisor.fulfilled, (state, action) => {
      state.isloading = false;
      state.loocafe = action.payload;
      state.error = "";
    });
    builder.addCase(getLoocafeBySupervisor.rejected, (state, action) => {
      state.isloading = false;
      state.loocafe = [];
      state.error = action.error.message;
    });
  },
});

export default LoocafeSlice.reducer;
