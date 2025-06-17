import { computed } from 'vue';
import type { Pipe } from '../types';

export function usePipeCalculator(length: number, material: string, size: string, schedule: string, pipes: Pipe[]) {
  const pipe = computed(() => pipes.find(p => p.material === material && p.size === size && p.schedule === schedule));
  const actualWeight = computed(() => (pipe.value?.weightPerMeter || 0) * length);
  const estimatedWeight = computed(() => actualWeight.value);
  const pipeLength = computed(() => length * 39.37); // m to inch-m

  return { actualWeight, estimatedWeight, pipeLength };
}