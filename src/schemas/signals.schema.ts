import { z } from "zod";
import { zISODate } from "./common.schema.js";

export const zTradeDirection = z.union([z.literal("long"), z.literal("short")]);

export const zSignalPayload = z.object({
  signalId: z.string().min(1),
  symbol: z.string().min(1),
  direction: zTradeDirection,

  entry: z.number().finite(),
  tp: z.tuple([z.number().finite(), z.number().finite(), z.number().finite()]),
  stopLoss: z.number().finite(),

  confidence: z.number().min(0).max(100),
  riskReward: z.number().positive(),
  reasoning: z.string().optional(),

  createdAt: zISODate.optional(),
});

export const zGetSignalsResponse = z.array(zSignalPayload);

export const zPositionStatus = z.union([
  z.literal("open"),
  z.literal("closed_tp1"),
  z.literal("closed_tp2"),
  z.literal("closed_tp3"),
  z.literal("closed_sl"),
  z.literal("closed_manual"),
]);

export const zTrackedPosition = z.object({
  positionId: z.string().min(1),
  signalId: z.string().min(1),

  symbol: z.string().min(1),
  direction: zTradeDirection,

  entryPrice: z.number().finite(),
  currentPrice: z.number().finite(),

  tp1: z.number().finite(),
  tp2: z.number().finite(),
  tp3: z.number().finite(),
  stopLoss: z.number().finite(),

  confidence: z.number().min(0).max(100),
  status: zPositionStatus,

  pnlPercent: z.number().finite(),

  openedAt: zISODate,
  closedAt: zISODate.optional(),
  closeReason: z.string().optional(),
});

export const zGetPositionsResponse = z.array(zTrackedPosition);

export const zPositionStatsResponse = z.object({
  total: z.number().int().nonnegative(),
  wins: z.number().int().nonnegative(),
  losses: z.number().int().nonnegative(),
  pending: z.number().int().nonnegative(),
  winRate: z.number().finite(),
  totalPnl: z.number().finite(),
});
