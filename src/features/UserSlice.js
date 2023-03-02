import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const cookies = new Cookies();

//ACTIONS
export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
  const res = await axios({
    method: "get",
    // data: { state, city },
    url: `${BASE_URL}/user/get-all-users`,
    headers: { Authorization: `Bearer ${cookies.get("token")}` },
  });
  return res.data.data.filter((user) => user.role === "user");
});

const initialState = {
  users: [],
  isloading: false,
  error: "",
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUser.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.isloading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(getAllUser.rejected, (state, action) => {
      state.isloading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default UserSlice.reducer;
