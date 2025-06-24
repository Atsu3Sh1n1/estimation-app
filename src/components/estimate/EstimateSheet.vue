<template> 
  <div class="estimate-sheet">
    <div class="footer">
      <a href="https://atsu3sh1n1.github.io/yumikou/" target="_blank">Created by YUMIKOU Inc.</a>
    </div>

    <button @click="addRow">行追加</button>

    <div v-for="(row, index) in rows" :key="row.id" class="estimate-row-wrapper">
      <EstimateRow
        :initialRow="row"
        @update="updateRow(index, $event)"
        @remove="removeRow(index)"
      />
    </div>

    <div class="total">
      <strong>溶接: {{ totalFittingInches.toFixed(0) }} DB</strong><br>
      <strong>総重: {{ totalWeight.toFixed(0) }} kg</strong><br>
      <strong>工数: {{ totalManHours.toFixed(0) }} 人日</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import EstimateRow from './EstimateRow.vue';
import type { EstimateRow as EstimateRowType } from '@/types/estimate';

let idCounter = 0;
function createEmptyRow(): EstimateRowType & { id: number } {
  return {
    id: ++idCounter,
    material: 'SUS304',
    shape: 'pipe',
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
    '850A': 34, '900A': 36, '1000A': 40,
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

    if (['tee', 'tee_reducing'].includes(shape)) {
      const totalInch = row.size
        .split('*')
        .map((s) => getNominalInches(s.trim()))
        .reduce((sum, i) => sum + i, 0);
      return acc + totalInch * quantity;
    }

    // パイプ処理（定尺換算リング）
    if (shape === 'pipe') {
      const length = Number(row.length) || 0;
      if (length <= 0 || inch <= 0) return acc;

      const isStainless = row.material.startsWith('SUS');
      const stdLength = isStainless ? 4 : 5.5;

      const numOfRings = Math.ceil(length / stdLength); // ← 🔥 ここが修正点
      return acc + numOfRings * inch;
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

// 工数：総重量 × 0.025 + リング数 × 0.1
const totalManHours = computed(() => {
  return totalWeight.value * 0.025 + totalFittingInches.value * 0.1;
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
</script>

<style src="./EstimateSheet.css" scoped></style>
