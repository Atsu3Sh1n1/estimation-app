export interface Shape {
  id: string;
  name: string;
}

export interface Material {
  name: string;
}

export interface Pipe {
  material: string;
  size: string;
  schedule: string;
  weightPerMeter: number;
}

export interface Fitting {
  type: string;
  material: string;
  size: string;
  schedule: string;  // ←必須化
  weight: number;
  lengthCoefficient: number;
}

export interface Valve {
  type: string;
  material: string;
  size: string;
  schedule: string;  // ←必須化
  weight: number;
  lengthCoefficient: number;
}


export interface Steel {
  type: string;
  material: string;
  size: string;
  weightPerMeter: number;
}