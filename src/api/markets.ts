export type MarketItem = {
  symbol: string;      // "SOL", "BTC"
  price: number;       // current price
  change24h: number;   // percentage
  volume: number;      // 24h volume
  updatedAt?: string;  // ISO
};

export type GetMarketsResponse = MarketItem[];
