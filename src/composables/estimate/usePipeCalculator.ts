import { pipeSizes, materialDensities, fittingFactors } from '@/data/materials';
import type { EstimateRow } from '@/types/estimate';

/**
 * サイズから呼び径（インチ）をマッピング
 */
const sizeToNominalInch: Record<string, number> = {
  '6A': 0.25, '8A': 0.25, '10A': 0.375, '15A': 0.5, '20A': 0.75, '25A': 1,
  '32A': 1.25, '40A': 1.5, '50A': 2, '65A': 2.5, '80A': 3, '90A': 3.5,
  '100A': 4, '125A': 5, '150A': 6, '175A': 7, '200A': 8, '225A': 9,
  '250A': 10, '300A': 12, '350A': 14, '400A': 16, '450A': 18, '500A': 20,
  '550A': 22, '600A': 24, '650A': 26, '700A': 28, '750A': 30, '800A': 32,
  '850A': 34, '900A': 36, '1000A': 40,
  // 必要に応じて追加してください
};

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
 * 継手の重量を計算（JIS対応・係数使用・呼び径も考慮）
 */
export function getFittingWeight(row: EstimateRow): number {
  const spec = pipeSizes[row.jis]?.[row.size]?.[row.schedule];
  const density = materialDensities[row.material];
  const factor = fittingFactors[row.shape] ?? 0.2;
  if (!spec || !density) return 0;

  const id = spec.od - 2 * spec.t;
  const area = Math.PI * (spec.od ** 2 - id ** 2) / 4;

  // パイプ1mあたりの重量
  const pipeWeightPerMeter = area / 1e6 * density; // m³ × 密度 = kg/m

  // 呼び径（インチ）をサイズから取得（デフォルト1インチ）
  const nominalInch = sizeToNominalInch[row.size] ?? 1;

  // 継手の重量 = パイプ1m重量 × factor × 呼び径（インチ） × 数量
  return pipeWeightPerMeter * factor * nominalInch * row.quantity;
}
