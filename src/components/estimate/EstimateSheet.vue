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
      <strong>継手溶接: {{ totalFittingInches.toFixed(0) }} DB</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
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

// 呼び径 → インチ変換
function getNominalInches(size: string): number {
  const sizeToNominalInch: Record<string, number> = {
    '6A': 0.25, '8A': 0.25, '10A': 0.375, '15A': 0.5, '20A': 0.75, '25A': 1,
    '32A': 1.25, '40A': 1.5, '50A': 2, '65A': 2.5, '80A': 3, '90A': 3.5,
    '100A': 4, '125A': 5, '150A': 6, '175A': 7, '200A': 8, '225A': 9,
    '250A': 10, '300A': 12, '350A': 14, '400A': 16, '450A': 18, '500A': 20,
    '550A': 22, '600A': 24, '650A': 26, '700A': 28, '750A': 30, '800A': 32,
    '850A': 34, '900A': 36, '1000A': 40,
  };
  return sizeToNominalInch[size] ?? 1;
}

const totalFittingInches = ref(0);

function calculateTotalFittingInches() {
  let total = 0;
  for (const row of rows) {
    if (!row.size) continue;
    const shape = row.shape;
    const quantity = Number(row.quantity);
    if (!quantity || quantity <= 0) continue;

    if (shape === 'elbow' || shape === 'shortelbow') {
      const inch = getNominalInches(row.size);
      total += inch * 2 * quantity;
    } else if (shape === 'tee' || shape === 'tee_reducing') {
      const totalInch = row.size
        .split('*')
        .map((s) => getNominalInches(s.trim()))
        .reduce((sum, i) => sum + i, 0);
      total += totalInch * quantity;
    }
  }
  totalFittingInches.value = total;
}

function updateRow(index: number, updated: EstimateRowType & { weight: number }) {
  const oldQuantity = Number(rows[index].quantity);
  rows[index] = { ...updated };
  const newQuantity = Number(updated.quantity);

  // quantityが変わったら合計を再計算
  if (oldQuantity !== newQuantity) {
    calculateTotalFittingInches();
  }
}

function addRow() {
  rows.push(createEmptyRow());
  calculateTotalFittingInches();
}

function removeRow(index: number) {
  rows.splice(index, 1);
  calculateTotalFittingInches();
}
</script>

<style src="./EstimateSheet.css" scoped></style>
