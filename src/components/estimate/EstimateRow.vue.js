import { ref } from 'vue';
import { useEstimateRow } from '../../composables/estimate/useEstimateRow.ts';
const __VLS_props = defineProps();
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
    if (!lengthError.value)
        updateWeights();
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (__VLS_ctx.resetFields) },
    value: (__VLS_ctx.row.shape),
    disabled: (!__VLS_ctx.shapes.length),
    ...{ class: ({ 'error': !__VLS_ctx.row.shape }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "",
});
for (const [shape] of __VLS_getVForSourceType((__VLS_ctx.shapes))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (shape.id),
        value: (shape.id),
    });
    (shape.name);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (__VLS_ctx.resetSize) },
    value: (__VLS_ctx.row.type),
    disabled: (__VLS_ctx.types.length === 0),
    ...{ class: ({ 'error': !__VLS_ctx.row.type }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "",
});
for (const [type] of __VLS_getVForSourceType((__VLS_ctx.types))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (type),
        value: (type),
    });
    (type);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (__VLS_ctx.resetSize) },
    value: (__VLS_ctx.row.material),
    disabled: (!__VLS_ctx.row.type),
    ...{ class: ({ 'error': !__VLS_ctx.row.material || !__VLS_ctx.row.type }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "",
});
for (const [material] of __VLS_getVForSourceType((__VLS_ctx.materials))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (material),
        value: (material),
    });
    (material);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (__VLS_ctx.updateWeights) },
    value: (__VLS_ctx.row.schedule),
    disabled: (__VLS_ctx.row.shape === 'steel' || !__VLS_ctx.schedules.length),
    ...{ class: ({ 'error': !__VLS_ctx.row.schedule && __VLS_ctx.row.shape !== 'steel' }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "",
});
for (const [schedule] of __VLS_getVForSourceType((__VLS_ctx.schedules))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (schedule),
        value: (schedule),
    });
    (schedule);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (__VLS_ctx.updateWeights) },
    value: (__VLS_ctx.row.size),
    disabled: (!__VLS_ctx.sizes.length),
    ...{ class: ({ 'error': !__VLS_ctx.row.size }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "",
});
for (const [size] of __VLS_getVForSourceType((__VLS_ctx.sizes))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: (size),
        value: (size),
    });
    (size);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.validateLength) },
    type: "number",
    min: "0",
    step: "0.1",
    ...{ class: ({ error: __VLS_ctx.lengthError || __VLS_ctx.row.length === 0 }) },
});
(__VLS_ctx.row.length);
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(Math.floor(__VLS_ctx.row.estimatedWeight));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ style: {} },
});
((__VLS_ctx.row.estimatedWeight % 1).toFixed(2).slice(1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(Math.floor(__VLS_ctx.row.actualWeight));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ style: {} },
});
((__VLS_ctx.row.actualWeight % 1).toFixed(2).slice(1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
(Math.floor(__VLS_ctx.row.pipeLength));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ style: {} },
});
((__VLS_ctx.row.pipeLength % 1).toFixed(2).slice(1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('remove');
        } },
});
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            row: row,
            shapes: shapes,
            materials: materials,
            types: types,
            sizes: sizes,
            schedules: schedules,
            updateWeights: updateWeights,
            lengthError: lengthError,
            resetFields: resetFields,
            resetSize: resetSize,
            validateLength: validateLength,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=EstimateRow.vue.js.map