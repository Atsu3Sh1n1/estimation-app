import { computed } from 'vue';
import { getPipeWeight, getFittingWeight } from './usePipeCalculator';
import type { EstimateRow } from '@/types/estimate';

/**
 * 定尺本数の計算対象となる形状一覧
 */
export const SHAPES_WITH_FIXED_LENGTH = [
  'pipe',
  'pipe2',
  'Flat_Bar',
  'Angle',
  'ABS_Angle',
  'Channel',
  'PCF_Channel',
  'H_Beam',
  'Round_Bar',
  'I_Beam',
  'Square_Pipe',
  'Round_Pipe',
  'Square_Bar',
  'Plate',
  'Light_Channel',
  'Lip_Channel',
];

/**
 * 重量算出・定尺本数算出・UI表示ラベル
 */
export function useEstimateRow(row: EstimateRow) {
  const weight = computed(() => {
    return SHAPES_WITH_FIXED_LENGTH.includes(row.shape)
      ? getPipeWeight(row)
      : getFittingWeight(row);
  });

  const pipeLengthCount = computed(() => {
    if (!SHAPES_WITH_FIXED_LENGTH.includes(row.shape)) return 0;
    const len = Number(row.length);
    if (!len || isNaN(len)) return 0;
    const isStainless = row.material?.startsWith('SUS');
    const stdLength = isStainless ? 4 : 5.5;
    return Math.ceil(len / stdLength);
  });

  const thicknessLabel = computed(() => {
    const shape = row.shape;
    if (shape.includes('Valve')) return 'クラス';
    switch (shape) {
      case 'pipe':
      case 'pipe2':
      case 'elbow':
      case 'shortelbow':
      case 'halfelbow':
      case 'halfshortelbow':
      case 'tee':
      case 'tee_reducing':
      case 'reducer':
      case 'reducer':
        return 'スケジュールを選択';

      case 'flat_flange':
      case 'BL_flat_flange':
      case 'flat_flange':
      case 'BL_flat_flange':
      case 'Ball_Valve_TOYO':
      case 'Valve_KITZ':
        return 'クラスを選択';

      case 'bolt':
      case 'bolt_set':
        return '長さを選択';
      case 'Flat_Bar':
      case 'Angle':
      case 'Channel':
      case 'H_Beam':
      case 'ABS_Angle':
      case 'PCF_Channel':
        return '厚みを選択';

      default:
        return ''; // 非対応時はラベル表示なし
    }
  });


  return {
    weight,
    pipeLengthCount,
    thicknessLabel,
  };
}
