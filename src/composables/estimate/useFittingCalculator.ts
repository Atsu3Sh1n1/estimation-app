import { computed } from 'vue';
import type { Fitting, Valve } from '../types';

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
  '90A': 3.5,
  '100A': 4,
  '125A': 5,
  '150A': 6,
  '175A': 7,
  '200A': 8,
  '225A': 9,
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

export function useFittingCalculator(
  length: number,
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
      (
        schedule 
        ? i.schedule === schedule 
        : typeof i.schedule === 'string' && i.schedule.length > 0
      )
    )
  );

  const sizeParts = size.split('*');
  const nominalInches = sizeParts.map(s => nominalSizeMap[s] || 0);

  const lengthCoef = computed(() => item.value?.lengthCoefficient ?? 1);
  const pipeUnitWeight = computed(() => item.value?.pipeUnitWeight ?? 0);

  const pipeLength = computed(() =>
    nominalInches.reduce((acc, inch) => acc + inch * lengthCoef.value, 0) * length
  );

  const actualWeight = computed(() => (item.value?.weight ?? 0) * length);

  const estimatedWeight = computed(() =>
    pipeLength.value * pipeUnitWeight.value
  );

  return {
    actualWeight,
    estimatedWeight,
    pipeLength
  };
}
