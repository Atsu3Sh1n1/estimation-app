<template>
  <div class="estimate-sheet">
    <div class="footer">
      <a href="https://atsu3sh1n1.github.io/yumikou/" target="_blank">Created by YUMIKOU CO.,LTD.</a>
    </div>

    <button @click="addRow">追加</button>
    <button @click="handleExportCSV">CSV出力</button>
    <button @click="openLink">参考資料</button>

    <div class="meta-info">
      <label class="meta-label">
        図面番号 / タイトル:
        <input v-model="title" placeholder="例：配管図A-101" class="meta-input" />
      </label>
      <label class="meta-label">
        サポート図面番号:
        <input v-model="supportDrawingNo" placeholder="例：SUP-A1" class="meta-input" />
      </label>
      <label class="meta-label">
        サポート重量(kg):
        <input v-model.number="supportWeight" type="number" min="0" class="meta-input" />
      </label>
      <label class="meta-label">
        作業高さ(m):
        <input v-model.number="workHeight" type="number" step="0.1" min="0" class="meta-input" />
        <small>（高所係数: {{ heightFactor.toFixed(2) }} 倍）</small>
      </label>
    </div>

    <div v-for="(row, index) in rows" :key="row.id" class="estimate-row-wrapper">
      <EstimateRow :initialRow="row" @update="updateRow(index, $event)" @remove="removeRow(index)" />
    </div>
    <br />

    <div class="total">
      <strong>総重量: {{ totalWeight.toFixed(1) }} kg</strong>
      <small>（{{ weightLabor.toFixed(2) }} 人日 / kg=0.025）</small><br />

      <strong>溶接: {{ totalFittingInches.toFixed(1) }} DB</strong>
      <small>（{{ weldLabor.toFixed(2) }} 人日 / DB={{ isTIG ? '0.1' : '0.05' }}）</small><br />

      <strong>工数: {{ totalManHours.toFixed(2) }} 人日</strong>
      <small>（高所補正係数 {{ heightFactor.toFixed(3) }} 倍）</small>
    </div>

    <div class="options">
      <label>
        <input type="checkbox" v-model="isTIG" />
        TIG溶接で計算する<br />(1DB = 0.1人工：アーク0.05)
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import EstimateRow from './EstimateRow.vue';
import type { EstimateRow as EstimateRowType } from '@/types/estimate';
import { useTotalFittingInches } from '@/composables/estimate/useEstimateSheet';
import { exportCSV } from '@/composables/exportCSV';

const supportWeight = ref(0);
const supportDrawingNo = ref('');
const title = ref('');
const isTIG = ref(true);
const workHeight = ref(0);

const openLink = () => {
  window.open(`${import.meta.env.BASE_URL}reference/steel-info.html`, '_blank');
};

let idCounter = 0;
function createEmptyRow(): EstimateRowType & { id: number } {
  return {
    id: ++idCounter,
    shape: 'pipe2',
    material: '',
    size: '',
    jis: '',
    schedule: '',
    length: '',
    quantity: '',
    weight: 0,
  };
}

const rows = reactive<(EstimateRowType & { id: number })[]>([]);
const totalFittingInches = useTotalFittingInches(rows);

const totalWeight = computed(() => {
  const baseWeight = rows.reduce((acc, row) => acc + (Number(row.weight) || 0), 0);
  return baseWeight + (supportWeight.value || 0);
});

const supportLaborFactor = 0.025;
const pipeLaborFactor = 0.025;
const dbUnit = computed(() => (isTIG.value ? 0.1 : 0.05));
const pipeWeightOnly = computed(() => totalWeight.value - (supportWeight.value || 0));

const getHeightCoefficient = (height: number): number => {
  const table = [
    { height: 0, coefficient: 1.00 },
    { height: 10, coefficient: 1.34 },
    { height: 20, coefficient: 1.71 },
    { height: 30, coefficient: 2.04 },
    { height: 60, coefficient: 3.24 },
    { height: 100, coefficient: 5.26 },
    { height: 150, coefficient: 7.16 },
    { height: 200, coefficient: 8.00 },
  ];
  if (height <= 0) return 1.0;
  if (height >= 200) return 8.0;
  for (let i = 0; i < table.length - 1; i++) {
    const h1 = table[i].height, h2 = table[i + 1].height;
    const c1 = table[i].coefficient, c2 = table[i + 1].coefficient;
    if (height >= h1 && height <= h2) {
      const ratio = (height - h1) / (h2 - h1);
      return parseFloat((c1 + (c2 - c1) * ratio).toFixed(2));
    }
  }
  return 1.0;
};

const heightFactor = computed(() => getHeightCoefficient(workHeight.value));

const weightLabor = computed(() => {
  return (pipeWeightOnly.value * pipeLaborFactor + (supportWeight.value || 0) * supportLaborFactor);
});

const weldLabor = computed(() => {
  return totalFittingInches.value * dbUnit.value;
});

const totalManHours = computed(() => {
  return (weightLabor.value + weldLabor.value) * heightFactor.value;
});

function updateRow(index: number, updated: EstimateRowType & { weight: number }) {
  rows[index] = { ...rows[index], ...updated };
}

function addRow() {
  rows.push(createEmptyRow());
}

function removeRow(index: number) {
  rows.splice(index, 1);
}

const now = new Date();
function handleExportCSV() {
  exportCSV(
    rows,
    supportWeight.value,
    supportDrawingNo.value,
    title.value,
    totalWeight.value,
    totalFittingInches.value,
    totalManHours.value,
    weightLabor.value,
    weldLabor.value,
    heightFactor.value,
    workHeight.value
  );
}
</script>

<style src="./EstimateSheet.css" scoped></style>
