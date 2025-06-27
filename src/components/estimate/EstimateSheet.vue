<template>

  <div class="estimate-sheet">
    <div class="footer">
      <a href="https://atsu3sh1n1.github.io/yumikou/" target="_blank">Created by YUMIKOU Inc.</a>
    </div>

    <button @click="addRow">追加</button> <button @click="exportCSV">CSV出力</button> <button
      @click="openLink">参考資料</button>

    <div class="meta-info">
      <label>
        図面番号 / タイトル:
        <input v-model="title" placeholder="例：配管図A-101" />
      </label>
    </div>

    <div v-for="(row, index) in rows" :key="row.id" class="estimate-row-wrapper">
      <EstimateRow :initialRow="row" @update="updateRow(index, $event)" @remove="removeRow(index)" />
    </div>
    <br>
    <div class="total">

      <strong>総重量: {{ totalWeight.toFixed(1) }} kg</strong>&nbsp;
      <strong>溶接: {{ totalFittingInches.toFixed(1) }} DB</strong><br>
      <strong>工数: {{ totalManHours.toFixed(1) }} 人日 (0.025/kg・{{ isTIG ? '0.1' : '0.05' }}/DB)</strong>

    </div>
    <div class="options">
      <label>
        <input type="checkbox" v-model="isTIG" />
        TIG溶接で計算する<br>(1DB = 0.1人工：アーク0.05)
      </label>
    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import EstimateRow from './EstimateRow.vue';
import type { EstimateRow as EstimateRowType } from '@/types/estimate';
import { shapeGroups } from '@/data/genres';

const openLink = () => {
  window.open(`${import.meta.env.BASE_URL}reference/steel-info.html`, '_blank');
};

let idCounter = 0;
function createEmptyRow(): EstimateRowType & { id: number } {
  return {
    id: ++idCounter,
    shape: 'pipe',
    material: '',
    size: '',
    jis: '',
    schedule: '',
    length: '',
    quantity: '',
    weight: 0,
  };
}

const rows = reactive<(EstimateRowType & { id: number })[]>([
  createEmptyRow(),
]);

// 呼び径（インチ）変換
function getNominalInches(size: string): number {
  const sizeToNominalInch: Record<string, number> = {
    '6A': 0.25, '8A': 0.25, '10A': 0.375, '15A': 0.5, '20A': 0.75, '25A': 1,
    '32A': 1.25, '40A': 1.5, '50A': 2, '65A': 2.5, '80A': 3, '90A': 3.5,
    '100A': 4, '125A': 5, '150A': 6, '175A': 7, '200A': 8, '225A': 9,
    '250A': 10, '300A': 12, '350A': 14, '400A': 16, '450A': 18, '500A': 20,
    '550A': 22, '600A': 24, '650A': 26, '700A': 28, '750A': 30, '800A': 32,
    '850A': 34, '900A': 36, '1000A': 40, '1100A': 44, '1200A': 48, '1350A': 54, '1500A': 60,
  };
  return sizeToNominalInch[size] ?? 0;
}

// 継手・パイプを含めたDB（リング）計算
const totalFittingInches = computed(() => {
  return rows.reduce((acc, row) => {
    if (!row.size || !row.shape) return acc;

    const shape = row.shape;
    const quantity = Number(row.quantity) || 0;
    const inch = getNominalInches(row.size);

    // 継手処理
    if (['elbow', 'shortelbow'].includes(shape)) {
      return acc + inch * 2 * quantity;
    }

    if (['flat_flange'].includes(shape)) {
      return acc + inch * 3 * quantity;
    }

    if (['tee', 'tee_reducing', 'reducer'].includes(shape)) {
      const totalInch = row.size
        .split('*')
        .map((s) => getNominalInches(s.trim()))
        .reduce((sum, i) => sum + i, 0);
      return acc + totalInch * quantity;
    }

    // パイプ処理（定尺換算リング）
    if (['pipe', 'pipe2'].includes(shape)) {
      const length = Number(row.length) || 0;
      if (length <= 0 || inch <= 0) return acc;

      const isStainless = row.material.startsWith('SUS');
      const stdLength = isStainless ? 4 : 5.5;

      const numOfRings = Math.ceil(length / stdLength);
      const ringsPerStdLength = 1;  // 必要なら変更可

      return acc + numOfRings * ringsPerStdLength * inch;
    }


    return acc;
  }, 0);
});

// 総重量（継手・パイプ）
const totalWeight = computed(() => {
  return rows.reduce((acc, row) => {
    const weight = Number(row.weight);
    if (!isNaN(weight)) {
      acc += weight;
    }
    return acc;
  }, 0);
});

const isTIG = ref(true); // false ならアーク基準（1DB=0.05人工）


// 工数：総重量 × 0.025 + リング数 × 0.1
const totalManHours = computed(() => {
  const dbUnit = isTIG.value ? 0.1 : 0.05; // TIGなら0.1、通常なら0.05
  return totalWeight.value * 0.025 + totalFittingInches.value * dbUnit;
});


// 行更新
function updateRow(index: number, updated: EstimateRowType & { weight: number }) {
  rows[index] = { ...rows[index], ...updated };
}

// 行追加
function addRow() {
  rows.push(createEmptyRow());
}

// 行削除
function removeRow(index: number) {
  rows.splice(index, 1);
}

import { ref } from 'vue';

const title = ref(''); // 図面番号・タイトル入力
const now = new Date();

// 管理番号（例：20250625_143210）
const controlId = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}`;
const shapeLabelMap: Record<string, string> = {};
shapeGroups.forEach(group => {
  group.shapes.forEach(shape => {
    if (shape.value) {
      shapeLabelMap[shape.value] = shape.label;
    }
  });
});
function exportCSV() {
  const headers = [
    '形状', '材質', 'サイズ', 'JIS', 'スケジュール',
    '長さ(m)', '数量(個)', '重量(kg)', '定尺本数'
  ];

  const body = rows.map((row) => [

    shapeLabelMap[row.shape] ?? row.shape, row.material,
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
    ['溶接DB', totalFittingInches.value.toFixed(0)],
    ['総重量(kg)', totalWeight.value.toFixed(0)],
    ['工数(人日)', totalManHours.value.toFixed(0)],
  ];

  const metadata = [
    [`図面番号`, title.value],
    [`管理番号`, controlId],
    [`作成日時`, now.toLocaleString()]
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


</script>

<style src="./EstimateSheet.css" scoped></style>
