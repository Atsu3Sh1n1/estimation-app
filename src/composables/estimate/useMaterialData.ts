// src/composables/estimate/useMaterialData.ts

import { materialDensities } from '@/data/materials';

const SS400_DENSITY = materialDensities['SS400'] ?? 7.85;

export function convertSS400WeightToMaterial(weightSS400: number, material: string): number {
  const targetDensity = materialDensities[material];
  if (!targetDensity) return weightSS400; // 比重不明ならそのまま
  return weightSS400 * (targetDensity / SS400_DENSITY);
}
