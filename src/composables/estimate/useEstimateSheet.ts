import { ref, computed } from 'vue';

export interface EstimateRow {
  id: number;  // ユニークIDを追加
  shape?: string;
  type?: string;
  material?: string;
  schedule?: string;
  size?: string;
  length?: number;
  estimatedWeight: number;
  actualWeight: number;
  pipeLength: number;
  errors?: Record<string, string>;
}

let nextId = 1;

export function useEstimateSheet() {
  const rows = ref<EstimateRow[]>([
    {
      id: nextId++,
      shape: '',
      type: '',
      material: '',
      schedule: '',
      size: '',
      length: 0,
      estimatedWeight: 0,
      actualWeight: 0,
      pipeLength: 0,
      errors: {},
    },
  ]);

  const addRow = () => {
    rows.value.push({
      id: nextId++,
      shape: '',
      type: '',
      material: '',
      schedule: '',
      size: '',
      length: 0,
      estimatedWeight: 0,
      actualWeight: 0,
      pipeLength: 0,
      errors: {},
    });
  };

  const removeRow = (idToRemove: number) => {
    rows.value = rows.value.filter(row => row.id !== idToRemove);
  };

  const totalEstimatedWeight = computed(() =>
    rows.value.reduce((sum, row) => sum + (row.estimatedWeight || 0), 0)
  );

  const totalActualWeight = computed(() =>
    rows.value.reduce((sum, row) => sum + (row.actualWeight || 0), 0)
  );

  const totalPipeLength = computed(() =>
    rows.value.reduce((sum, row) => sum + (row.pipeLength || 0), 0)
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
