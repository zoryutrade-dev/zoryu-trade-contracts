import { z } from "zod";
import { zISODate } from "./common.schema.js";

export const zMarketItem = z.object({
  symbol: z.string().min(1),
  price: z.number().finite(),
  change24h: z.number().finite(),
  volume: z.number().finite(),
  updatedAt: zISODate.optional(),
});

export const zGetMarketsResponse = z.array(zMarketItem);
