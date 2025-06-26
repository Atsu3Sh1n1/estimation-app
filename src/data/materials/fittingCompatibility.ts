// src/data/materials/fittingCompatibility.ts
export const fittingCompatibility = {

    pipe: {
        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 
            'STPY400', 
            'STS370',
            'STPG370SH', 'STPG370EH', 'STPG410S', 'STPG410E', 
            'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',

            'SUS304TP_S_H', 'SUS304TP_S_C', 'SUS304TP_E_H', 'SUS304TP_E_C', 'SUS304',
            'SUS304LTP_S_H', 'SUS304LTP_S_C', 'SUS304LTP_E_H', 'SUS304LTP_E_C', 'SUS304L',
            'SUS316TP_S_H', 'SUS316TP_S_C', 'SUS316TP_E_H', 'SUS316TP_E_C', 'SUS316',
            'SUS316LTP_S_H', 'SUS316LTP_S_C', 'SUS316LTP_E_H', 'SUS316LTP_E_C', 'SUS316L',
            'SUS430', 'SUS410', 'SUS329J4L',

            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304TPD: ['G3448'], SUS304LTPD: ['G3448'], SUS316TPD: ['G3448'], SUS316LTPD: ['G3448'],

            SUS304TP_S_H: ['G3459'], SUS304TP_S_C: ['G3459'], SUS304TP_E_H: ['G3459'], SUS304TP_E_C: ['G3459'],

            SUS304LTP_S_H: ['G3459'], SUS304LTP_S_C: ['G3459'], SUS304LTP_E_H: ['G3459'], SUS304LTP_E_C: ['G3459'], 
          
            SUS316TP_S_H: ['G3459'], SUS316TP_S_C: ['G3459'], SUS316TP_E_H: ['G3459'], SUS316TP_E_C: ['G3459'],

            SUS316LTP_S_H: ['G3459'], SUS316LTP_S_C: ['G3459'], SUS316LTP_E_H: ['G3459'], SUS316LTP_E_C: ['G3459'],

            SUS304TPY: ['G3468'],
            
            SUS430: ['G3459'], SUS410: ['G3459'], SUS329J4L: ['G3459'],

            SGP黒EG: ['G3452'], SGP黒鍛BH: ['G3452'], SGP白EG: ['G3452'], SGP白鍛BC: ['G3452'], SGPW: ['G3442'], STPY400: ['G3457'],

            STPG370SH: ['G3454'], STPG370EH: ['G3454'], STPG410S: ['G3454'], STPG410E: ['G3454'],

            STPT370S: ['G3456'], STPT370E: ['G3456'], STPT410S: ['G3456'], STPT410E: ['G3456'], STPT480S: ['G3456'], STPT480E: ['G3456'],
            STPT370S_W: ['G3456'], STPT370E_W: ['G3456'], STPT370S_WN: ['G3456'], STPT370E_WN: ['G3456'], STPT370S_N: ['G3456'], STPT370E_N: ['G3456'],

            STS370: ['G3455'],

            金24K: ['G3459'], 銀Ag: ['G3459'], 銅Cu: ['G3459'], プラチナ: ['G3459'], チタン: ['G3459'], アルミ: ['G3459'], 鋳鉄: ['G3459'], 塩ビPVC: [], PEポリエチレン: ['G3459'], ダイヤモンド: ['G3459'], タングステン: ['G3459'],
        },
    },

    elbow: {
        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 'STS370', 'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',
            'SUS304', 'SUS304L', 'SUS304TPD', 'SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L',
            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304: ['B2312'], SUS304L: ['B2312'], SUS304TPD: ['G3448'], SUS316: ['B2312'], SUS316L: ['B2312'], SUS430: ['B2312'], SUS410: ['B2312'], SUS329J4L: ['B2312'],

            SGP黒EG: ['B2311'], SGP黒鍛BH: ['B2311'], SGP白EG: ['B2311'], SGP白鍛BC: ['B2311'], SGPW: ['B2311'],

            STPG370S: ['B2312'], STPG370E: ['B2312'], STPG410S: ['B2312'], STPG410E: ['B2312'],

            STPT370S: ['B2312'], STPT370E: ['B2312'], STPT410S: ['B2312'], STPT410E: ['B2312'], STPT480S: ['B2312'], STPT480E: ['B2312'],
            STPT370S_W: ['B2312'], STPT370E_W: ['B2312'], STPT370S_WN: ['B2312'], STPT370E_WN: ['B2312'], STPT370S_N: ['B2312'], STPT370E_N: ['B2312'],

            STS370: ['B2312'],

            金24K: ['B2312',], 銀Ag: ['B2312',], 銅Cu: ['B2312',], プラチナ: ['B2312'], チタン: ['B2312',], アルミ: ['B2312',], 鋳鉄: ['B2312',], 塩ビPVC: [], PEポリエチレン: ['B2312',], ダイヤモンド: ['B2312',], タングステン: ['B2312',],
        },
    },

    shortelbow: {

        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 'STS370', 'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',
            'SUS304', 'SUS304L', 'SUS304TPD', 'SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L',
            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304: ['B2312'], SUS304L: ['B2312'], SUS304TPD: ['G3448'], SUS316: ['B2312'], SUS316L: ['B2312'], SUS430: ['B2312'], SUS410: ['B2312'], SUS329J4L: ['B2312'],

            SGP黒EG: ['B2311'], SGP黒鍛BH: ['B2311'], SGP白EG: ['B2311'], SGP白鍛BC: ['B2311'], SGPW: ['B2311'],

            STPG370S: ['B2312'], STPG370E: ['B2312'], STPG410S: ['B2312'], STPG410E: ['B2312'],

            STPT370S: ['B2312'], STPT370E: ['B2312'], STPT410S: ['B2312'], STPT410E: ['B2312'], STPT480S: ['B2312'], STPT480E: ['B2312'],
            STPT370S_W: ['B2312'], STPT370E_W: ['B2312'], STPT370S_WN: ['B2312'], STPT370E_WN: ['B2312'], STPT370S_N: ['B2312'], STPT370E_N: ['B2312'],

            STS370: ['B2312'],

            金24K: ['B2312',], 銀Ag: ['B2312',], 銅Cu: ['B2312',], プラチナ: ['B2312'], チタン: ['B2312',], アルミ: ['B2312',], 鋳鉄: ['B2312',], 塩ビPVC: [], PEポリエチレン: ['B2312',], ダイヤモンド: ['B2312',], タングステン: ['B2312',],
        },
    },



    tee: {
        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 'STS370', 'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',
            'SUS304', 'SUS304L', 'SUS304TPD', 'SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L',
            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304: ['B2312_T'], SUS304L: ['B2312_T'], SUS304TPD: ['G3448'], SUS316: ['B2312_T'], SUS316L: ['B2312_T'], SUS430: ['B2312_T'], SUS410: ['B2312_T'], SUS329J4L: ['B2312_T'],

            SGP黒EG: ['B2311_T'], SGP黒鍛BH: ['B2311_T'], SGP白EG: ['B2311_T'], SGP白鍛BC: ['B2311_T'], SGPW: ['B2312_T'],

            STPG370S: ['B2312_T'], STPG370E: ['B2312_T'], STPG410S: ['B2312_T'], STPG410E: ['B2312_T'],

            STPT370S: ['B2312_T'], STPT370E: ['B2312_T'], STPT410S: ['B2312_T'], STPT410E: ['B2312_T'], STPT480S: ['B2312_T'], STPT480E: ['B2312_T'],
            STPT370S_W: ['B2312_T'], STPT370E_W: ['B2312_T'], STPT370S_WN: ['B2312_T'], STPT370E_WN: ['B2312_T'], STPT370S_N: ['B2312_T'], STPT370E_N: ['B2312_T'],

            STS370: ['G3455'],

            金24K: ['B2312_T',], 銀Ag: ['B2312_T',], 銅Cu: ['B2312_T'], プラチナ: ['B2312_T'], チタン: ['B2312_T',], アルミ: ['B2312_T',], 鋳鉄: ['B2312_T',], 塩ビPVC: [], PEポリエチレン: ['B2312_T',], ダイヤモンド: ['B2312_T',], タングステン: ['B2312_T',],
        },
    },

    tee_reducing: {
        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 'STS370', 'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',
            'SUS304', 'SUS304L', 'SUS304TPD', 'SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L',
            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304: ['B2312_TE'], SUS304L: ['B2312_TE'], SUS304TPD: ['G3448'], SUS316: ['B2312_TE'], SUS316L: ['B2312_TE'], SUS430: ['B2312_TE'], SUS410: ['B2312_TE'], SUS329J4L: ['B2312_TE'],

            SGP黒EG: ['B2311_T'], SGP黒鍛BH: ['B2311_T'], SGP白EG: ['B2311_T'], SGP白鍛BC: ['B2311_T'], SGPW: ['B2311_T'],

            STPG370S: ['B2312_TE'], STPG370E: ['B2312_TE'], STPG410S: ['B2312_TE'], STPG410E: ['B2312_TE'],

            STPT370S: ['B2312_TE'], STPT370E: ['B2312_TE'], STPT410S: ['B2312_TE'], STPT410E: ['B2312_TE'], STPT480S: ['B2312_TE'], STPT480E: ['B2312_TE'],
            STPT370S_W: ['B2312_TE'], STPT370E_W: ['B2312_TE'], STPT370S_WN: ['B2312_TE'], STPT370E_WN: ['B2312_TE'], STPT370S_N: ['B2312_TE'], STPT370E_N: ['B2312_TE'],

            STS370: ['B2312_TE'],

            金24K: ['B2312_TE',], 銀Ag: ['B2312_TE',], 銅Cu: ['B2312_TE',], プラチナ: ['B2312_TE'], チタン: ['B2312_TE',], アルミ: ['B2312_TE',], 鋳鉄: ['B2312_TE',], 塩ビPVC: [], PEポリエチレン: ['B2312_TE',], ダイヤモンド: ['B2312_TE',], タングステン: ['B2312_TE',],
        },
    },

    halfelbow: {
        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 'STS370', 'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',
            'SUS304', 'SUS304L', 'SUS304TPD', 'SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L',
            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304: ['B2312'], SUS304L: ['B2312'], SUS304TPD: ['G3448'], SUS316: ['B2312'], SUS316L: ['B2312'], SUS430: ['B2312'], SUS410: ['B2312'], SUS329J4L: ['B2312'],

            SGP黒EG: ['B2311'], SGP黒鍛BH: ['B2311'], SGP白EG: ['B2311'], SGP白鍛BC: ['B2311'], SGPW: ['B2311'],

            STPG370S: ['B2312'], STPG370E: ['B2312'], STPG410S: ['B2312'], STPG410E: ['B2312'],

            STPT370S: ['B2312'], STPT370E: ['B2312'], STPT410S: ['B2312'], STPT410E: ['B2312'], STPT480S: ['B2312'], STPT480E: ['B2312'],
            STPT370S_W: ['B2312'], STPT370E_W: ['B2312'], STPT370S_WN: ['B2312'], STPT370E_WN: ['B2312'], STPT370S_N: ['B2312'], STPT370E_N: ['B2312'],

            STS370: ['B2312'],

            金24K: ['B2312',], 銀Ag: ['B2312',], 銅Cu: ['B2312',], プラチナ: ['B2312'], チタン: ['B2312',], アルミ: ['B2312',], 鋳鉄: ['B2312',], 塩ビPVC: [], PEポリエチレン: ['B2312',], ダイヤモンド: ['B2312',], タングステン: ['B2312',],
        },
    },

    halfshortelbow: {
        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 'STS370', 'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',
            'SUS304', 'SUS304L', 'SUS304TPD', 'SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L',
            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304: ['B2312'], SUS304L: ['B2312'], SUS304TPD: ['G3448'], SUS316: ['B2312'], SUS316L: ['B2312'], SUS430: ['B2312'], SUS410: ['B2312'], SUS329J4L: ['B2312'],

            SGP黒EG: ['B2311'], SGP黒鍛BH: ['B2311'], SGP白EG: ['B2311'], SGP白鍛BC: ['B2311'], SGPW: ['B2311'],

            STPG370S: ['B2312'], STPG370E: ['B2312'], STPG410S: ['B2312'], STPG410E: ['B2312'],

            STPT370S: ['B2312'], STPT370E: ['B2312'], STPT410S: ['B2312'], STPT410E: ['B2312'], STPT480S: ['B2312'], STPT480E: ['B2312'],
            STPT370S_W: ['B2312'], STPT370E_W: ['B2312'], STPT370S_WN: ['B2312'], STPT370E_WN: ['B2312'], STPT370S_N: ['B2312'], STPT370E_N: ['B2312'],

            STS370: ['B2312'],

            金24K: ['B2312',], 銀Ag: ['B2312',], 銅Cu: ['B2312',], プラチナ: ['B2312'], チタン: ['B2312',], アルミ: ['B2312',], 鋳鉄: ['B2312',], 塩ビPVC: [], PEポリエチレン: ['B2312',], ダイヤモンド: ['B2312',], タングステン: ['B2312',],
        },
    },



    reducer: {
        materials: [
            'SGP黒EG', 'SGP黒鍛BH', 'SGP白EG', 'SGP白鍛BC', 'SGPW', 'STS370', 'STPG370S', 'STPG370E', 'STPG410S', 'STPG410E', 'STPT370S', 'STPT370E', 'STPT410S', 'STPT410E', 'STPT370S_W', 'STPT370E_W', 'STPT370S_WN', 'STPT370E_WN', 'STPT370S_N', 'STPT370E_N',
            'SUS304', 'SUS304L', 'SUS304TPD', 'SUS316', 'SUS316L', 'SUS430', 'SUS410', 'SUS329J4L',
            '金24K', '銀Ag', '銅Cu', 'プラチナ', 'チタン', 'アルミ', '鋳鉄', '塩ビPVC', 'PEポリエチレン', 'ダイヤモンド', 'タングステン',
        ],
        jisMap: {
            SUS304: ['B2312_R'], SUS304L: ['B2312_R'], SUS304TPD: [''], SUS316: ['B2312_R'], SUS316L: ['B2312_R'], SUS430: ['B2312_R'], SUS410: ['B2312_R'], SUS329J4L: ['B2312_R'],

            SGP黒EG: [''], SGP黒鍛BH: [''], SGP白EG: [''], SGP白鍛BC: [''], SGPW: [''],

            STPG370S: ['B2312_R'], STPG370E: ['B2312_R'], STPG410S: ['B2312_R'], STPG410E: ['B2312_R'],

            STPT370S: ['B2312_R'], STPT370E: ['B2312_R'], STPT410S: ['B2312_R'], STPT410E: ['B2312_R'], STPT480S: ['B2312_R'], STPT480E: ['B2312_R'],
            STPT370S_W: ['B2312_R'], STPT370E_W: ['B2312_R'], STPT370S_WN: ['B2312_R'], STPT370E_WN: ['B2312_R'], STPT370S_N: ['B2312_R'], STPT370E_N: ['B2312_R'],

            STS370: ['B2312_R'],

            金24K: ['B2312_R',], 銀Ag: ['B2312_R',], 銅Cu: ['B2312_R',], プラチナ: ['B2312_R'], チタン: ['B2312_R',], アルミ: ['B2312_R',], 鋳鉄: ['B2312_R',], 塩ビPVC: [], PEポリエチレン: ['B2312_R',], ダイヤモンド: ['B2312_R',], タングステン: ['B2312_R',],
        },
    },



};
