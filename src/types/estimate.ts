// src/types/materials.ts
import { pipeSizes } from '@/data/materials/pipes';

// JIS名（例: 'JIS G 3459'）
export type JISStandard = keyof typeof pipeSizes;

// サイズ（例: '100A'）
export type PipeSize = keyof (typeof pipeSizes)[JISStandard];

// スケジュール（例: 'Sch10' | 'Sch40'）
export type Schedule = keyof (typeof pipeSizes)[JISStandard][PipeSize];

// 材質（例: 'SUS304' など）
export type Material = keyof typeof import('@/data/materials').materialDensities;

// src/types/estimate.ts
export type EstimateRow = {
  id: number;
  shape: 'pipe' | 'elbow' | 'tee' | 'reducer' | string;
  size: string;
  schedule: string;
  material: string;
  length?: string;
  quantity?: string;
  weight?: number; // ✅ 重量を追加
  index?: number;  // ✅ 行番号を追加（必要であれば）
};
