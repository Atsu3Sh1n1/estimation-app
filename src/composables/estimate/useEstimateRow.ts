import { computed, type Ref } from 'vue';
import type { EstimateItem } from '@/types/estimate';
import { usePipeCalculator } from './usePipeCalculator';
import { useFittingCalculator } from './useFittingCalculator';
import { useMaterialData } from '@/composables/useMaterialData';
import categoriesData from '@/data/materials/categories.json';

interface CategoryOption {
  value: string;
  label: string;
}

interface Category {
  name: string;
  label: string;
  options: CategoryOption[];
}

export function useEstimateRow(localItem: Ref<EstimateItem>) {
  const { pipes, fittings, valves, steels, inchMap, getPipeWeight, getFittingWeight, getValveWeight, getSteelWeight, pipeSizes, steelSizes } = useMaterialData();

  const shapeOptionsData = computed(() => categoriesData.categories as Category[]);

  const materialOptions = computed(() => {
    const materials = new Set<string>();
    [pipes.value, fittings.value, valves.value, steels.value].forEach(data => {
      Object.keys(data).forEach(m => materials.add(m));
    });
    return Array.from(materials);
  });

  const availableSizes = computed(() => {
    const shape = localItem.value.shape;
    if (!shape) return [];
    if (shape === 'pipe') return pipeSizes.value;
    if (categoriesData.categories.find(c => c.name === 'steels')?.options.some(o => o.value === shape)) {
      return steelSizes.value;
    }
    if (shape.startsWith('valve')) return ['15A', '20A', '25A', '32A'];
    return pipeSizes.value;
  });

  const allSchedules = [
    'sch5', 'sch10', 'sch40', 'sch80', 'sch120', 'sch160',
    'sch5s', 'sch10s', 'sch20s', 'sch40s', 'sch80s', 'sch120s', 'sch160s',
  ];

  const availableSchedules = computed(() => {
    const material = localItem.value.material;
    const shape = localItem.value.shape;
    if (!localItem.value.size || !shape) return [];

    if (material === 'sgp') return [];

    const isStainless = ['sus304', 'sus304L', 'sus316', 'sus316L'].includes(material);
    const isPipeOrFitting =
      shape === 'pipe' ||
      categoriesData.categories.find(c => c.name === 'fittings')?.options.some(o => o.value === shape);

    if (isPipeOrFitting) {
      return allSchedules.filter(sch => isStainless ? sch.endsWith('s') : !sch.endsWith('s'));
    }
    return allSchedules;
  });

  const { computedWeight: pipeWeight, computedTotalPrice: pipePrice, computedQuantity } = usePipeCalculator(localItem);
  const { computedWeight: fittingWeight, pipeSizeInch } = useFittingCalculator(localItem);

  const steelWeight = computed(() => {
    const shape = localItem.value.shape;
    const material = localItem.value.material;
    const size = localItem.value.size;
    const length = localItem.value.length ?? 0;
    if (!size || !shape || !length) return 0;

    const steelCategory = categoriesData.categories.find(c => c.name === 'steels');
    if (steelCategory?.options.some(o => o.value === shape)) {
      return getSteelWeight(material, shape, size) * length;
    }
    return 0;
  });

  const computedWeight = computed(() => {
    const shape = localItem.value.shape;
    if (shape === 'pipe') return pipeWeight.value;
    if (categoriesData.categories.find(c => c.name === 'fittings')?.options.some(o => o.value === shape)) {
      return fittingWeight.value;
    }
    if (categoriesData.categories.find(c => c.name === 'valves')?.options.some(o => o.value === shape)) {
      return fittingWeight.value;
    }
    if (categoriesData.categories.find(c => c.name === 'steels')?.options.some(o => o.value === shape)) {
      return steelWeight.value;
    }
    return 0;
  });

  const computedTotalPrice = computed(() => {
    const unitPrice = localItem.value.unitPrice ?? 0;
    return computedWeight.value * unitPrice;
  });

  function onMaterialChange() {
    localItem.value.schedule = '';
    localItem.value.size = '';
  }

  function onShapeChange() {
    localItem.value.size = '';
    localItem.value.schedule = '';
  }

  function onSizeChange() {
    localItem.value.schedule = '';
  }

  return {
    materialOptions,
    shapeOptionsData,
    availableSizes,
    availableSchedules,
    computedWeight,
    totalPrice: computedTotalPrice,
    computedQuantity,
    pipeSizeInch,
    onMaterialChange,
    onShapeChange,
    onSizeChange,
  };
}