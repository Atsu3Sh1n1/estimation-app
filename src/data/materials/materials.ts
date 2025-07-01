export const materialDensities: Record<string, number> = {
    'SGP黒 5.5m': 7850,
    'SGP白 5.5m': 7850,
    'SGP白ネジ付 5.5m': 7850,
    'SGP白ネジ付 4m': 7850,
    SGP_黒: 7850,
    SGP_白: 7850,
    可鍛鋳鉄_黒: 7850,
    可鍛鋳鉄_白: 7850,
    SGPW: 7850,

    STS370: 7850,

    STPY400: 7850,

    S45C: 7850,

    SS400: 7850,

    ダクタイル鋳鉄: 7200,

    PG370: 7850,  
    STPG370S: 7850,  
    STPG370E: 7850,  
    STPG410S: 7850,
    STPG410E: 7850,

    
    PT370: 7850,  
    STPT370S: 7850,  
    STPT370E: 7850,  
    STPT410S: 7850,  
    STPT410E: 7850,  
    STPT480S: 7850,  
    STPT480E: 7850, 
    
    
    STPT370S_W: 7850,   
    STPT370E_W: 7850,   
    STPT370S_WN: 7850,  
    STPT370E_WN: 7850,  

    STPT370S_N: 7850,   
    STPT370E_N: 7850,   


    SUS304: 7930,
    'SUS304_TP_A': 7930,
    SUS304_TP_S_H: 7930,
    SUS304_TP_S_C: 7930,
    SUS304_TP_E_H: 7930,
    SUS304_TP_E_C: 7930,
    'SUS304_TP_Y': 7930,

    SUS304L: 7920,
    'SUS304L_TP_A': 7920,
    SUS304L_TP_S_H: 7920,
    SUS304L_TP_S_C: 7920,
    SUS304L_TP_E_H: 7920,
    SUS304L_TP_E_C: 7920,
    'SUS304L_TP_Y': 7920,

    SUS316: 8000,
    'SUS316_TP_A': 8000,
    SUS316_TP_S_H: 8000,
    SUS316_TP_S_C: 8000,
    SUS316_TP_E_H: 8000,
    SUS316_TP_E_C: 8000,
    'SUS316_TP_Y': 8000,


    SUS316L: 7990,
    'SUS316L_TP_A': 7990,
    SUS316L_TP_S_H: 7990,
    SUS316L_TP_S_C: 7990,
    SUS316L_TP_E_H: 7990,
    SUS316L_TP_E_C: 7990,
    'SUS316L_TP_Y': 7990,

 
    SUS304_TPD: 7930,
    SUS430: 7750,
    SUS410: 7700,
    SUS329J4L: 7620,

    '24K GOLD': 19300,
    '18K GOLD': 14475,
    'silver925': 10490,
    銅Cu: 8960,
    'pt900': 21450,
    チタン: 4500,
    

} as const;

export type MaterialName = keyof typeof materialDensities;