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
  
  STPY400:120,

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
  SUS304TP_S_H: 750,
  SUS304TP_S_C: 750,
  SUS304TP_E_H: 750,
  SUS304TP_E_C: 750,

  SUS304L: 740,
  SUS304TPD: 760,

  SUS316: 850,
  SUS316L: 840,
  SUS430: 600,
  SUS410: 580,
  SUS329J4L: 900,

  
  金24K: 15399100,      
  銀Ag: 158400,
  銅Cu: 1549,
  プラチナ: 4942050,    
  チタン: 3000,         
  アルミ: 404,          
  鋳鉄: 400,            
  塩ビPVC: 200,         
  PEポリエチレン: 150,     
  ダイヤモンド: 1000000000, 
  タングステン: 2500,      
};
