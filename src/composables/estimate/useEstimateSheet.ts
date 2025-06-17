import { reactive, computed } from 'vue';
import { useEstimateRow } from './useEstimateRow';
import type { EstimateRow } from '../../types';

export function useEstimateSheet() {
  const rows = reactive<EstimateRow[]>([]);

  const addRow = () => {
    const { row } = useEstimateRow();
    rows.push({ ...row });
  };

  const removeRow = (index: number) => {
    rows.splice(index, 1);
  };

  const totalEstimatedWeight = computed(() =>
    rows.reduce((sum, row) => sum + row.estimatedWeight, 0)
  );

  const totalActualWeight = computed(() =>
    rows.reduce((sum, row) => sum + row.actualWeight, 0)
  );

  const totalPipeLength = computed(() =>
    rows.reduce((sum, row) => sum + row.pipeLength, 0)
  );

  const saveToLocalStorage = () => {
    localStorage.setItem('estimateRows', JSON.stringify(rows));
  };

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('estimateRows');
    if (saved) {
      const parsed = JSON.parse(saved);
      rows.length = 0;
      parsed.forEach((r: EstimateRow) => {
        const { row } = useEstimateRow(r);
        rows.push({ ...row });
      });
    }
  };

  const exportToCSV = () => {
    const headers = ['形状', '種類', '材質', 'サイズ', 'スケジュール', '長さ(m)', '見積重量(kg)', '実重量(kg)', '配管長(インチ・m)'];
    const csvRows = rows.map(row => [
      row.shape,
      row.type || '',
      row.material,
      row.size,
      row.schedule || '',
      row.length.toFixed(2),
      row.estimatedWeight.toFixed(2),
      row.actualWeight.toFixed(2),
      row.pipeLength.toFixed(2)
    ]);
    const csvContent = [
      headers.join(','),
      ...csvRows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `estimate_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
  };

  // 初期ロード
  loadFromLocalStorage();
  if (!rows.length) {
    addRow();
    addRow();
  }

  return { rows, addRow, removeRow, totalEstimatedWeight, totalActualWeight, totalPipeLength, saveToLocalStorage, loadFromLocalStorage, exportToCSV };
}