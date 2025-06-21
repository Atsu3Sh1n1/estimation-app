<template>
  <div class="estimate-sheet">
    <div class="footer">
      <a href="https://atsu3sh1n1.github.io/yumikou/" target="_blank">Created by YUMIKOU Inc.</a>
    </div>

    <div class="controls">
      <button @click="addRow">行追加</button>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 40px;">形状</th>
          <th style="width: 120px;">種類</th>
          <th style="width: 70px;">材質</th>
          <th style="width: 80px;">スケジュール</th>
          <th style="width: 60px;">サイズ</th>
          <th style="width: 40px;">m/個/枚</th>
          <th style="width: 50px;">重量</th>
          <th style="width: 50px;">{{ totalPipeLength.toFixed(0) }}m/DB</th>
          <th style="width: 50px;">{{ totalWeldingPoints }} w/DB</th>
          <th class="no-border" style="width: 1px;"></th>



        </tr>
      </thead>

      <tbody>
        <EstimateRow
          v-for="row in rows"
          :key="row.id"
          :id="row.id"
          :initialRow="row"
          @remove="removeRow"
          @updateRow="updateRow"
        />
      </tbody>

      
    </table>
  </div>

  <meta name="viewport" content="width=1024" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import EstimateRow from './EstimateRow.vue';

let nextId = 1;

const createEmptyRow = () => ({
  id: nextId++,
  shape: '',
  type: '',
  material: '',
  schedule: '',
  size: '',
  length: 0,
  estimatedWeight: 0,
  actualWeight: 0,
  pipeLength: 0,      // インチメーター換算長さ
  weldingPoints: 0,
  errors: {},
});

const rows = ref([createEmptyRow()]);

const addRow = () => {
  rows.value.push(createEmptyRow());
};

const removeRow = (idToRemove: number) => {
  rows.value = rows.value.filter(row => row.id !== idToRemove);
};

// 合計溶接ポイント
const totalWeldingPoints = computed(() =>
  rows.value.reduce((sum, row) => sum + (row.weldingPoints ?? 0), 0)
);

// 合計インチメーター換算長さ
const totalPipeLength = computed(() =>
  rows.value.reduce((sum, row) => sum + (row.pipeLength ?? 0), 0)
);

// 行データ更新時にマージ
const updateRow = ({ id, updatedRow }: { id: number; updatedRow: any }) => {
  const index = rows.value.findIndex(r => r.id === id);
  if (index !== -1) {
    rows.value[index] = { ...rows.value[index], ...updatedRow };
  }
};
</script>

<style src="./EstimateSheet.css" scoped></style>
