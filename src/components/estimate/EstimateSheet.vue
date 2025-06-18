<template>
  <div class="estimate-sheet">

    <div class="footer">
      <a href="https://atsu3sh1n1.github.io/yumikou/" target="_blank">Created by YUMIKOU Inc.</a>
    </div>
    
    <div class="controls">
      <button @click="addRow">行追加</button>
      <button @click="saveToLocalStorage">保存</button>
      <button @click="exportToCSV">CSVエクスポート</button>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 70px;">形状</th>
          <th style="width: 150px;">種類</th>
          <th style="width: 70px;">材質</th>
           <th style="width: 80px;">スケジュール</th>
          <th style="width: 50px;">サイズ</th>
         
          <th style="width: 70px;">m・個・枚</th>
          <th style="width: 70px; ">見積重量</th>
          <th style="width: 70px; ">実重量</th>
          <th style="width: 70px; ">m/DB</th>
          <th style="width: 20px;"></th>
          <th style="width: 50px;"></th>
        </tr>
      </thead>
      <tbody>
        <EstimateRow
          v-for="(row, index) in rows"
          :key="index"
          :index="index"
          :row="row"
          @remove="removeRow(index)"
        />
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6"></td>
          <td style="text-align: right;">{{ totalEstimatedWeight.toFixed(2) }} kg</td>
          <td style="text-align: right;">{{ totalActualWeight.toFixed(2) }} kg</td>
          <td style="text-align: right;">{{ totalPipeLength.toFixed(2) }} m</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import EstimateRow from './EstimateRow.vue';
import { useEstimateSheet } from '../../composables/estimate';

const { 
  rows, 
  addRow, 
  removeRow, 
  totalEstimatedWeight, 
  totalActualWeight, 
  totalPipeLength, 
  saveToLocalStorage, 
  exportToCSV 
} = useEstimateSheet();
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
  text-align: center;
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
