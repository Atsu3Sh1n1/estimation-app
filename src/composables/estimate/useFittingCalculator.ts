import { computed } from 'vue';
import type { Fitting, Valve } from '../types';

export function useFittingCalculator(
  length: number,
  material: string,
  size: string,
  type: string,
  schedule: string = '',  // scheduleは必須じゃなければデフォルト空文字可
  items: (Fitting | Valve)[]
) {
  const item = computed(() =>
    items.find(i =>
      i.material === material &&
      i.size === size &&
      i.type === type &&
      (
        schedule 
        ? i.schedule === schedule 
        : typeof i.schedule === 'string' && i.schedule.length > 0
      )
    )
  );

  const actualWeight = computed(() => (item.value?.weight || 0) * length);
  const estimatedWeight = computed(() => actualWeight.value * 1); // 係数例
  const pipeLength = computed(() => (item.value?.lengthCoefficient || 0) * length * 39.37);

  return { actualWeight, estimatedWeight, pipeLength };
}
