import { reactive, computed } from 'vue';

export interface EstimateRow {
  estimatedWeight: number;
  actualWeight: number;
  pipeLength: number;
  // 他必要なら追加してください
}

export function useEstimateSheet() {
  const rows = reactive<EstimateRow[]>([
    { estimatedWeight: 0, actualWeight: 0, pipeLength: 0 },
  ]);

  const addRow = () => {
    rows.push({ estimatedWeight: 0, actualWeight: 0, pipeLength: 0 });
  };

  const removeRow = (index: number) => {
    rows.splice(index, 1);
  };

  const totalEstimatedWeight = computed(() =>
    rows.reduce((sum, row) => sum + (row.estimatedWeight || 0), 0)
  );

  const totalActualWeight = computed(() =>
    rows.reduce((sum, row) => sum + (row.actualWeight || 0), 0)
  );

  const totalPipeLength = computed(() =>
    rows.reduce((sum, row) => sum + (row.pipeLength || 0), 0)
  );

  return {
    rows,
    addRow,
    removeRow,
    totalEstimatedWeight,
    totalActualWeight,
    totalPipeLength,
  };
}
