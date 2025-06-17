<template> 
  <tr>
    <td>
      <select v-model="row.shape" @change="resetFields" :disabled="!shapes.length">
        <option value="">選択</option>
        <option v-for="shape in shapes" :key="shape.id" :value="shape.id">{{ shape.name }}</option>
      </select>
    </td>

    <td>
      <select v-model="row.type" @change="resetSize" :disabled="types.length === 0">
        <option value="">選択</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </td>

    <td>
      <select
        v-model="row.material"
        @change="resetSize"
        :disabled="row.shape !== 'pipe' && !row.type"
      >
        <option value="">選択</option>
        <option v-for="material in materials" :key="material" :value="material">{{ material }}</option>
      </select>
    </td>

    <td>
      <select v-model="row.size" @change="updateWeights" :disabled="!sizes.length">
        <option value="">選択</option>
        <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
      </select>
    </td>

    <td>
      <!-- 鋼材の場合はスケジュール選択を無効化 -->
      <select
        v-model="row.schedule"
        @change="updateWeights"
        :disabled="row.shape === 'steel' || !schedules.length"
      >
        <option value="">選択</option>
        <option v-for="schedule in schedules" :key="schedule" :value="schedule">{{ schedule }}</option>
      </select>
    </td>

    <td>
      <input
        type="number"
        v-model.number="row.length"
        @input="validateLength"
        min="0"
        step="0.01"
        :class="{ error: lengthError }"
      />
    </td>

    <td>{{ row.estimatedWeight.toFixed(2) }} kg</td>
    <td>{{ row.actualWeight.toFixed(2) }} kg</td>
    <td>{{ row.pipeLength.toFixed(2) }} インチ・m</td>

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
