export type SwapRequest = {
  inputMint: string;
  outputMint: string;
  amount: number;        // numeric amount (USDC or base units depending app rule)
  slippage: number;      // e.g. 0.5
  walletAddress: string; // base58 pubkey
};

export type SwapResponse = {
  txSignature: string;
  inputAmount: number;
  outputAmount: number;
};

export type TradeHistoryItem = {
  txSignature: string;
  inputToken: string;
  outputToken: string;
  amount: number;
  timestamp: string; // ISO
};

export type GetTradeHistoryResponse = TradeHistoryItem[];
