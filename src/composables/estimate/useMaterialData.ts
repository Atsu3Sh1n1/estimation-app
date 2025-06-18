import { ref } from 'vue';
import categories from '../../data/materials/categories.json';
import pipes from '../../data/materials/pipes.json';
import fittings from '../../data/materials/fittings.json';
import valves from '../../data/materials/valves.json';
import steels from '../../data/materials/steels.json';

import type { Shape, Pipe, Fitting, Valve, Steel } from '../../types';

export function useMaterialData() {
  const shapes = ref<Shape[]>(categories.shapes);
  const pipeTypes = ref<string[]>(categories.pipeTypes);
  const fittingTypes = ref<string[]>(categories.fittingTypes);
  const valveTypes = ref<string[]>(categories.valveTypes);
  const steelTypes = ref<string[]>(categories.steelTypes);

  const filteredPipes = pipes.filter(p => !!p.type);
  const filteredFittings = fittings.filter(f => !!f.type);
  const filteredValves = valves.filter(v => !!v.type);
  const filteredSteels = steels.filter(s => !!s.type);

  const getItems = (shape?: string): (Pipe | Fitting | Valve | Steel)[] => {
    switch (shape) {
      case 'pipe': return filteredPipes;
      case 'fitting': return filteredFittings;
      case 'valve': return filteredValves;
      case 'steel': return filteredSteels;
      default: return [];
    }
  };

  const getMaterials = (shape?: string, type?: string): string[] => {
    return [...new Set(
      getItems(shape)
        .filter(i => !type || i.type === type)
        .map(i => i.material)
    )];
  };

  const getSizes = (shape?: string, material?: string, schedule?: string, type?: string): string[] => {
    return [...new Set(
      getItems(shape)
        .filter(i =>
          (!material || i.material === material) &&
          (!schedule || (i as Pipe | Fitting | Valve).schedule === schedule) &&
          (!type || i.type === type)
        )
        .map(i => i.size)
    )];
  };


  const getSchedules = (
    shape?: string,
    material?: string,
    size?: string,
    type?: string
  ): string[] => {
    if (shape === 'steel') return [];

    return [...new Set(
      getItems(shape)
        .filter(i =>
          (!type || i.type === type) &&
          (!material || i.material === material) &&
          (!size || i.size === size)
        )
        .map(i => (i as Pipe | Fitting | Valve).schedule)
        .filter(Boolean)
    )];
  };

  return {
    shapes,
    pipeTypes,
    fittingTypes,
    valveTypes,
    steelTypes,
    getMaterials,
    getSizes,
    getSchedules,
    pipes: filteredPipes,
    fittings: filteredFittings,
    valves: filteredValves,
    steels: filteredSteels,
  };
}
