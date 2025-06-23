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
      <strong>合計重量: {{ totalWeight.toFixed(0) }} kg</strong>
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
    length:'',
    quantity: '',
    weight: 0, // 初期値として安全
  };
}

const rows = reactive<(EstimateRowType & { id: number })[]>([
  createEmptyRow(),
]);

const totalWeight = computed(() => {
  return rows.reduce((acc, row) => acc + (row.weight ?? 0), 0);
});

function updateRow(index: number, updated: EstimateRowType & { weight: number }) {
  rows[index] = { ...updated };
}

function addRow() {
  rows.push(createEmptyRow());
}

function removeRow(index: number) {
  rows.splice(index, 1);
}
</script>

<style src="./EstimateSheet.css" scoped></style>

