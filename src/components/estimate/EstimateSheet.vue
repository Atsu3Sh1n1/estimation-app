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
          <th style="width: 70px;">形状</th>
          <th style="width: 150px;">種類</th>
          <th style="width: 70px;">材質</th>
          <th style="width: 80px;">スケジュール</th>
          <th style="width: 50px;">サイズ</th>
          <th style="width: 70px;">m/個/枚</th>
          <th style="width: 70px;">見積重量</th>
          <th style="width: 70px;">実重量</th>
          <th style="width: 70px;">m/DB</th>
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
        <!-- トータル関連の行は一切なし -->
      </tfoot>
    </table>
  </div>

  <meta name="viewport" content="width=1024">
</template>

<script setup lang="ts">
import EstimateRow from './EstimateRow.vue';
import { useEstimateSheet } from '../../composables/estimate';

const {
  rows,
  addRow,
  removeRow,
} = useEstimateSheet();
</script>

<style src="./EstimateSheet.css" scoped></style>

