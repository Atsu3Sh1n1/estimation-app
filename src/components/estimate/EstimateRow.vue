<template>
  <tr>
    <td>
      <select
        v-model="row.shape"
        @change="resetFields"
        :disabled="!shapes.length"
        :class="{ 'error': !row.shape }"
      >
        <option value="">選択</option>
        <option v-for="shape in shapes" :key="shape.id" :value="shape.id">{{ shape.name }}</option>
      </select>
    </td>

    <td>
      <select
        v-model="row.type"
        @change="resetSize"
        :disabled="types.length === 0"
        :class="{ 'error': !row.type }"
      >
        <option value="">選択</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </td>

    <td>
      <select
        v-model="row.material"
        @change="resetSize"
        :disabled="!row.type"
        :class="{ 'error': !row.material || !row.type }"
      >
        <option value="">選択</option>
        <option v-for="material in materials" :key="material" :value="material">{{ material }}</option>
      </select>
    </td>

    <!-- 🔁 スケジュールをサイズより前に配置 -->
    <td>
      <select
        v-model="row.schedule"
        @change="updateWeights"
        :disabled="row.shape === 'steel' || !schedules.length"
        :class="{ 'error': !row.schedule && row.shape !== 'steel' }"
      >
        <option value="">選択</option>
        <option v-for="schedule in schedules" :key="schedule" :value="schedule">{{ schedule }}</option>
      </select>
    </td>

    <td>
      <select
        v-model="row.size"
        @change="updateWeights"
        :disabled="!sizes.length"
        :class="{ 'error': !row.size }"
      >
        <option value="">選択</option>
        <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
      </select>
    </td>

    <td>
      <input
        type="number"
        v-model.number="row.length"
        @input="validateLength"
        min="0"
        step="0.1"
        :class="{ error: lengthError || row.length === 0 }"
      />
    </td>

 <td style="text-align: right;">
  <strong>{{ Math.floor(row.estimatedWeight) }}</strong><span style="font-size: 0.8em;">{{ (row.estimatedWeight % 1).toFixed(2).slice(1) }}</span> kg
</td>
<td style="text-align: right;">
  <strong>{{ Math.floor(row.actualWeight) }}</strong>
  <span style="font-size: 0.8em;">{{ (row.actualWeight % 1).toFixed(2).slice(1) }}</span> kg
</td>

<td style="text-align: right;">
  <strong>{{ Math.floor(row.pipeLength) }}</strong><span style="font-size: 0.8em;">{{ (row.pipeLength % 1).toFixed(2).slice(1) }}</span> m/DB
</td>


    <td><button @click="emit('remove')">削除</button></td>
  </tr>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useEstimateRow } from '../../composables/estimate';

defineProps<{ index: number }>();
const emit = defineEmits(['remove']);

const { row, shapes, materials, types, sizes, schedules, updateWeights } = useEstimateRow();
const lengthError = ref(false);

const resetFields = () => {
  row.type = '';
  row.material = '';
  row.size = '';
  row.schedule = '';
  row.length = 0;
  updateWeights();
};

const resetSize = () => {
  row.size = '';
  row.schedule = '';
  updateWeights();
};

const validateLength = () => {
  lengthError.value = row.length < 0 || isNaN(row.length);
  if (!lengthError.value) updateWeights();
};
</script>

<style src="./EstimateRow.css"></style>
