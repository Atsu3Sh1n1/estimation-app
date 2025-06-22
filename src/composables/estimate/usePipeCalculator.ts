import { pipeSizes, materialDensities, fittingFactors } from '@/data/materials';
import type { EstimateRow } from '@/types/estimate';

/**
 * パイプの重量を計算（JIS対応）
 */
export function getPipeWeight(row: EstimateRow): number {
  const spec = pipeSizes[row.jis]?.[row.size]?.[row.schedule];
  const density = materialDensities[row.material];
  if (!spec || !density) return 0;

  const id = spec.od - 2 * spec.t;
  const area = Math.PI * (spec.od ** 2 - id ** 2) / 4;
  const volume = area / 1e6 * row.length; // mm² → m² × 長さ
  return volume * density;
}

/**
 * 継手の重量を計算（JIS対応・係数使用）
 */
export function getFittingWeight(row: EstimateRow): number {
  const spec = pipeSizes[row.jis]?.[row.size]?.[row.schedule];
  const density = materialDensities[row.material];
  const factor = fittingFactors[row.shape] ?? 0.2;
  if (!spec || !density) return 0;

  const id = spec.od - 2 * spec.t;
  const area = Math.PI * (spec.od ** 2 - id ** 2) / 4;
  const volume = area / 1e6 * factor; // m³ 換算体積
  return volume * density * row.quantity;
}
