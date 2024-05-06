// src/store/accountSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  value: string | null;
}

const initialState: UserState = {
  value: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    resetUser: (state) => {
      state.value = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
