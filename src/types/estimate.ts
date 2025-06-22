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
