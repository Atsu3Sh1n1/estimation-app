import { reactive, computed, watch } from 'vue';
import { useMaterialData } from './useMaterialData';
import { usePipeCalculator } from './usePipeCalculator';
import { useFittingCalculator } from './useFittingCalculator';
import type { EstimateRow } from '../../types';

export function useEstimateRow(initialRow?: Partial<EstimateRow>) {
  const {
    shapes,
    fittingTypes,
    valveTypes,
    steelTypes,
    getSizes,
    getSchedules,
    pipes,
    fittings,
    valves,
    steels
  } = useMaterialData();

  const row = reactive<EstimateRow>({
    shape: initialRow?.shape || '',
    type: initialRow?.type || '',
    material: initialRow?.material || '',
    size: initialRow?.size || '',
    schedule: initialRow?.schedule || '',
    length: initialRow?.length || 0,
    estimatedWeight: initialRow?.estimatedWeight || 0,
    actualWeight: initialRow?.actualWeight || 0,
    pipeLength: initialRow?.pipeLength || 0,
    errors: {}
  });

  const materials = computed(() => {
    if (!row.shape) return [];
    const arr = {
      pipe: pipes,
      fitting: fittings.filter(f => !row.type || f.type === row.type),
      valve: valves.filter(v => !row.type || v.type === row.type),
      steel: steels.filter(s => !row.type || s.type === row.type)
    }[row.shape] || [];
    return [...new Set(arr.map(i => i.material))];
  });

  const types = computed(() => {
    if (row.shape === 'fitting') return fittingTypes.value;
    if (row.shape === 'valve') return valveTypes.value;
    if (row.shape === 'steel') return steelTypes.value;
    return [];
  });

  const sizes = computed(() => {
    const arr = {
      pipe: pipes,
      fitting: fittings.filter(f => !row.type || f.type === row.type),
      valve: valves.filter(v => !row.type || v.type === row.type),
      steel: steels.filter(s => !row.type || s.type === row.type)
    }[row.shape] || [];
    return [...new Set(arr.filter(i => i.material === row.material).map(i => i.size))];
  });

  const schedules = computed(() => {
    if (!row.shape || row.shape === 'steel' || !row.material || !row.size) return [];
    return getSchedules(row.shape, row.material, row.size, row.type);
  });

  const validate = () => {
    row.errors = {};
    if (!row.shape) row.errors.shape = '形状を選択してください';
    if ((row.shape === 'fitting' || row.shape === 'valve' || row.shape === 'steel') && !row.type) {
      row.errors.type = '種類を選択してください';
    }
    if (!row.material) row.errors.material = '材質を選択してください';
    if (!row.size) row.errors.size = 'サイズを選択してください';
    if (row.shape !== 'steel' && !row.schedule) row.errors.schedule = 'スケジュールを選択してください';
    if (row.length <= 0 || isNaN(row.length)) row.errors.length = '長さは正の数値を入力してください';
  };

  const updateWeights = () => {
    validate();
    if (Object.keys(row.errors).length) {
      row.actualWeight = row.estimatedWeight = row.pipeLength = 0;
      return;
    }
    if (row.shape !== 'steel' && !row.schedule) {
      row.actualWeight = row.estimatedWeight = row.pipeLength = 0;
      return;
    }
    let calc;
    if (row.shape === 'pipe') {
      calc = usePipeCalculator(row.length, row.material, row.size, row.schedule || '', pipes);
    } else if (row.shape === 'fitting') {
      calc = useFittingCalculator(row.length, row.material, row.size, row.type, row.schedule || '', fittings);
    } else if (row.shape === 'valve') {
      calc = useFittingCalculator(row.length, row.material, row.size, row.type, row.schedule || '', valves);
    } else if (row.shape === 'steel') {
      calc = usePipeCalculator(row.length, row.material, row.size, '', steels);
    }
    if (calc) {
      row.actualWeight = calc.actualWeight.value;
      row.estimatedWeight = calc.estimatedWeight.value;
      row.pipeLength = row.shape === 'steel' ? 0 : calc.pipeLength.value;
    }
  };

  watch(
    [() => row.shape, () => row.type, () => row.material, () => row.size, () => row.schedule, () => row.length],
    updateWeights,
    { immediate: true }
  );

  return { row, shapes, materials, types, sizes, schedules, updateWeights };
}
