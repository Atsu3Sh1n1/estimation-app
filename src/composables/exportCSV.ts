// src/composables/exportCSV.ts
import { shapeGroups } from '@/data/genres';
import type { EstimateRow as EstimateRowType } from '@/types/estimate';

const shapeLabelMap: Record<string, string> = {};
shapeGroups.forEach(group => {
  group.shapes.forEach(shape => {
    if (shape.value) {
      shapeLabelMap[shape.value] = shape.label;
    }
  });
});

export function exportCSV(
  rows: (EstimateRowType & { id: number; weight: number; pipeLengthCount?: number })[],
  supportWeight: number,
  supportDrawingNo: string,
  title: string,
  totalWeight: number,
  totalFittingInches: number,
  totalManHours: number,
  weightLabor: number,
  weldLabor: number
) {
  const now = new Date();
  const controlId = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;

  const headers = [
    '形状', '材質', 'サイズ', 'JIS', 'スケジュール',
    '長さ(m)', '数量(個)', '重量(kg)', '定尺本数'
  ];

  const body = rows.map(row => [
    shapeLabelMap[row.shape] ?? row.shape,
    row.material,
    row.size,
    row.jis,
    row.schedule,
    row.length,
    row.quantity,
    row.weight.toFixed(0),
    row.pipeLengthCount ?? '',
  ]);

  const totals = [
    [], [], [], [], [],
    ['溶接DB', totalFittingInches.toFixed(0)],
    ['　└対応工数(人日)', weldLabor.toFixed(2)],
    ['サポート重量(kg)', supportWeight.toFixed(0)],
    ['総重量(kg)', totalWeight.toFixed(0)],
    ['　└対応工数(人日)', weightLabor.toFixed(2)],
    ['工数(人日)', totalManHours.toFixed(2)],
  ];

  const metadata = [
    ['図面番号', title],
    ['サポート図面番号', supportDrawingNo],
    ['管理番号', controlId],
    ['作成日時', now.toLocaleString()],
  ];

  const csvContent = [...metadata, [], headers, ...body, [], ...totals]
    .map(row => row.join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', `${controlId}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
