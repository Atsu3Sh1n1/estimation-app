import { ref } from 'vue';
import categories from '../../data/materials/categories.json';
import pipes from '../../data/materials/pipes.json';
import fittings from '../../data/materials/fittings.json';
import valves from '../../data/materials/valves.json';
import steels from '../../data/materials/steels.json';

import type { Shape, Pipe, Fitting, Valve, Steel } from '../../types';

export function useMaterialData() {
  const shapes = ref<Shape[]>(categories.shapes);
  const fittingTypes = ref<string[]>(categories.fittingTypes);
  const valveTypes = ref<string[]>(categories.valveTypes);
  const steelTypes = ref<string[]>(categories.steelTypes);

  const getMaterials = (shape: string, type?: string): string[] => {
    let items: (Pipe | Fitting | Valve | Steel)[] = [];

    if (shape === 'pipe') items = pipes;
    else if (shape === 'fitting') items = type ? fittings.filter(f => f.type === type) : fittings;
    else if (shape === 'valve') items = type ? valves.filter(v => v.type === type) : valves;
    else if (shape === 'steel') items = steels;

    return [...new Set(items.map(item => item.material))];
  };

  const getSizes = (shape: string, material: string, type?: string): string[] => {
    let items: (Pipe | Fitting | Valve | Steel)[] = [];

    if (shape === 'pipe') items = pipes;
    else if (shape === 'fitting') items = fittings.filter(f => !type || f.type === type);
    else if (shape === 'valve') items = valves.filter(v => !type || v.type === type);
    else if (shape === 'steel') items = steels.filter(s => !type || s.type === type);

    return [...new Set(items.filter(i => i.material === material).map(i => i.size))];
  };

  const getSchedules = (shape: string, material: string, size: string, type?: string): string[] => {
    let items: (Pipe | Fitting | Valve)[] = [];

    if (shape === 'pipe') items = pipes;
    else if (shape === 'fitting') items = fittings.filter(f => !type || f.type === type);
    else if (shape === 'valve') items = valves.filter(v => !type || v.type === type);
    else return [];

    return [...new Set(
      items
        .filter(i => i.material === material && i.size === size)
        .map(i => i.schedule)
        .filter(schedule => !!schedule)
    )];
  };

  return {
    shapes,
    fittingTypes,
    valveTypes,
    steelTypes,
    getMaterials,
    getSizes,
    getSchedules,
    pipes,
    fittings,
    valves,
    steels,
  };
}
