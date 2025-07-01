// src/data/materials/fittingCompatibility.ts
export const fittingCompatibility = {

    pipe: {

        materials: [
            'SGP黒5.5m', 'SGP黒ネジ5.5m', 'SGP白5.5m', 'SGP白ネジ5.5m', 'SGPW',
            'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E',
            'STS370',
            'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT480S', 'STPT480E',
            'STPY400',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],

        jisMap: {
            'SGP黒5.5m': ['G3452'], 'SGP黒ネジ5.5m': ['G3452'], 'SGP白5.5m': ['G3452'], 'SGP白ネジ5.5m': ['G3452'], 'SGPW': ['G3442'],
            'STPG370S': ['G3454'], 'STPG370E': ['G3454'], 'STPG410S': ['G3454'], 'STPG410E': ['G3454'],
            'STS370': ['G3455'],
            'STPT370S': ['G3456'], 'STPT370E': ['G3456'], 'STPT410S': ['G3456'], 'STPT410E': ['G3456'], 'STPT480S': ['G3456'], 'STPT480E': ['G3456'],
            'STPY400': ['G3457'],
            '24K GOLD': ['G3459'], '18K GOLD': ['G3459'], 'silver925': ['G3459'], 銅Cu: ['G3459'], 'pt900': ['G3459'], チタン: ['G3459'],
        },
    },

    pipe2: {

        materials: [
            'SUS304TPD', 'SUS304LTPD', 'SUS316TPD', 'SUS316LTPD',
            'SUS304TPA', 'SUS304LTPA', 'SUS316TPA', 'SUS316LTPA',
            'SUS304TP_S_H', 'SUS304TP_S_C', 'SUS304TP_E_H', 'SUS304TP_E_C',
            'SUS304LTP_S_H', 'SUS304LTP_S_C', 'SUS304LTP_E_H', 'SUS304LTP_E_C',
            'SUS316TP_S_H', 'SUS316TP_S_C', 'SUS316TP_E_H', 'SUS316TP_E_C',
            'SUS316LTP_S_H', 'SUS316LTP_S_C', 'SUS316LTP_E_H', 'SUS316LTP_E_C',
            'SUS430', 'SUS410', 'SUS329J4L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],

        jisMap: {
            SUS304TPD: ['G3448_SUS'], SUS304LTPD: ['G3448_SUS'], SUS316TPD: ['G3448_SUS'], SUS316LTPD: ['G3448_SUS'], SUS304TPY: ['G3468'],
            SUS304TPA: ['G3448_SUS'], SUS304LTPA: ['G3448_SUS'], SUS316TPA: ['G3448_SUS'], SUS316LTPA: ['G3448_SUS'],
            SUS304TP_S_H: ['G3459'], SUS304TP_S_C: ['G3459'], SUS304TP_E_H: ['G3459'], SUS304TP_E_C: ['G3459'],
            SUS304LTP_S_H: ['G3459'], SUS304LTP_S_C: ['G3459'], SUS304LTP_E_H: ['G3459'], SUS304LTP_E_C: ['G3459'],
            SUS316TP_S_H: ['G3459'], SUS316TP_S_C: ['G3459'], SUS316TP_E_H: ['G3459'], SUS316TP_E_C: ['G3459'],
            SUS316LTP_S_H: ['G3459'], SUS316LTP_S_C: ['G3459'], SUS316LTP_E_H: ['G3459'], SUS316LTP_E_C: ['G3459'],
            SUS430: ['G3459'], SUS410: ['G3459'], SUS329J4L: ['G3459'],
            '24K GOLD': ['G3459'], '18K GOLD': ['G3459'], 'silver925': ['G3459'], 銅Cu: ['G3459'], 'pt900': ['G3459'], チタン: ['G3459'],
        },
    },

    elbow: {
        materials: [
            'SGP_黒', 'SGP_白', 'PG370', 'PT370', 'ST370',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L', 'SUS304TPD',

            'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',

            'SUS430', 'SUS410', 'SUS329J4L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],
        jisMap: {
            SGP_黒: ['B2311_SGP'], SGP_白: ['B2311_SGP'], PG370: ['B2312_SS'], PT370: ['B2312_SS'],

            SUS304: ['B2312_SUS'], SUS304L: ['B2312_SUS'], SUS316: ['B2312_SUS'], SUS316L: ['B2312_SUS'], SUS304TPD: ['G3448_SUS'],

            SUS304_PT: [''], SUS304L_PT: [''], SUS316_PT: [''], SUS316L_PT: [''],

            SUS430: ['B2312_SUS'], SUS410: ['B2312_SUS'], SUS329J4L: ['B2312_SUS'],

            '24K GOLD': ['B2312_SUS'], '18K GOLD': ['B2312_SUS'], 'silver925': ['B2312_SUS'], 銅Cu: ['B2312_SUS'], 'pt900': ['B2312_SUS'], チタン: ['B2312_SUS'],
        },
    },

    shortelbow: {

        materials: [
            'SGP_黒', 'SGP_白', '可鍛鋳鉄_黒', '可鍛鋳鉄_白', 'PG370', 'PT370', 'ST370',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L', 'SUS304TPD',

            'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',

            'SUS430', 'SUS410', 'SUS329J4L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],
        jisMap: {
            SGP_黒: ['B2311_SGP'], SGP_白: ['B2311_SGP'], 可鍛鋳鉄_黒: [''], 可鍛鋳鉄_白: [''], PG370: ['B2312_SS'], PT370: ['B2312_SS'], ST370: ['B2312_SS'],

            SUS304: ['B2312_SUS'], SUS304L: ['B2312_SUS'], SUS316: ['B2312_SUS'], SUS316L: ['B2312_SUS'], SUS304TPD: ['G3448_SUS'],

            SUS304_PT: [''], SUS304L_PT: [''], SUS316_PT: [''], SUS316L_PT: [''],

            SUS430: ['B2312_SUS'], SUS410: ['B2312_SUS'], SUS329J4L: ['B2312_SUS'],

            '24K GOLD': ['B2312_SUS'], '18K GOLD': ['B2312_SUS'], 'silver925': ['B2312_SUS'], 銅Cu: ['B2312_SUS'], 'pt900': ['B2312_SUS'], チタン: ['B2312_SUS'],
        },
    },



    tee: {
        materials: [
            'SGP_黒', 'SGP_白', '可鍛鋳鉄_黒', '可鍛鋳鉄_白', 'PG370', 'PT370', 'ST370',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L', 'SUS304TPD',

            'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',

            'SUS430', 'SUS410', 'SUS329J4L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],
        jisMap: {

            SGP_黒: ['B2311_TS'], SGP_白: ['B2311_TS'], 可鍛鋳鉄_黒: [''], 可鍛鋳鉄_白: [''], PG370: ['B2312_SSTS'], PT370: ['B2312_SSTS'], ST370: ['B2312_SSTS'],

            SUS304: ['B2312_SUST'], SUS304L: ['B2312_SUST'], SUS316: ['B2312_SUST'], SUS316L: ['B2312_SUST'], SUS304TPD: ['G3448_SUS'],

            SUS304_PT: [''], SUS304L_PT: [''], SUS316_PT: [''], SUS316L_PT: [''],

            SUS430: ['B2312_SUST'], SUS410: ['B2312_SUST'], SUS329J4L: ['B2312_SUST'],

            '24K GOLD': ['B2312_SUST'], '18K GOLD': ['B2312_SUST'], 'silver925': ['B2312_SUST'], 銅Cu: ['B2312_SUST'], 'pt900': ['B2312_SUST'], チタン: ['B2312_SUST'],
        },
    },

    tee_reducing: {
        materials: [
            'SGP_黒', 'SGP_白', '可鍛鋳鉄_黒', '可鍛鋳鉄_白', 'PG370', 'PT370', 'ST370',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L', 'SUS304TPD',

            'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',

            'SUS430', 'SUS410', 'SUS329J4L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],
        jisMap: {
            SGP_黒: ['B2311_TR'], SGP_白: ['B2311_TR'], 可鍛鋳鉄_黒: [''], 可鍛鋳鉄_白: [''], PG370: ['B2312_SSTR'], PT370: ['B2312_SSTR'], ST370: ['B2312_SSTR'],

            SUS304: ['B2312_TR'], SUS304L: ['B2312_TR'], SUS316: ['B2312_TR'], SUS316L: ['B2312_TR'], SUS304TPD: [''],

            SUS304_PT: [''], SUS304L_PT: [''], SUS316_PT: [''], SUS316L_PT: [''],

            SUS430: ['B2312_TR'], SUS410: ['B2312_TR'], SUS329J4L: ['B2312_TR'],

            '24K GOLD': ['B2312_TR'], '18K GOLD': ['B2312_TR'], 'silver925': ['B2312_TR'], 銅Cu: ['B2312_TR'], 'pt900': ['B2312_TR'], チタン: ['B2312_TR'],
        },
    },

    halfelbow: {
        materials: [
            'SGP_黒', 'SGP_白', '可鍛鋳鉄_黒', '可鍛鋳鉄_白', 'PG370', 'PT370', 'ST370',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L', 'SUS304TPD',

            'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',

            'SUS430', 'SUS410', 'SUS329J4L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],
        jisMap: {
            SGP_黒: ['B2311_SGP'], SGP_白: ['B2311_SGP'], 可鍛鋳鉄_黒: [''], 可鍛鋳鉄_白: [''], PG370: ['B2312_SS'], PT370: ['B2312_SS'], ST370: ['B2312_SS'],

            SUS304: ['B2312_SUS'], SUS304L: ['B2312_SUS'], SUS316: ['B2312_SUS'], SUS316L: ['B2312_SUS'], SUS304TPD: ['G3448_SUS'],

            SUS304_PT: [''], SUS304L_PT: [''], SUS316_PT: [''], SUS316L_PT: [''],

            SUS430: ['B2312_SUS'], SUS410: ['B2312_SUS'], SUS329J4L: ['B2312_SUS'],

            '24K GOLD': ['B2312_SUS'], '18K GOLD': ['B2312_SUS'], 'silver925': ['B2312_SUS'], 銅Cu: ['B2312_SUS'], 'pt900': ['B2312_SUS'], チタン: ['B2312_SUS'],
        },
    },

    halfshortelbow: {
        materials: [
            'SGP_黒', 'SGP_白', 'PG370', 'PT370', 'ST370',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L', 'SUS304TPD',

            'SUS430', 'SUS410', 'SUS329J4L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SGP_黒: ['B2311_SGP'], SGP_白: ['B2311_SGP'], 可鍛鋳鉄_黒: [''], 可鍛鋳鉄_白: [''], PG370: ['B2312_SS'], PT370: ['B2312_SS'], ST370: ['B2312_SS'],

            SUS304: ['B2312_SUS'], SUS304L: ['B2312_SUS'], SUS316: ['B2312_SUS'], SUS316L: ['B2312_SUS'], SUS304TPD: ['G3448_SUS'],

            SUS430: ['B2312_SUS'], SUS410: ['B2312_SUS'], SUS329J4L: ['B2312_SUS'],

            '24K GOLD': ['B2312_SUS'], '18K GOLD': ['B2312_SUS'], 'silver925': ['B2312_SUS'], 銅Cu: ['B2312_SUS'], 'pt900': ['B2312_SUS'], チタン: ['B2312_SUS'],
        },
    },



    reducer: {
        materials: [
            'SGP_黒', 'SGP_白', '可鍛鋳鉄_黒', '可鍛鋳鉄_白', 'PG370', 'PT370', 'ST370',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L', 'SUS304TPD',

            'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',

            'SUS430', 'SUS410', 'SUS329J4L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],

        jisMap: {
            SGP_黒: [''], SGP_白: [''], 可鍛鋳鉄_黒: [''], 可鍛鋳鉄_白: [''], PG370: ['B2312_SSR'], PT370: ['B2312_SSR'], ST370: ['B2312_SSR'],

            SUS304: ['B2312_R'], SUS304L: ['B2312_R'], SUS316: ['B2312_R'], SUS316L: ['B2312_R'], SUS304TPD: ['G3448_SUS'],

            SUS304_PT: [''], SUS304L_PT: [''], SUS316_PT: [''], SUS316L_PT: [''],

            SUS430: ['B2312_R'], SUS410: ['B2312_R'], SUS329J4L: ['B2312_R'],

            '24K GOLD': ['B2312_R'], '18K GOLD': ['B2312_R'], 'silver925': ['B2312_R'], 銅Cu: ['B2312_R'], 'pt900': ['B2312_R'], チタン: ['B2312_R'],
        },

    },

    flat_flange: {
        materials: [
            'SS400',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',

            'SUS304_PT', 'SUS304L_PT', 'SUS316_PT', 'SUS316L_PT',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SS400: ['B2220_F'],

            SUS304: ['B2220_F'], SUS304L: ['B2220_F'], SUS316: ['B2220_F'], SUS316L: ['B2220_F'],

            SUS304_PT: [''], SUS304L_PT: [''], SUS316_PT: [''], SUS316L_PT: [''],

            '24K GOLD': ['B2220_F'], '18K GOLD': ['B2220_F'], 'silver925': ['B2220_F'], 銅Cu: ['B2220_F'], 'pt900': ['B2220_F'], チタン: ['B2220_F'],
        },
    },

    BL_flat_flange: {
        materials: [
            'SS400',

            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',

            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {

            SS400: [''],

            SUS304: ['B2220_BL'], SUS304L: ['B2220_BL'], SUS316: ['B2220_BL'], SUS316L: ['B2220_BL'], SUS304TPD: [''],

            '24K GOLD': ['B2220_BL'], '18K GOLD': ['B2220_BL'], 'silver925': ['B2220_BL'], 銅Cu: ['B2220_BL'], 'pt900': ['B2220_BL'], チタン: ['B2220_BL'],
        },
    },

    Flat_Bar: {
        materials: [
            'SS400',
            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SS400: ['G3194'],
            SUS304: ['G3194'], SUS304L: ['G3194'], SUS316: ['G3194'], SUS316L: ['G3194'],
            '24K GOLD': ['G3194'], '18K GOLD': ['G3194'], 'silver925': ['G3194'], 銅Cu: ['G3194'], 'pt900': ['G3194'], チタン: ['G3194'],
        },
    },


    Angle: {
        materials: [
            'SS400',
            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン',
        ],
        jisMap: {
            SS400: ['G3192_L'],
            SUS304: ['G3192_L'], SUS304L: ['G3192_L'], SUS316: ['G3192_L'], SUS316L: ['G3192_L'],
            '24K GOLD': ['G3192_L'], '18K GOLD': ['G3192_L'], 'silver925': ['G3192_L'], 銅Cu: ['G3192_L'], 'pt900': ['G3192_L'], チタン: ['G3192_L'],
        },
    },

    Channel: {
        materials: [
            'SS400',
            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SS400: ['G3192_C'],
            SUS304: ['G3192_C'], SUS304L: ['G3192_C'], SUS316: ['G3192_C'], SUS316L: ['G3192_C'],
            '24K GOLD': ['G3192_C'], '18K GOLD': ['G3192_C'], 'silver925': ['G3192_C'], 銅Cu: ['G3192_C'], 'pt900': ['G3192_C'], チタン: ['G3192_C'],
        },
    },

    H_Beam: {
        materials: [
            'SS400',
            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SS400: ['G3192_H'],
            SUS304: ['G3192_H'], SUS304L: ['G3192_H'], SUS316: ['G3192_H'], SUS316L: ['G3192_H'],
            '24K GOLD': ['G3192_H'], '18K GOLD': ['G3192_H'], 'silver925': ['G3192_H'], 銅Cu: ['G3192_H'], 'pt900': ['G3192_H'], チタン: ['G3192_H'],
        },
    },

    Round_Bar: {
        materials: [
            'SS400',
            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SS400: ['G3192_R'],
            SUS304: ['G3192_R'], SUS304L: ['G3192_R'], SUS316: ['G3192_R'], SUS316L: ['G3192_R'],
            '24K GOLD': ['G3192_R'], '18K GOLD': ['G3192_R'], 'silver925': ['G3192_R'], 銅Cu: ['G3192_R'], 'pt900': ['G3192_R'], チタン: ['G3192_R'],
        },
    },

    ABS_Angle: {
        materials: [
            'SS400',
            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SS400: ['G3192_ABS'],
            SUS304: ['G3192_ABS'], SUS304L: ['G3192_ABS'], SUS316: ['G3192_ABS'], SUS316L: ['G3192_ABS'],
            '24K GOLD': ['G3192_ABS'], '18K GOLD': ['G3192_ABS'], 'silver925': ['G3192_ABS'], 銅Cu: ['G3192_ABS'], 'pt900': ['G3192_ABS'], チタン: ['G3192_ABS'],
            アルミ: ['G3192_ABS'], 鋳鉄: ['G3192_ABS'], PEポリエチレン: ['G3192_ABS'], タングステン: ['G3192_ABS'],
        },
    },
    PCF_Channel: {
        materials: [
            'SS400',
            'SUS304', 'SUS304L', 'SUS316', 'SUS316L',
            '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900', 'チタン', 
        ],
        jisMap: {
            SS400: ['G3192_PCF'],
            SUS304: ['G3192_PCF'], SUS304L: ['G3192_PCF'], SUS316: ['G3192_PCF'], SUS316L: ['G3192_PCF'],
            '24K GOLD': ['G3192_PCF'], '18K GOLD': ['G3192_PCF'], 'silver925': ['G3192_PCF'], 銅Cu: ['G3192_PCF'], 'pt900': ['G3192_PCF'], チタン: ['G3192_PCF'],
        },
    },

    Ball_Valve_TOYO: {
        materials: [
            'ボール・ダクタイル鋳鉄 (レバー)', 'ボール・ダクタイル鋳鉄 (ギア)',
            'ボール・ステンレス鋼 (レバー)', 'ボール・ステンレス鋼 (ギア)', 'ボール・ステンレス鋼 (アクチェータ)', 'ボール・ステンレス鋼 (ねじ)',
            'グローブ・ダクタイル鋳鉄', 'グローブ・ステンレス鋼', 'グローブ・ダクタイル鋳鉄 (ねじ)',
            'ゲート・ダクタイル鋳鉄',
        ],

        jisMap: {
            'ボール・ダクタイル鋳鉄 (レバー)': ['B2220_DBF'], 'ボール・ダクタイル鋳鉄 (ギア)': ['B2220_DBFG'],
            'ボール・ステンレス鋼 (レバー)': ['B2220_UBF', 'ASME B16.15'], 'ボール・ステンレス鋼 (ギア)': ['B2220_UBFG'],
            'ボール・ステンレス鋼 (アクチェータ)': ['B2220_A'], 'ボール・ステンレス鋼 (ねじ)': ['B0203_U'],

            'グローブ・ダクタイル鋳鉄': ['B2220_GF'], 'グローブ・ダクタイル鋳鉄 (ねじ)': ['B2220_GN'],

            'ゲート・ダクタイル鋳鉄': ['B2220_SF'], 'ゲート・ダクタイル鋳鉄 (ねじ)': ['B2220_GN'],
        },

    },

    bolt: {
        materials: [
            'SS400', 'S45C', 'SUS304', '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900',
        ],

        jisMap: {
            'SS400': ['B1180'], 'S45C': ['B1180'], 'SUS304': ['B1180'],
            '24K GOLD': ['B1180'], '18K GOLD': ['B1180'], 'silver925': ['B1180'], '銅Cu': ['B1180'], 'pt900': ['B1180'],
        },

    },

    bolt_set: {
        materials: [
            'SS400', 'S45C', 'SUS304', '24K GOLD', '18K GOLD', 'silver925', '銅Cu', 'pt900',
        ],

        jisMap: {
            'SS400': ['B1180_B1181'], 'S45C': ['B1180_B1181'], 'SUS304': ['B1180_B1181'],
            '24K GOLD': ['B1180_B1181'], '18K GOLD': ['B1180_B1181'], 'silver925': ['B1180_B1181'], '銅Cu': ['B1180_B1181'], 'pt900': ['B1180_B1181'],
        },

    },
















};
