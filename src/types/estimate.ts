export interface EstimateRow {
  shape: string;
  type?: string;
  material: string;
  size: string;
  schedule?: string;
  length: number;
  estimatedWeight: number;
  actualWeight: number;
  pipeLength: number;

  // 各フィールドに対応するバリデーションエラー
  errors?: {
    shape?: string;
    type?: string;
    material?: string;
    size?: string;
    schedule?: string;
    length?: string;
    estimatedWeight?: string;
    actualWeight?: string;
    pipeLength?: string;
  };
}
