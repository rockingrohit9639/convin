import { combineReducers, configureStore } from "@reduxjs/toolkit";

import usersReducer from "./usersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
