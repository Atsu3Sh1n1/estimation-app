<template>
  <div class="row">
    <!-- 形状 -->
    <select v-model="localRow.shape">
      <option disabled value="" hidden>形状を選択</option>
      <optgroup v-for="group in shapeGroups" :key="group.groupName" :label="group.groupName">
        <option
          v-for="shape in group.shapes"
          :key="shape.value"
          :value="shape.value"
        >
          {{ shape.label }}
        </option>
      </optgroup>
    </select>

    <!-- 材質 -->
    <select v-model="localRow.material">
      <optgroup
        v-for="group in availableMaterialsByGroup"
        :key="group.groupName"
        :label="group.groupName"
      >
        <option
          v-for="mat in group.materials"
          :key="mat"
          :value="mat"
        >
          {{ mat }}
        </option>
      </optgroup>
    </select>

    <!-- JIS種別 -->
    <select v-model="localRow.jis" :class="jisClass">
      <option disabled value="" hidden>JISを選択</option>
      <option v-for="jis in availableJis" :key="jis" :value="jis">
        {{ jis }}
      </option>
    </select>

    <!-- サイズ -->
    <select v-model="localRow.size" :class="sizeClass">
      <option disabled value="" hidden>サイズを選択</option>
      <option
        v-for="(val, key) in pipeSizes[localRow.jis] || {}"
        :key="key"
        :value="key"
      >
        {{ key }}
      </option>
    </select>

    <!-- スケジュール -->
    <select v-model="localRow.schedule" :class="scheduleClass">
      <option disabled value="" hidden>スケジュールを選択</option>
      <option
        v-for="(val, key) in pipeSizes[localRow.jis]?.[localRow.size] || {}"
        :key="key"
        :value="key"
      >
        {{ key }}
      </option>
    </select>

    <!-- 長さ -->
    <input
      v-if="localRow.shape === 'pipe'"
      v-model.number="localRow.length"
      type="number"
      min="0"
      step="0.01"
      style="width: 80px"
      :class="{ error: !localRow.length }"
      placeholder="長さ(m)"
    />

    <!-- 個数 -->
    <input
      v-else
      v-model.number="localRow.quantity"
      type="number"
      min="0"
      step="1"
      style="width: 80px"
      :class="{ error: !localRow.quantity }"
      placeholder="個数"
    />

    <!-- 重量 -->
    <span>{{ weight.toFixed(3) }} kg</span>


<!-- 金額 -->
<span>
  {{
    (price * (shapePriceFactor[localRow.shape] ?? 1)).toLocaleString()
  }} 円
</span>

    <!-- 定尺本数 -->
    <span v-if="localRow.shape === 'pipe'">
      定尺 {{ pipeLengthCount.toFixed(0) }} 本
    </span>

    <button @click="$emit('remove')">削除</button>
  </div>
</template>

<script setup lang="ts">
import { shapeGroups } from '@/data/genres';
import { computed, watch, reactive } from 'vue';
import { useEstimateRow } from '@/composables/estimate/useEstimateRow';
import type { EstimateRow as EstimateRowType } from '@/types/estimate';
import { pipeSizes, fittingCompatibility, materialCategories, MaterialName } from '@/data/materials';
import { materialPrices } from '@/data/materials/materialPrices';

const props = defineProps<{
  initialRow: EstimateRowType;
}>();

const shapePriceFactor: Record<string, number> = {
  pipe: 2,
  elbow: 5,
  tee: 6,
  reducer: 4,
  cap: 3.5,
  flange: 3,
};


const emit = defineEmits<{
  (e: 'update', row: EstimateRowType & { weight: number }): void;
  (e: 'remove'): void;
}>();

const localRow = reactive({ ...props.initialRow });

// 材質候補
const availableMaterialsByGroup = computed(() => {
  const shapeInfo = fittingCompatibility[localRow.shape];
  const materials = shapeInfo?.materials ?? [];

  return Object.entries(materialCategories)
    .map(([groupName, mats]) => ({
      groupName,
      materials: mats.filter((m): m is MaterialName => materials.includes(m)),
    }))
    .filter(group => group.materials.length > 0);
});

// JIS候補
const availableJis = computed(() => {
  const shapeInfo = fittingCompatibility[localRow.shape];
  if (!shapeInfo) return [];
  return shapeInfo.jisMap?.[localRow.material] ?? [];
});

// クラス
const jisClass = computed(() => ({
  placeholder: localRow.jis === '',
  error: localRow.jis === '',
}));
const sizeClass = computed(() => ({
  placeholder: localRow.size === '',
  error: localRow.size === '',
}));
const scheduleClass = computed(() => ({
  placeholder: localRow.schedule === '',
  error: localRow.schedule === '',
}));

// 重量計算
const { weight } = useEstimateRow(localRow);

// 金額計算
const price = computed(() => {
  const unitPrice = materialPrices[localRow.material as MaterialName] ?? 0;
  return Math.round(weight.value * unitPrice);
});

// 定尺本数
const pipeLengthCount = computed(() => {
  if (localRow.shape !== 'pipe') return 0;
  const len = Number(localRow.length);
  if (!len || isNaN(len)) return 0;
  const isStainless = localRow.material.startsWith('SUS');
  const stdLength = isStainless ? 4 : 5.5;
  return Math.ceil(len / stdLength);
});

// 初期化ウォッチ
watch(
  () => [localRow.shape, localRow.material],
  () => {
    localRow.jis = '';
    localRow.size = '';
    localRow.schedule = '';
  }
);

// 通知
watch(
  localRow,
  () => {
    emit('update', { ...localRow, weight: weight.value });
  },
  { deep: true, immediate: true }
);
</script>

<style src="./EstimateRow.css"></style>
