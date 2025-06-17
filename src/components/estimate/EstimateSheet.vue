<template>
  <table>
    <thead>
      <tr>
        <th>形状</th>
        <th>材質</th>
        <th>サイズ</th>
        <th>スケジュール</th>
        <th>長さ(m)</th>
        <th>単価(円/kg)</th>
        <th>重量(kg)</th>
        <th>配管長(インチ・m)</th>
        <th>価格(円)</th>
      </tr>
    </thead>
    <tbody>
      <EstimateRow v-for="(item, index) in items" :key="index" :item="item" />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { EstimateItem } from '@/types/estimate';
import EstimateRow from './EstimateRow.vue';

const items = ref<EstimateItem[]>([
  {
    size: '25A',
    length: 2,
    shape: 'pipe',
    material: 'sgp',
    schedule: 'sch40',
    unitPrice: 100,
  },
]);
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
th { background-color: #f2f2f2; }
</style>