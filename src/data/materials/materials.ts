export const materialDensities = {
    SGP黒EG: 7850,
    SGP黒鍛BH: 7850,
    SGP白EG: 7850,
    SGP白鍛BC: 7850,
    SGPW: 7850,

    STS370: 7850,

    // STPG（圧力配管用） JIS G3454
    STPG370S: 7850,   // 継目あり（Seam）
    STPG370E: 7850,   // 継目なし（Electric Welded）
    STPG410S: 7850,
    STPG410E: 7850,

    // STPT（ねじ込み配管用） JIS G3456
    STPT370S: 7850,   // 継目あり（Seam）
    STPT370E: 7850,   // 継目なし（Electric Welded）
    STPT410S: 7850,   // 継目あり（強度410）
    STPT410E: 7850,   // 継目なし（強度410）
    STPT480S: 7850,   // 継目あり（Seam） 強度480
    STPT480E: 7850, 
    
    // 継目なし（Electric Welded） 強度480
    // 亜鉛めっき（白管）などのバリエーション（便宜的に）
    STPT370S_W: 7850,    // 白管・継目あり
    STPT370E_W: 7850,    // 白管・継目なし
    STPT370S_WN: 7850,   // 白管・継目あり・ねじあり
    STPT370E_WN: 7850,   // 白管・継目なし・ねじあり

    STPT370S_N: 7850,    // 黒管・継目あり・ねじあり
    STPT370E_N: 7850,    // 黒管・継目なし・ねじあり


    SUS304: 7930,
    SUS304TP_S_H: 7930,
    SUS304TP_S_C: 7930,
    SUS304TP_E_H: 7930,
    SUS304TP_E_C: 7930,


    
    SUS304L: 7920,
    SUS304TPD: 7930,

    SUS316: 8000,
    SUS316L: 7990,
    SUS430: 7750,
    SUS410: 7700,
    SUS329J4L: 7620,

    金24K: 19300,
    銀Ag: 10490,
    銅Cu: 8960,
    プラチナ: 21450,
    チタン: 4500,
    アルミ: 2700,
    鋳鉄: 7200,
    塩ビPVC: 1400,
    PEポリエチレン: 950,
    ダイヤモンド: 3500,
    タングステン: 19300,

} as const;

export type MaterialName = keyof typeof materialDensities;