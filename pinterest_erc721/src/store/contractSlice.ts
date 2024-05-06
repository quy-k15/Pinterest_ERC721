// src/store/contractSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContractInfo {
  address: string;
  tokenName: string;
  tokenSymbol: string;
}

interface ContractState {
  info: ContractInfo | null;
}

const initialState: ContractState = {
  info: null,
};

export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setContractInfo: (state, action: PayloadAction<ContractInfo | null>) => {
      state.info = action.payload;
    },
    resetContractInfo: (state) => {
      state.info = null;
    },
  },
});

export const { setContractInfo, resetContractInfo } = contractSlice.actions;
export default contractSlice.reducer;
