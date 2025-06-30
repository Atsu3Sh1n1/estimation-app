// useEstimateSheet.ts
import { computed } from 'vue';
import type { EstimateRow } from '@/types/estimate';

export function getNominalInches(size: string): number {
  const sizeToNominalInch: Record<string, number> = {
    '6A': 0.25, '8A': 0.25, '10A': 0.375, '15A': 0.5, '20A': 0.75, '25A': 1,
    '32A': 1.25, '40A': 1.5, '50A': 2, '65A': 2.5, '80A': 3, '90A': 3.5,
    '100A': 4, '125A': 5, '150A': 6, '175A': 7, '200A': 8, '225A': 9,
    '250A': 10, '300A': 12, '350A': 14, '400A': 16, '450A': 18, '500A': 20,
    '550A': 22, '600A': 24, '650A': 26, '700A': 28, '750A': 30, '800A': 32,
    '850A': 34, '900A': 36, '1000A': 40, '1100A': 44, '1200A': 48,
    '1350A': 54, '1500A': 60,
  };
  return sizeToNominalInch[size] ?? 0;
}

export function useTotalFittingInches(rows: (EstimateRow & { id: number })[]) {
  return computed(() => {
    return rows.reduce((acc, row) => {
      if (!row.size || !row.shape) return acc;
      const shape = row.shape;
      const quantity = Number(row.quantity) || 0;
      const inch = getNominalInches(row.size);

      if (['elbow', 'shortelbow', 'halfelbow', 'halfshortelbow'].includes(shape)) {
        return acc + inch * 2 * quantity;
      }

      if (['flat_flange'].includes(shape)) {
        return acc + inch * 3 * quantity;
      }

      if (['tee', 'tee_reducing', 'reducer'].includes(shape)) {
        const totalInch = row.size
          .split('*')
          .map((s) => getNominalInches(s.trim()))
          .reduce((sum, i) => sum + i, 0);
        return acc + totalInch * quantity;
      }

      if (['pipe', 'pipe2'].includes(shape)) {
        const length = Number(row.length) || 0;
        if (length <= 0 || inch <= 0) return acc;

        const isStainless = row.material?.startsWith('SUS');
        const stdLength = isStainless ? 4 : 5.5;
        const numOfRings = Math.ceil(length / stdLength);
        return acc + numOfRings * inch;
      }

      return acc;
    }, 0);
  });
}
