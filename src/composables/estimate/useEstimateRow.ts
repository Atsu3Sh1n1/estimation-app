import { computed } from 'vue';
import { getPipeWeight, getFittingWeight } from './usePipeCalculator';
import type { EstimateRow } from '@/types/estimate';

export function useEstimateRow(row: EstimateRow) {
  const weight = computed(() => {
    return ['pipe', 'pipe2'].includes(row.shape)
      ? getPipeWeight(row)
      : getFittingWeight(row);
  });

  return { weight };
}
