// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import userReducer from "./UserSlice";
import contractReducer from "./contractSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    contract: contractReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
