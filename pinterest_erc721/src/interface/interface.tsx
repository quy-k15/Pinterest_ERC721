export interface EthereumError extends Error {
    reason?: string;
    code?: string;
    data?: unknown;  // Try to specify a more detailed type if possible
  }
export interface LoginProps {
    open: boolean;
    handleOpen: () => void;
  }
export interface AbiItem {
    constant?: boolean;
    inputs?: Array<{ name: string; type: string }>;
    name?: string;
    outputs?: Array<{ name: string; type: string }>;
    payable?: boolean;
    stateMutability?: string;
    type: string;
  }