import { computed } from 'vue';
import type { Steel } from '../../types';

export function useSteelCalculator(length: number, material: string, size: string, type: string, steels: Steel[]) {
  const ESTIMATED_WEIGHT_COEFFICIENT = 1.0; // 鋼材の見積重量係数（デフォルト：1.0）
  const steel = computed(() => steels.find(s => s.material === material && s.size === size && s.type === type));
  const actualWeight = computed(() => (steel.value?.weightPerMeter || 0) * length);
  const estimatedWeight = computed(() => actualWeight.value * ESTIMATED_WEIGHT_COEFFICIENT);
  const pipeLength = computed(() => length * 39.37); // m to inch-m

  return { actualWeight, estimatedWeight, pipeLength };
}