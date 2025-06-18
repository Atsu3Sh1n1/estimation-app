import { reactive, computed } from 'vue';
import { useEstimateRow } from './useEstimateRow';
export function useEstimateSheet() {
    const rows = reactive([]);
    const addRow = () => {
        const { row } = useEstimateRow();
        rows.push({ ...row });
    };
    const removeRow = (index) => {
        rows.splice(index, 1);
    };
    const totalEstimatedWeight = computed(() => rows.reduce((sum, row) => sum + row.estimatedWeight, 0));
    const totalActualWeight = computed(() => rows.reduce((sum, row) => sum + row.actualWeight, 0));
    const totalPipeLength = computed(() => rows.reduce((sum, row) => sum + row.pipeLength, 0));
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
        link.download = `estimate_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
    };
    // 初期に1行だけ追加
    if (!rows.length) {
        addRow();
    }
    return {
        rows,
        addRow,
        removeRow,
        totalEstimatedWeight,
        totalActualWeight,
        totalPipeLength,
        exportToCSV,
    };
}
//# sourceMappingURL=useEstimateSheet.js.map