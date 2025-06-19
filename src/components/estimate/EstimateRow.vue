<!-- EstimateRow.vue -->
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

    <!-- スケジュール -->
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

    <!-- サイズ -->
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

    <!-- 長さ入力 -->
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

    <!-- 見積重量 -->
    <td style="text-align: right;">
      <strong>{{ Math.floor(row.estimatedWeight) }}</strong>
      <span style="font-size: 0.8em;">{{ (row.estimatedWeight % 1).toFixed(2).slice(1) }}</span>
    </td>

    <!-- 実重量 -->
    <td style="text-align: right;">
      <strong>{{ Math.floor(row.actualWeight) }}</strong>
      <span style="font-size: 0.8em;">{{ (row.actualWeight % 1).toFixed(2).slice(1) }}</span>
    </td>

    <!-- m/DB -->
    <td style="text-align: right;">
      <strong>{{ Math.floor(row.pipeLength) }}</strong>
      <span style="font-size: 0.8em;">{{ (row.pipeLength % 1).toFixed(2).slice(1) }}</span>
    </td>

    <!-- 削除ボタン -->
    <td><button @click="emit('remove', index)">削除</button></td>
  </tr>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useEstimateRow } from '@/composables/estimate/useEstimateRow'; // ✅ これでOK

const props = defineProps<{
  index: number;
  row: any;
}>();

const emit = defineEmits<{
  (e: 'remove', index: number): void;
}>();

// ロジック
const { shapes, materials, types, sizes, schedules, updateWeights } = useEstimateRow(props.row);
const lengthError = ref(false);

const resetFields = () => {
  props.row.type = '';
  props.row.material = '';
  props.row.size = '';
  props.row.schedule = '';
  props.row.length = 0;
  updateWeights();
};

const resetSize = () => {
  props.row.size = '';
  props.row.schedule = '';
  updateWeights();
};

const validateLength = () => {
  lengthError.value = props.row.length < 0 || isNaN(props.row.length);
  if (!lengthError.value) updateWeights();
};
</script>

<style src="./EstimateRow.css" scoped></style>
