<template>
  <div class="estimation-view">
    <h1>配管施工費算出機</h1>
     <h5>フジタ君２号</h5>
    <EstimateSheet />
  </div>
</template>

<script setup lang="ts">
import EstimateSheet from '../components/estimate/EstimateSheet.vue';
</script>

<style scoped>
.estimation-view {
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 1.5em;
  
}
h5 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 0.8em;
  
}
@media (max-width: 768px) {
  .estimation-view {
    padding: 10px;
  }
  h1 {
    font-size: 1.2em;
  }
}
</style>