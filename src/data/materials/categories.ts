// src/data/materials/categories.ts
export const materialCategories: Record<string, MaterialName[]> = {

  ステンレス: [
    'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
  ],

  SGP: [
    'SGP_黒', 'SGP_白',
  ],
  
  ステンレス_304: [
    'SUS304TP_S_H', 'SUS304TP_S_C', 'SUS304TP_E_H', 'SUS304TP_E_C',
  ],
  ステンレス_304L: [
    'SUS304LTP_S_H', 'SUS304LTP_S_C', 'SUS304LTP_E_H', 'SUS304LTP_E_C',
  ],

  ステンレス_316: [
    'SUS316TP_S_H', 'SUS316TP_S_C', 'SUS316TP_E_H', 'SUS316TP_E_C',
  ],

  ステンレス_316L: [
    'SUS316LTP_S_H', 'SUS316LTP_S_C', 'SUS316LTP_E_H', 'SUS316LTP_E_C',
  ],

  ステンレス特殊: [
    'SUS430', 'SUS410', 'SUS329J4L',
  ],

  鉄: [
    'SS400','S45C',

  ],

    ゲート: [
    'ゲート・ダクタイル鋳鉄','ゲート・ダクタイル鋳鉄 (ねじ)'

  ],

  グローブ: [
    'グローブ・ダクタイル鋳鉄','グローブ・ダクタイル鋳鉄 (ねじ)'
  ],

  ボール: [
    'ボール・ダクタイル鋳鉄 (レバー)', 'ボール・ダクタイル鋳鉄 (ギア)',
    'ボール・ステンレス鋼 (レバー)', 'ボール・ステンレス鋼 (ギア)',
    'ボール・ステンレス鋼 (アクチェータ)', 'ボール・ステンレス鋼 (ねじ)',
  ],

  

  高圧: [
    'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STS370',
    'PG370',

  ],

  高温: [
    'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT480S', 'STPT480E',
    'PT370',
  ],

  ステンレス一般: [
    'SUS304TPA', 'SUS304LTPA', 'SUS316TPA', 'SUS316LTPA',
    'SUS304TPD', 'SUS304LTPD', 'SUS316TPD', 'SUS316LTPD',
  ],

  アーク溶接炭素鋼鋼管: [
    'STPY400',
  ],

  その他: [
    '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
  
  ]
};
