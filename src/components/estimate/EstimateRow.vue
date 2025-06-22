<template>
  <div class="row">
    <!-- 形状 -->
    <select v-model="localRow.shape">
      <option value="pipe">パイプ</option>
      <option value="elbow">90°エルボ(ロング)</option>
      <option value="shortelbow">90°エルボ(ショート)</option>
      <option value="tee">TEE(同径)</option>
      <option value="tee_reducing">TEE(異径)</option>
      <option value="reducer">レジューサ</option>
       <option value="reducer">ラップフランジ</option>
        <option value="reducer">板フランジ</option>

    </select>

    <!-- 材質 -->
    <select v-model="localRow.material">
      <option v-for="mat in availableMaterials" :key="mat" :value="mat">
        {{ mat }}
      </option>
    </select>

    <!-- JIS種別 -->
    <select v-model="localRow.jis">
      <option v-for="jis in availableJis" :key="jis" :value="jis">
        {{ getJisLabel(jis) }}
      </option>
    </select>

    <!-- サイズ -->
    <select v-model="localRow.size">
      <option
        v-for="(val, key) in pipeSizes[localRow.jis] || {}"
        :key="key"
        :value="key"
      >
        {{ key }}
      </option>
    </select>

    <!-- スケジュール -->
    <select v-model="localRow.schedule">
      <option
        v-for="(val, key) in pipeSizes[localRow.jis]?.[localRow.size] || {}"
        :key="key"
        :value="key"
      >
        {{ key }}
      </option>
    </select>

    <!-- 長さ or 個数 -->
    <input
      v-if="localRow.shape === 'pipe'"
      v-model.number="localRow.length"
      type="number"
      min="0"
      step="0.01"
      style="width: 80px"
      placeholder="長さ(m)"
    />
    <input
      v-else
      v-model.number="localRow.quantity"
      type="number"
      min="0"
      step="1"
      style="width: 80px"
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
import { pipeSizes, materialDensities } from '@/data/materials';
import type { EstimateRow as EstimateRowType } from '@/types/estimate';
import { fittingCompatibility } from '@/data/materials/fittingCompatibility';

const props = defineProps<{
  initialRow: EstimateRowType;
}>();

const emit = defineEmits<{
  (e: 'update', row: EstimateRowType & { weight: number }): void;
  (e: 'remove'): void;
}>();

const localRow = reactive({ ...props.initialRow });

// 材質候補（形状に応じて切替）
const availableMaterials = computed(() => {
  const shapeInfo = fittingCompatibility[localRow.shape];
  return shapeInfo?.materials ?? [];
});

// JIS 候補（材質によって制限）
const availableJis = computed(() => {
  const shapeInfo = fittingCompatibility[localRow.shape];
  if (!shapeInfo) return [];

  const jisList = shapeInfo.jisMap?.[localRow.material];
  return jisList ?? [];
});

// JISの表示名（継手のみ変換、パイプはそのまま）
const jisLabelMap: Record<string, string> = {
  G3459: 'B2312/2313',
  G3454: 'B2312/2313',
  G3452: 'B2311',
};

function getJisLabel(jis: string): string {
  return localRow.shape === 'pipe' ? jis : (jisLabelMap[jis] || jis);
}

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

<style src="./EstimateRow.css"></style>

