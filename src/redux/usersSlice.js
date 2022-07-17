import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  users: [],
  totalUsers: 0,
  status: STATUSES.IDLE,
  currentUser: null,
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

    builder
      .addCase(fetchUserInfo.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default usersSlice.reducer;

// Users Thunks //

/** Fetch All Users **/
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data;
});

/** Fetch particular user's info **/
export const fetchUserInfo = createAsyncThunk(
  "users/fetchUserInfo",
  async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();

    return data.data;
  }
);
