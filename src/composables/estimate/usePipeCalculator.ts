import { computed } from 'vue';
import type { Pipe } from '../types';

// 呼び径（サイズ）→インチ変換テーブル例（必要に応じて拡張してください）
const nominalSizeMap: Record<string, number> = {
  '6A': 0.25,
  '8A': 0.25,
  '10A': 0.375,
  '15A': 0.5,
  '20A': 0.75,
  '25A': 1,
  '32A': 1.25,
  '40A': 1.5,
  '50A': 2,
  '65A': 2.5,
  '80A': 3,
  '100A': 4,
  '125A': 5,
  '150A': 6,
  '200A': 8,
  '250A': 10,
  '300A': 12,
  '350A': 14,
  '400A': 16,
  '450A': 18,
  '500A': 20,
  '550A': 22,
  '600A': 24,
  '650A': 26,

};

export function usePipeCalculator(
  length: number,
  material: string,
  size: string,
  schedule: string,
  pipes: Pipe[],
  type?: string
) {
  // 対象のパイプデータ検索
  const pipe = computed(() =>
    pipes.find(p =>
      p.material === material &&
      p.size === size &&
      p.schedule === schedule &&
      (!type || p.type === type)
    )
  );

  // 実重量（重量/メートル × 長さ[m]）
  const actualWeight = computed(() => (pipe.value?.weightPerMeter || 0) * length);

  // 見積重量（今回は実重量と同じ）
  const estimatedWeight = computed(() => actualWeight.value);

  // 呼び径インチを取得（存在しなければ0）
  const nominalInch = nominalSizeMap[size] || 0;

  // インチメーター計算（呼び径インチ × 長さ[m]）
  const pipeLength = computed(() => nominalInch * length);

  return { actualWeight, estimatedWeight, pipeLength };
}
