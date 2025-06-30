<template>
  <div class="estimate-sheet">
    <div class="footer">
      <a href="https://atsu3sh1n1.github.io/yumikou/" target="_blank">Created by YUMIKOU Inc.</a>
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
    </div>

    <div v-for="(row, index) in rows" :key="row.id" class="estimate-row-wrapper">
      <EstimateRow :initialRow="row" @update="updateRow(index, $event)" @remove="removeRow(index)" />
    </div>
    <br />

    <div class="total">
      <strong>総重量: {{ totalWeight.toFixed(1) }} kg</strong>
      <small>（{{ weightLabor.toFixed(2) }} 人日）</small><br>

      <strong>溶接: {{ totalFittingInches.toFixed(1) }} DB</strong>
      <small>（{{ weldLabor.toFixed(2) }} 人日）</small><br>

      <strong>工数: {{ totalManHours.toFixed(1) }} 人日</strong>
      <small> (0.025/kg・{{ isTIG ? '0.1' : '0.05' }}/DB)</small><br>
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

const rows = reactive<(EstimateRowType & { id: number })[]>([
  createEmptyRow(),
]);

const totalFittingInches = useTotalFittingInches(rows);

const totalWeight = computed(() => {
  const baseWeight = rows.reduce((acc, row) => {
    const weight = Number(row.weight);
    if (!isNaN(weight)) {
      acc += weight;
    }
    return acc;
  }, 0);

  return baseWeight + (supportWeight.value || 0);
});

const supportLaborFactor = 0.025;
const pipeLaborFactor = 0.025;

const dbUnit = computed(() => (isTIG.value ? 0.1 : 0.05));
const pipeWeightOnly = computed(() => totalWeight.value - (supportWeight.value || 0));

const weightLabor = computed(() => {
  const supportManHours = (supportWeight.value || 0) * supportLaborFactor;
  const pipeManHours = pipeWeightOnly.value * pipeLaborFactor;
  return supportManHours + pipeManHours;
});

const weldLabor = computed(() => {
  return totalFittingInches.value * dbUnit.value;
});

const totalManHours = computed(() => {
  return weightLabor.value + weldLabor.value;
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
    weldLabor.value
  );
}
</script>

<style src="./EstimateSheet.css" scoped></style>
