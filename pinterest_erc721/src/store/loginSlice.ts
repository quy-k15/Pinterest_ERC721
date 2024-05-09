import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isOpen: boolean;
}

const initialState: LoginState = {
  isOpen: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleLogin } = loginSlice.actions;

export default loginSlice.reducer;
