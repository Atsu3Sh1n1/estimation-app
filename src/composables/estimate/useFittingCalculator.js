import { computed } from 'vue';
const nominalSizeMap = {
    '6A': 0.25, '8A': 0.25, '10A': 0.375, '15A': 0.5, '20A': 0.75,
    '25A': 1, '32A': 1.25, '40A': 1.5, '50A': 2, '65A': 2.5,
    '80A': 3, '100A': 4, '125A': 5, '150A': 6, '200A': 8,
    '250A': 10, '300A': 12, '350A': 14, '400A': 16, '450A': 18, '500A': 20
};
export function useFittingCalculator(length, material, size, type, schedule = '', items) {
    const item = computed(() => items.find(i => i.material === material &&
        i.size === size &&
        i.type === type &&
        (schedule
            ? i.schedule === schedule
            : typeof i.schedule === 'string' && i.schedule.length > 0)));
    const nominalInch = nominalSizeMap[size] || 0;
    const lengthCoef = computed(() => item.value?.lengthCoefficient ?? 1);
    const pipeUnitWeight = computed(() => item.value?.pipeUnitWeight ?? 0);
    // DBあたりの換算距離（m）
    const pipeLength = computed(() => nominalInch * length * lengthCoef.value);
    // 実重量（= DB個数 × 1個あたり重量）
    const actualWeight = computed(() => (item.value?.weight ?? 0) * length);
    // 見積もり重量（= DBあたりの換算距離 × pipe重量）
    const estimatedWeight = computed(() => pipeLength.value * pipeUnitWeight.value);
    return {
        actualWeight,
        estimatedWeight,
        pipeLength
    };
}
//# sourceMappingURL=useFittingCalculator.js.map