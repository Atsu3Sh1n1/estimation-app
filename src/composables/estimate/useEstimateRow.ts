import { computed } from 'vue';
import { getPipeWeight, getFittingWeight } from './usePipeCalculator';
import type { EstimateRow } from '@/types/estimate';

export function useEstimateRow(row: EstimateRow) {
  const weight = computed(() => {
    // バルブや継手など → fittingWeight に流す
    return [
      'pipe',
      'pipe2',
      'Flat_Bar',
      'Angle',
      'ABS_Angle',
      'Channel',
      'H_Beam',
      'Round_Bar',
      'I_Beam',
      'Square_Pipe',
      'Round_Pipe',
      'Square_Bar',
      'Plate',
      'Light_Channel',
      'Lip_Channel',
    ].includes(row.shape)
      ? getPipeWeight(row)
      : getFittingWeight(row); // 👈 バルブはこちら
  });

  return { weight };
}
