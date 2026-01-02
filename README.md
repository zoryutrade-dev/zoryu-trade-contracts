# Zoryu Trade Contracts

> Public API contracts and shared types for Zoryu Trade.

This repository contains the **type contracts** used across Zoryu Trade services:
- API request/response shapes
- signal & position schemas
- shared enums and constants

This repo is intentionally public to improve:
- interoperability
- transparency
- client SDK development
- integration stability

## What this repo is
- Shared TypeScript types
- JSON-friendly schemas
- Versioned contracts used by `web`, `api`, `sdk`

## What this repo is NOT
- No business logic
- No execution code
- No infrastructure
## Usage

```ts
import type { ApiResponse, GetMarketsResponse } from "@zoryu/trade-contracts";

type MarketsApi = ApiResponse<GetMarketsResponse>;
```
## Versioning Policy

This repo follows semantic versioning:

- **PATCH**: non-breaking fixes (docs, stricter validation that still accepts valid payloads)
- **MINOR**: backward-compatible additions (new fields optional, new endpoints types)
- **MAJOR**: breaking changes (renamed fields, removed fields, required field changes)

Breaking changes must be documented in `CHANGELOG.md`.
