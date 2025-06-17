<template>
  <div class="estimation-view">
    <h1>見積もり</h1>
    <EstimateSheet />
  </div>
</template>

<script setup lang="ts">
import EstimateSheet from '@/components/estimate/EstimateSheet.vue';
</script>

<style scoped>
.estimation-view { padding: 20px; }
h1 { margin-bottom: 20px; }
</style>