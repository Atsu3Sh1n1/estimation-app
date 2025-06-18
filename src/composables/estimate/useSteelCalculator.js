import { computed } from 'vue';
export function useSteelCalculator(length, material, size, type, steels) {
    const ESTIMATED_WEIGHT_COEFFICIENT = 1.0;
    const steel = computed(() => steels.find(s => s.material === material && s.size === size && s.type === type));
    const actualWeight = computed(() => (steel.value?.weightPerMeter || 0) * length);
    const estimatedWeight = computed(() => actualWeight.value * ESTIMATED_WEIGHT_COEFFICIENT);
    return { actualWeight, estimatedWeight };
}
//# sourceMappingURL=useSteelCalculator.js.map