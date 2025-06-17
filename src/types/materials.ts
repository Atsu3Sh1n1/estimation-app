export interface MaterialData {
  [material: string]: {
    [size: string]: {
      [schedule: string]: {
        weight: number;
      };
    };
  };
}

export interface FittingData {
  coefficients: Record<string, number>;
  [material: string]: {
    [shape: string]: {
      [size: string]: {
        weight: number;
      };
    };
  };
}

export interface ValveData {
  coefficients: Record<string, number>;
  [material: string]: {
    [shape: string]: {
      [size: string]: {
        weight: number;
      };
    };
  };
}