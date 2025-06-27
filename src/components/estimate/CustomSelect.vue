<template>
  <div
    class="custom-select"
    tabindex="0"
    @click="toggleOpen"
    @blur="close"
    ref="wrapper"
  >
    <div class="selected">{{ selectedLabel }}</div>
    <div v-if="open" class="dropdown" ref="dropdown" @wheel.prevent.stop="onWheel">
      <div
        v-for="option in options"
        :key="option.value"
        class="option"
        :class="{ selected: option.value === modelValue }"
        @click.stop="select(option.value)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  modelValue: string | number | null;
  options: { value: string | number; label: string }[];
  placeholder?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const open = ref(false);
const wrapper = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);

const toggleOpen = () => {
  open.value = !open.value;
};

const close = () => {
  open.value = false;
};

const select = (val: string | number) => {
  emit('update:modelValue', val);
  close();
};

const selectedLabel = computed(() => {
  const opt = props.options.find((o) => o.value === props.modelValue);
  return opt ? opt.label : props.placeholder || '選択してください';
});

// マウスホイールスクロール量を調整（0.3倍でゆったりスクロール）
const onWheel = (event: WheelEvent) => {
  event.preventDefault();
  if (dropdown.value) {
    dropdown.value.scrollTop += event.deltaY * 1;
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 180px;
  border: 1px solid #ccc;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  background: #fff;
  outline: none;
}
.selected {
  padding: 8px 12px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 180px;
  overflow-y: auto;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
  scroll-behavior: smooth;
  z-index: 100;
  border-radius: 0 0 4px 4px;
}

/* スクロールバーカスタム (Webkit系) */
.dropdown::-webkit-scrollbar {
  width: 8px;
}
.dropdown::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}
.dropdown::-webkit-scrollbar-thumb {
  background: #007acc;
  border-radius: 4px;
}

/* Firefox */
.dropdown {
  scrollbar-width: thin;
  scrollbar-color: #007acc #f0f0f0;
}

.option {
  padding: 8px 12px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.option:hover {
  background-color: #e6f0ff;
}
.option.selected {
  background-color: #007acc;
  color: white;
}
</style>
