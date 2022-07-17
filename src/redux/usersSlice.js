import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  users: [],
  totalUsers: 0,
  status: STATUSES.IDLE,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.totalUsers = action.payload.total;
        state.users = action.payload.data;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default usersSlice.reducer;

// Users Thunks
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data;
});
