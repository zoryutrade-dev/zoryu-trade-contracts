import { z } from "zod";
import { zPublicKey, zISODate } from "./common.schema.js";

export const zSwapRequest = z.object({
  inputMint: z.string().min(32),
  outputMint: z.string().min(32),
  amount: z.number().positive(),
  slippage: z.number().min(0).max(50),
  walletAddress: zPublicKey,
});

export const zSwapResponse = z.object({
  txSignature: z.string().min(10),
  inputAmount: z.number().finite(),
  outputAmount: z.number().finite(),
});

export const zTradeHistoryItem = z.object({
  txSignature: z.string().min(10),
  inputToken: z.string().min(1),
  outputToken: z.string().min(1),
  amount: z.number().finite(),
  timestamp: zISODate,
});

export const zGetTradeHistoryResponse = z.array(zTradeHistoryItem);
