<script setup lang="ts">
import { ref } from 'vue';
import { useEstimateRow } from '../../composables/estimate/useEstimateRow';

const { id, initialRow } = defineProps<{ id: number; initialRow: any }>();

const emit = defineEmits<{
  (e: 'remove', id: number): void;
}>();

const { row, shapes, materials, types, sizes, schedules, updateWeights } = useEstimateRow(initialRow);

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

const onRemove = () => {
  emit('remove', id);
};
</script>

<template>
  <tr>
    <td>
      <select
        v-model="row.shape"
        @change="resetFields"
        :disabled="!shapes.length"
        :class="{ error: !row.shape }"
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
        :class="{ error: !row.type }"
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
        :class="{ error: !row.material || !row.type }"
      >
        <option value="">選択</option>
        <option v-for="material in materials" :key="material" :value="material">{{ material }}</option>
      </select>
    </td>

    <td>
      <select
        v-model="row.schedule"
        @change="updateWeights"
        :disabled="row.shape === 'steel' || !schedules.length"
        :class="{ error: !row.schedule && row.shape !== 'steel' }"
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
        :class="{ error: !row.size }"
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
      <strong>{{ Math.floor(row.estimatedWeight) }}</strong>
      <span style="font-size: 0.8em;">{{ (row.estimatedWeight % 1).toFixed(1).slice(1) }}</span>
    </td>
    <td style="text-align: right;">
      <strong>{{ Math.floor(row.actualWeight) }}</strong>
      <span style="font-size: 0.8em;">{{ (row.actualWeight % 1).toFixed(3).slice(1) }}</span>
    </td>
    <td style="text-align: right;">
      <strong>{{ Math.floor(row.pipeLength) }}</strong>
      <span style="font-size: 0.8em;">{{ (row.pipeLength % 1).toFixed(2).slice(1) }}</span>
    </td>

    <td>
      <button @click="onRemove">削除</button>
    </td>
  </tr>
</template>

<style src="./EstimateRow.css"></style>
