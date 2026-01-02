export type TradeDirection = "long" | "short";

export type SignalPayload = {
  signalId: string;
  symbol: string;
  direction: TradeDirection;

  entry: number;
  tp: [number, number, number];
  stopLoss: number;

  confidence: number; // 0..100
  riskReward: number; // > 0
  reasoning?: string;

  createdAt?: string; // ISO
};

export type GetSignalsResponse = SignalPayload[];

export type PositionStatus =
  | "open"
  | "closed_tp1"
  | "closed_tp2"
  | "closed_tp3"
  | "closed_sl"
  | "closed_manual";

export type TrackedPosition = {
  positionId: string;
  signalId: string;

  symbol: string;
  direction: TradeDirection;

  entryPrice: number;
  currentPrice: number;

  tp1: number;
  tp2: number;
  tp3: number;
  stopLoss: number;

  confidence: number;
  status: PositionStatus;

  pnlPercent: number;

  openedAt: string; // ISO
  closedAt?: string; // ISO
  closeReason?: string;
};

export type GetPositionsResponse = TrackedPosition[];

export type PositionStatsResponse = {
  total: number;
  wins: number;
  losses: number;
  pending: number;
  winRate: number;
  totalPnl: number;
};
