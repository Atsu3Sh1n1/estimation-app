<template>
  <tr>
    <td>
      <select v-model="localItem.shape" @change="onShapeChange">
        <optgroup v-for="category in shapeOptionsData" :label="category.label" :key="category.name">
          <option v-for="opt in category.options" :value="opt.value" :key="opt.value">{{ opt.label }}</option>
        </optgroup>
      </select>
    </td>
    <td>
      <select v-model="localItem.material" @change="onMaterialChange">
        <option v-for="opt in materialOptions" :value="opt" :key="opt">{{ opt }}</option>
      </select>
    </td>
    <td>
      <select v-model="localItem.size" @change="onSizeChange">
        <option v-for="size in availableSizes" :value="size" :key="size">{{ size }}</option>
      </select>
    </td>
    <td>
      <select v-model="localItem.schedule">
        <option v-for="sch in availableSchedules" :value="sch" :key="sch">{{ sch }}</option>
      </select>
    </td>
    <td><input v-model.number="localItem.length" type="number" min="0" /></td>
    <td><input v-model.number="localItem.unitPrice" type="number" min="0" /></td>
    <td>{{ computedWeight.toFixed(2) }}</td>
    <td>{{ pipeSizeInch.toFixed(2) }}</td>
    <td>{{ totalPrice.toFixed(2) }}</td>
  </tr>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { EstimateItem } from '@/types/estimate';
import { useEstimateRow } from '@/composables/estimate';

const props = defineProps<{
  item: EstimateItem;
}>();

const localItem = ref<EstimateItem>({ ...props.item });
const {
  materialOptions,
  shapeOptionsData,
  availableSizes,
  availableSchedules,
  computedWeight,
  totalPrice,
  computedQuantity,
  pipeSizeInch,
  onMaterialChange,
  onShapeChange,
  onSizeChange,
} = useEstimateRow(localItem);
</script>

<style scoped>
tr { display: flex; gap: 8px; }
td { flex: 1; }
select, input { width: 100%; padding: 4px; }
</style>