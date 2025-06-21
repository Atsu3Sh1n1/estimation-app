import { reactive, computed, watch } from 'vue';
import { useMaterialData } from './useMaterialData';
import { usePipeCalculator } from './usePipeCalculator';
import { useFittingCalculator } from './useFittingCalculator';
import { useSteelCalculator } from './useSteelCalculator';
import type { EstimateRow } from '../../types';

export function useEstimateRow(initialRow?: Partial<EstimateRow>) {
  const {
    shapes,
    pipeTypes,
    fittingTypes,
    valveTypes,
    steelTypes,
    getMaterials,
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
    weldingPoints: initialRow?.weldingPoints || 0, // 🧩 追加
    errors: {}
  });

  const types = computed(() => {
    if (row.shape === 'pipe') return pipeTypes.value;
    if (row.shape === 'fitting') return fittingTypes.value;
    if (row.shape === 'valve') return valveTypes.value;
    if (row.shape === 'steel') return steelTypes.value;
    return [];
  });

  const materials = computed(() => {
    return getMaterials(row.shape, row.type);
  });

  const sizes = computed(() => {
    return getSizes(row.shape, row.material, row.schedule, row.type);
  });

  const schedules = computed(() => {
    return getSchedules(row.shape, row.material, row.size || null, row.type);
  });

  const validate = () => {
    row.errors = {};
    if (!row.shape) row.errors.shape = 'カテゴリを選択してください';
    if ((row.shape === 'pipe' || row.shape === 'fitting' || row.shape === 'valve' || row.shape === 'steel') && !row.type) {
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
      row.actualWeight = row.estimatedWeight = row.pipeLength = row.weldingPoints = 0;
      return;
    }

    let calc;
    switch (row.shape) {
      case 'pipe':
        calc = usePipeCalculator(row.length, row.material, row.size, row.schedule!, pipes, row.type);
        break;
      case 'fitting':
        calc = useFittingCalculator(row.length, row.material, row.size, row.type, row.schedule!, fittings);
        break;
      case 'valve':
        calc = useFittingCalculator(row.length, row.material, row.size, row.type, row.schedule!, valves);
        break;
      case 'steel':
        calc = useSteelCalculator(row.length, row.material, row.size, row.type, steels);
        break;
    }

    if (calc) {
      row.actualWeight = calc.actualWeight.value;
      row.estimatedWeight = calc.estimatedWeight.value;
      row.pipeLength = row.shape === 'steel' ? 0 : calc.pipeLength?.value || 0;
      row.weldingPoints = calc.weldingPoints?.value ?? 0; // 🧩 ここが重要
    }
  };

  watch(
    [
      () => row.shape,
      () => row.type,
      () => row.material,
      () => row.size,
      () => row.schedule,
      () => row.length
    ],
    updateWeights,
    { immediate: true }
  );

  return { row, shapes, materials, types, sizes, schedules, updateWeights };
}
