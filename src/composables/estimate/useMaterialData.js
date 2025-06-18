import { ref } from 'vue';
import categories from '../../data/materials/categories.json';
import pipes from '../../data/materials/pipes.json';
import fittings from '../../data/materials/fittings.json';
import valves from '../../data/materials/valves.json';
import steels from '../../data/materials/steels.json';
export function useMaterialData() {
    const shapes = ref(categories.shapes);
    const pipeTypes = ref(categories.pipeTypes);
    const fittingTypes = ref(categories.fittingTypes);
    const valveTypes = ref(categories.valveTypes);
    const steelTypes = ref(categories.steelTypes);
    const filteredPipes = pipes.filter(p => !!p.type);
    const filteredFittings = fittings.filter(f => !!f.type);
    const filteredValves = valves.filter(v => !!v.type);
    const filteredSteels = steels.filter(s => !!s.type);
    const getItems = (shape) => {
        switch (shape) {
            case 'pipe': return filteredPipes;
            case 'fitting': return filteredFittings;
            case 'valve': return filteredValves;
            case 'steel': return filteredSteels;
            default: return [];
        }
    };
    const getMaterials = (shape, type) => {
        return [...new Set(getItems(shape)
                .filter(i => !type || i.type === type)
                .map(i => i.material))];
    };
    const getSizes = (shape, material, schedule, type) => {
        return [...new Set(getItems(shape)
                .filter(i => (!material || i.material === material) &&
                (!schedule || i.schedule === schedule) &&
                (!type || i.type === type))
                .map(i => i.size))];
    };
    const getSchedules = (shape, material, size, type) => {
        if (shape === 'steel')
            return [];
        return [...new Set(getItems(shape)
                .filter(i => (!type || i.type === type) &&
                (!material || i.material === material) &&
                (!size || i.size === size))
                .map(i => i.schedule)
                .filter(Boolean))];
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
//# sourceMappingURL=useMaterialData.js.map