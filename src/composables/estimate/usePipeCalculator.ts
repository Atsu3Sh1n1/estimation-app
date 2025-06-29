// src/composables/estimate/usePipeCalculator.ts

import { pipeSizes, materialDensities } from '@/data/materials';
import type { EstimateRow } from '@/types/estimate';
import { fittingFactors } from '@/composables/estimate/useFittingCalculator';

/**
 * サイズから呼び径（インチ）をマッピング
 */
const sizeToNominalInch: Record<string, number> = {
  '6A': 0.25, '8A': 0.25, '10A': 0.375, '15A': 0.5, '20A': 0.75, '25A': 1,
  '32A': 1.25, '40A': 1.5, '50A': 2, '65A': 2.5, '80A': 3, '90A': 3.5,
  '100A': 4, '125A': 5, '150A': 6, '175A': 7, '200A': 8, '225A': 9,
  '250A': 10, '300A': 12, '350A': 14, '400A': 16, '450A': 18, '500A': 20,
  '550A': 22, '600A': 24, '650A': 26, '700A': 28, '750A': 30, '800A': 32,
  '850A': 34, '900A': 36, '1000A': 40, '1100A': 44, '1200A': 48, '1350A': 54, '1500A': 60,
};

/**
 * 鋼材形状として断面積から計算する対象
 */
const areaBasedShapes = new Set([
  'Flat_Bar', 'Angle', 'ABS_Angle','Channel', 'H_Beam', 'Round_Bar', 'I_Beam',
  'Square_Pipe', 'Square_Bar', 'Plate', 'Light_Channel', 'Lip_Channel','PCF_Channel',
]);

/**
 * パイプや鋼材の重量を計算
 */
export function getPipeWeight(row: EstimateRow): number {
  const specs = pipeSizes[row.jis];
  if (!specs) return 0;

  const spec = specs[row.size]?.[row.schedule];
  if (!spec) return 0;

  const density = materialDensities[row.material];
  if (!density) return 0;

  // ✅ 断面積（area）ベースの鋼材
  if (areaBasedShapes.has(row.shape) && 'area' in spec) {
    const volume = spec.area * row.length; // mm^2 × m = mm^3
    return (volume * density) / 1e4;        // g/cm^3 → kg
  }

  // ✅ 通常パイプ（外径・厚み指定）
  const id = spec.od - 2 * spec.t;
  const area = Math.PI * (spec.od ** 2 - id ** 2) / 4;
  const volume = area / 1e6 * row.length; // mm^2 → m^2, then × m = m^3
  return volume * density;
}

/**
 * 継手の重量を計算（サイズ別係数対応・異径TEE対応）
 */
export function getFittingWeight(row: EstimateRow): number {
  const specs = pipeSizes[row.jis];
  if (!specs) return 0;

  const spec = specs[row.size]?.[row.schedule];
  if (!spec) return 0;

  const density = materialDensities[row.material];
  if (!density) return 0;

  const id = spec.od - 2 * spec.t;
  const area = Math.PI * (spec.od ** 2 - id ** 2) / 4;
  const pipeWeightPerMeter = area / 1e6 * density;

  const sizes = row.size.split('*').map(s => s.trim());
  const baseSize = sizes[0];

  const specificKeyWithK = `${row.shape}_${baseSize}_${row.schedule}`;
  const specificKey = `${row.shape}_${baseSize}`;
  const genericKey = row.shape;

  const factor =
    fittingFactors[specificKeyWithK] ??
    fittingFactors[specificKey] ??
    fittingFactors[genericKey] ??
    0.2;

  const nominalInchTotal = sizes
    .map(s => sizeToNominalInch[s] ?? 1)
    .reduce((sum, inch) => sum + inch, 0);

  return pipeWeightPerMeter * factor * nominalInchTotal * row.quantity;
}
