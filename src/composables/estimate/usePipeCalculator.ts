import { computed, type Ref } from 'vue';
import type { EstimateItem } from '@/types/estimate';
import { useMaterialData } from '@/composables/useMaterialData';

export function usePipeCalculator(localItem: Ref<EstimateItem>) {
  const { inchMap, getPipeWeight } = useMaterialData();

  const size = computed(() => localItem.value.size);
  const length = computed(() => localItem.value.length ?? 0);
  const material = computed(() => localItem.value.material);
  const schedule = computed(() => localItem.value.schedule ?? '');
  const unitPrice = computed(() => localItem.value.unitPrice ?? 0);

  const pipeInch = computed(() => {
    const sizeStr = size.value?.replace('A', '') ?? '';
    const numericSize = parseInt(sizeStr, 10);
    return inchMap[numericSize] ?? 0;
  });

  const computedWeight = computed(() => {
    if (!length.value || !size.value) return 0;
    return pipeInch.value * length.value * getPipeWeight(material.value, size.value, schedule.value);
  });

  const computedTotalPrice = computed(() => {
    return computedWeight.value * unitPrice.value;
  });

  const computedQuantity = computed(() => {
    return length.value || 0;
  });

  return {
    computedWeight,
    computedTotalPrice,
    computedQuantity,
  };
}