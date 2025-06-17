import { ref, computed } from 'vue';
import type { MaterialData, FittingData, ValveData } from '@/types/materials';
import pipesData from '@/data/materials/pipes.json';
import fittingsData from '@/data/materials/fittings.json';
import valvesData from '@/data/materials/valves.json';
import steelsData from '@/data/materials/steels.json';

const pipes = ref<MaterialData>(pipesData);
const fittings = ref<FittingData>(fittingsData);
const valves = ref<ValveData>(valvesData);
const steels = ref<MaterialData>(steelsData);

export function useMaterialData() {
  const inchMap: Record<number, number> = {
    15: 0.5, 20: 0.75, 25: 1, 32: 1.25, 40: 1.5,
    50: 2, 65: 2.5, 80: 3, 90: 3.5, 100: 4,
    125: 5, 150: 6, 200: 8, 250: 10, 300: 12,
    350: 14, 400: 16, 450: 18, 500: 20,
  };

  const getPipeWeight = (material: string, size: string, schedule: string) => {
    const sizeKey = size.replace('A', '');
    return pipes.value?.[material]?.[sizeKey]?.[schedule]?.weight ?? 0;
  };

  const getFittingWeight = (material: string, shape: string, size: string) => {
    const sizeKey = size.replace('A', '');
    return fittings.value?.[material]?.[shape]?.[sizeKey]?.weight ?? 0;
  };

  const getValveWeight = (material: string, shape: string, size: string) => {
    const sizeKey = size.replace('A', '');
    return valves.value?.[material]?.[shape]?.[sizeKey]?.weight ?? 0;
  };

  const getSteelWeight = (material: string, shape: string, size: string) => {
    return steels.value?.[material]?.[shape]?.[size]?.weight ?? 0;
  };

  const pipeSizes = computed(() => {
    const sizes: string[] = [];
    Object.values(pipes.value).forEach(material => {
      Object.keys(material).forEach(size => {
        if (!sizes.includes(`${size}A`)) sizes.push(`${size}A`);
      });
    });
    return sizes.sort();
  });

  const steelSizes = computed(() => {
    const sizes: string[] = [];
    Object.values(steels.value).forEach(material => {
      Object.values(material).forEach(shape => {
        Object.keys(shape).forEach(size => {
          if (!sizes.includes(size)) sizes.push(size);
        });
      });
    });
    return sizes.sort();
  });

  return {
    inchMap,
    pipes,
    fittings,
    valves,
    steels,
    getPipeWeight,
    getFittingWeight,
    getValveWeight,
    getSteelWeight,
    pipeSizes,
    steelSizes,
  };
}