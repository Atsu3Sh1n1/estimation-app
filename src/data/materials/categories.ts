// src/data/materials/categories.ts
export const materialCategories: Record<string, MaterialName[]> = {

  ステンレス_溶接用: [
    'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
  ],

  ステンレス_ねじ用: [
    'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',
  ],

    SGP_溶接用: [
    'SGP_黒', 'SGP_白', 
  ],
    SGP_ネジ用: [
    '可鍛鋳鉄_黒', '可鍛鋳鉄_白', 
  ],




  ステンレス配管用304: [
    'SUS304TP_S_H', 'SUS304TP_S_C', 'SUS304TP_E_H', 'SUS304TP_E_C',
  ],
  ステンレス配管用304L: [
    'SUS304LTP_S_H', 'SUS304LTP_S_C', 'SUS304LTP_E_H', 'SUS304LTP_E_C',
  ],

  ステンレス配管用316: [
    'SUS316TP_S_H', 'SUS316TP_S_C', 'SUS316TP_E_H', 'SUS316TP_E_C',
  ],

  ステンレス配管用316L: [
    'SUS316LTP_S_H', 'SUS316LTP_S_C', 'SUS316LTP_E_H', 'SUS316LTP_E_C',
  ],

  ステンレス配管用特殊: [
    'SUS430', 'SUS410', 'SUS329J4L',
  ],


  高圧: [
    'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STS370',
    'PG370',

  ],

  高温: [
    'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT480S', 'STPT480E',
    'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN',
    'STPT370S_N', 'STPT370E_N',
    'PT370',
  ],

  ステンレス一般: [
    'SUS304TPD', 'SUS304LTPD', 'SUS316TPD', 'SUS316LTPD',
  ],

  スパイラル鋼管: [
    'STPY400',
  ],



  その他: [
    '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄',
    '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン'
  ]
};
