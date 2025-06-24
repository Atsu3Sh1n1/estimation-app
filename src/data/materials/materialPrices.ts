import type { MaterialName } from './materialDensities';

/**
 * materialPrices はすべて 1kg あたりの単価（円/kg）で統一しています。
 * 金・プラチナ・ダイヤモンドなどの貴金属は市場価格に近いおおよその値です。
 */
export const materialPrices: Record<MaterialName, number> = {
  SGP黒EG: 120,
  SGP黒鍛BH: 130,
  SGP白EG: 125,
  SGP白鍛BC: 130,
  SGPW: 128,

  STS370: 140,

  STPG370S: 145,
  STPG370E: 150,
  STPG410S: 155,
  STPG410E: 160,

  STPT370S: 148,
  STPT370E: 153,
  STPT410S: 158,
  STPT410E: 163,
  STPT480S: 170,
  STPT480E: 175,

  STPT370S_W: 150,
  STPT370E_W: 155,
  STPT370S_WN: 152,
  STPT370E_WN: 157,
  STPT370S_N: 149,
  STPT370E_N: 154,

  SUS304: 750,
  SUS304L: 740,
  SUS304TPD: 760,

  SUS316: 850,
  SUS316L: 840,
  SUS430: 600,
  SUS410: 580,
  SUS329J4L: 900,

  // 貴金属・特殊材質は市場価格に近い1kg単価（おおよそ）
  金24K: 10000000,       // 1g=10,000円 → 1kg=10,000,000円
  銀Ag: 120000,          // 1g=120円 → 1kg=120,000円
  銅Cu: 1100,            // 1kg=1,100円（既存価格）
  プラチナ: 4000000,      // 1g=4,000円 → 1kg=4,000,000円
  チタン: 3000,           // 既存価格維持（相場安め）
  アルミ: 500,            // 既存価格維持
  鋳鉄: 400,              // 既存価格維持
  塩ビPVC: 200,           // 既存価格維持
  PEポリエチレン: 150,     // 既存価格維持
  ダイヤモンド: 100000000, // ダイヤは宝石価格としてダミーで1億円/kg
  タングステン: 2500,      // 既存価格維持
};
