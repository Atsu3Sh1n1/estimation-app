// src/data/materials/categories.ts
export const materialCategories: Record<string, MaterialName[]> = {

  ステンレス: [
    'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
  ],

  SGP: [
    'SGP黒 5.5m', 'SGP白 5.5m', 'SGP白ネジ付 5.5m', 'SGP白ネジ付 4m', 'SGPW', 'SGP_黒', 'SGP_白',
  ],
  
  ステンレス_304: [
    'SUS304_TP_A', 'SUS304_TP_Y', 'SUS304_TP_Y_S','SUS304_TP_S_H', 'SUS304_TP_S_C', 'SUS304_TP_E_H', 'SUS304_TP_E_C',
  ],
  ステンレス_304L: [
    'SUS304L_TP_A', 'SUS304L_TP_Y', 'SUS304L_TP_Y_S', 'SUS304L_TP_S_H', 'SUS304L_TP_S_C', 'SUS304L_TP_E_H', 'SUS304L_TP_E_C',
  ],

  ステンレス_316: [
    'SUS316_TP_A', 'SUS316_TP_Y', 'SUS316_TP_Y_S','SUS316_TP_S_H', 'SUS316_TP_S_C', 'SUS316_TP_E_H', 'SUS316_TP_E_C',
  ],

  ステンレス_316L: [
    'SUS316L_TP_A', 'SUS316L_TP_Y', 'SUS316L_TP_Y_S','SUS316L_TP_S_H', 'SUS316L_TP_S_C', 'SUS316L_TP_E_H', 'SUS316L_TP_E_C',
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
    'SUS304_TPD', 'SUS304L_TPD', 'SUS316_TPD', 'SUS316L_TPD',
  ],

  アーク溶接炭素鋼鋼管: [
    'STPY400',
  ],

  その他: [
    '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
  
  ]
};
