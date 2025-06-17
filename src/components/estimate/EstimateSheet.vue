<template>
  <div class="estimate-sheet">
    <div class="controls">
      <button @click="addRow">行追加</button>
      <button @click="saveToLocalStorage">保存</button>
      <button @click="exportToCSV">CSVエクスポート</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>形状</th>
          <th>種類</th>
          <th>材質</th>
          <th>サイズ</th>
          <th>スケジュール</th>
          <th>数量</th>
          <th>見積重量</th>
          <th>実重量</th>
          <th>m/DB</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <EstimateRow
          v-for="(row, index) in rows"
          :key="index"
          :index="index"
          @remove="removeRow(index)"
        />
      </tbody>
      <tfoot>
        <tr>
          <td colspan="1">合計</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ totalEstimatedWeight.toFixed(2) }} kg</td>
          <td>{{ totalActualWeight.toFixed(2) }} kg</td>
          <td>{{ totalPipeLength.toFixed(2) }} インチ・m</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import EstimateRow from './EstimateRow.vue';
import { useEstimateSheet } from '../../composables/estimate';

const { rows, addRow, removeRow, totalEstimatedWeight, totalActualWeight, totalPipeLength, saveToLocalStorage, exportToCSV } = useEstimateSheet();
</script>

<style scoped>
.estimate-sheet {
  padding: 10px;
}
.controls {
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  background: #f0f0f0;
}
tfoot td {
  font-weight: bold;
}
button {
  padding: 8px 16px;
  background: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #388e3c;
}
@media (max-width: 768px) {
  table {
    font-size: 0.8em;
  }
  th, td {
    padding: 4px;
  }
  .controls {
    flex-direction: column;
  }
  button {
    width: 100%;
  }
}
</style>