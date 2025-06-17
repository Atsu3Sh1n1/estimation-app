import { computed, type Ref } from 'vue';
import type { EstimateItem } from '@/types/estimate';
import { useMaterialData } from '@/composables/useMaterialData';
import categoriesData from '@/data/materials/categories.json';

export function useFittingCalculator(localItem: Ref<EstimateItem>) {
  const { inchMap, fittings, valves, getFittingWeight, getValveWeight } = useMaterialData();

  const size = computed(() => localItem.value.size);
  const length = computed(() => localItem.value.length ?? 0);
  const shape = computed(() => localItem.value.shape ?? '');
  const material = computed(() => localItem.value.material);
  const schedule = computed(() => localItem.value.schedule ?? '');

  const pipeInch = computed(() => {
    const sizeStr = size.value?.replace('A', '') ?? '';
    const numericSize = parseInt(sizeStr, 10);
    return inchMap[numericSize] ?? 0;
  });

  const coefficient = computed(() => {
    if (fittings.value.coefficients[shape.value]) {
      return fittings.value.coefficients[shape.value];
    }
    if (valves.value.coefficients[shape.value]) {
      return valves.value.coefficients[shape.value];
    }
    return 1;
  });

  const isFittingOrValve = computed(() =>
    categoriesData.categories.find(c => c.name === 'fittings' || c.name === 'valves')?.options.some(o => o.value === shape.value)
  );

  const pipeSizeInch = computed(() => {
    if (!length.value || !size.value) return 0;
    if (isFittingOrValve.value) {
      return pipeInch.value * coefficient.value * length.value;
    } else if (shape.value === 'pipe') {
      return pipeInch.value * length.value;
    }
    return 0;
  });

  const computedWeight = computed(() => {
    if (!length.value || !size.value) return 0;
    if (fittings.value.coefficients[shape.value]) {
      return getFittingWeight(material.value, shape.value, size.value) * length.value;
    } else if (valves.value.coefficients[shape.value]) {
      return getValveWeight(material.value, shape.value, size.value) * length.value;
    } else if (shape.value === 'pipe') {
      return pipeInch.value * length.value * getPipeWeight(material.value, size.value, schedule.value);
    }
    return 0;
  });

  return {
    computedWeight,
    pipeSizeInch,
  };
}