<template>
  <div class="row">
    <!-- 形状 -->
    <select v-model="localRow.shape">
      <option value="pipe">パイプ</option>
      <option value="elbow">90°エルボ(ロング)</option>
      <option value="shortelbow">90°エルボ(ショート)</option>
      <option value="halfelbow">45°エルボ(ロング)</option>
      <option value="halfshortelbow">45°エルボ(ショート)</option>

      <option value="tee">調整中*TEE(同径)</option>
      <option value="tee_reducing">調整中*TEE(異径)</option>
      <option value="reducer">レジューサ</option>
      <option value="lap_joint">ラップフランジ</option>
      <option value="flat_flange">板フランジ</option>
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
    <button @click="$emit('remove')">削除</button>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, reactive } from 'vue';
import { useEstimateRow } from '@/composables/estimate/useEstimateRow';
import type { EstimateRow as EstimateRowType } from '@/types/estimate';
import { pipeSizes, fittingCompatibility, MaterialName, materialCategories } from '@/data/materials';

const props = defineProps<{
  initialRow: EstimateRowType;
}>();

const emit = defineEmits<{
  (e: 'update', row: EstimateRowType & { weight: number }): void;
  (e: 'remove'): void;
}>();

const localRow = reactive({ ...props.initialRow });

// 材質候補（形状に応じて切替し、カテゴリ分けして表示用）
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

// JIS 候補（材質によって制限）
const availableJis = computed(() => {
  const shapeInfo = fittingCompatibility[localRow.shape];
  if (!shapeInfo) return [];

  const jisList = shapeInfo.jisMap?.[localRow.material];
  return jisList ?? [];
});

// v-modelが変更されたときに項目を初期化（リセット時に赤枠表示を復活させるため）
watch(
  () => [localRow.shape, localRow.material],
  () => {
    localRow.jis = '';
    localRow.size = '';
    localRow.schedule = '';
  }
);

// 動的クラス computed化（強制再評価）
const jisClass = computed(() => ({
  placeholder: localRow.jis === '',
  error: localRow.jis === ''
}));

const sizeClass = computed(() => ({
  placeholder: localRow.size === '',
  error: localRow.size === ''
}));

const scheduleClass = computed(() => ({
  placeholder: localRow.schedule === '',
  error: localRow.schedule === ''
}));

// 重量計算ロジック
const { weight } = useEstimateRow(localRow);

// 更新通知
watch(
  localRow,
  () => {
    emit('update', { ...localRow, weight: weight.value });
  },
  { deep: true, immediate: true }
);
</script>

<style scoped>
select.placeholder {
  color: #888;
}
select.error,
input.error {
  border: 1px solid red;
}
</style>


<style src="./EstimateRow.css"></style>

