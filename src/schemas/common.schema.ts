import { z } from "zod";

export const zPublicKey = z.string().min(32); // simple base58 length guard
export const zISODate = z.string().min(10);

export const zApiError = z.object({
  code: z.string(),
  message: z.string(),
});

export const zApiOk = <T extends z.ZodTypeAny>(data: T) =>
  z.object({ success: z.literal(true), data });

export const zApiErr = z.object({
  success: z.literal(false),
  error: zApiError,
});

export const zApiResponse = <T extends z.ZodTypeAny>(data: T) =>
  z.union([zApiOk(data), zApiErr]);
