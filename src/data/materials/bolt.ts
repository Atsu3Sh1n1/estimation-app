// bolt.ts

// 対応材質一覧
export const boltMaterials = [
  'SS400', 'S45C', 'SUS304', '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900',
];

// 材質ごとの対応JIS規格
export const boltJisMapData: Record<string, string[]> = Object.fromEntries(
  boltMaterials.map(m => [m, ['B1180','B1180_B1181']])
);


    