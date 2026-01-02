import { z } from "zod";

export const zWalletBalanceResponse = z.object({
  sol: z.number().finite(),
  usdc: z.number().finite(),
});
