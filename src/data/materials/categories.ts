// src/data/materials/categories.ts
export const materialCategories: Record<string, MaterialName[]> = {
  
  ステンレス: [
    'SUS304', 'SUS304L', 'SUS304TPD','SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L'
  ],
  鉄: [
    'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW',
    'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E','STS370',
    'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT480S', 'STPT480E',
    'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN',
    'STPT370S_N', 'STPT370E_N'
  ],
  その他: [
    '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄',
    '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン'
  ]
};
