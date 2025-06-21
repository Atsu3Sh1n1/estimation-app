import { computed } from 'vue';
import type { Fitting, Valve } from '../types';

// 呼び径（A）→ インチ変換表
const nominalSizeMap: Record<string, number> = {
  '6A': 0.25, '8A': 0.25, '10A': 0.375, '15A': 0.5, '20A': 0.75, '25A': 1,
  '32A': 1.25, '40A': 1.5, '50A': 2, '65A': 2.5, '80A': 3, '90A': 3.5,
  '100A': 4, '125A': 5, '150A': 6, '175A': 7, '200A': 8, '225A': 9,
  '250A': 10, '300A': 12, '350A': 14, '400A': 16, '450A': 18, '500A': 20,
  '550A': 22, '600A': 24, '650A': 26, '700A': 28, '750A': 30, '800A': 32,
  '850A': 34, '900A': 36, '1000A': 40,
};

export function useFittingCalculator(
  length: number,                     // 入力数量（mまたは個数）
  material: string,
  size: string,
  type: string,
  schedule: string = '',
  items: (Fitting | Valve)[]
) {
  const item = computed(() =>
    items.find(i =>
      i.material === material &&
      i.size === size &&
      i.type === type &&
      (schedule ? i.schedule === schedule : true)
    )
  );

  // サイズ分解・インチ換算
  const sizeParts = size.split('*').map(s => s.trim());
  const nominalInches = sizeParts.map(s => nominalSizeMap[s] || 0);

  const lengthCoef = computed(() => item.value?.lengthCoefficient ?? 1);
  const pipeUnitWeight = computed(() => item.value?.pipeUnitWeight ?? 0);

  // パイプ長さの換算（参考用）
  const pipeLength = computed(() =>
    nominalInches.reduce((acc, inch) => acc + inch * lengthCoef.value, 0) * length
  );

  // 実重量（1個あたり） × 個数
  const actualWeight = computed(() =>
    (item.value?.weight ?? 0) * length
  );

  // パイプ重量相当（参考用）
  const estimatedWeight = computed(() =>
    pipeLength.value * pipeUnitWeight.value
  );

  // 🔧 溶接ポイント：サイズに応じた基準値 × 種類ごとの係数 × 数量
  const weldingPoints = computed(() => {
    const base = nominalInches.reduce((sum, inch) => sum + inch, 0);
    const upper = type.toUpperCase();

    const multiplier =
      upper.includes('TEE') ? 1 :
      upper.includes('45°') ? 1 :
      upper.includes('ELBOW') ? 1 :
      upper.includes('REDUCER') ? 1 :
      upper.includes('FLANGE') ? 1 :
      1;

    return Math.round(base * multiplier * length); // 🔧 数量分かける
  });

  return {
    actualWeight,
    estimatedWeight,
    pipeLength,
    weldingPoints
  };
}
