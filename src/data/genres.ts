export const shapeGroups = [
    {
        groupName: '形状',
        shapes: [
            { value: 'pipe', label: '配管用鋼管' },
        ],
    },

    {
        groupName: '継手類',
        shapes: [
            { value: 'elbow', label: '90E(L) エルボロング' },
            { value: 'shortelbow', label: '90E(S) エルボショート' },
            { value: 'halfelbow', label: '45E(L) エルボロング' },
            { value: 'halfshortelbow', label: '45E(S) エルボショート' },
            { value: 'tee', label: 'TEE(S) 同径' },
            { value: 'tee_reducing', label: 'TEE(R) 径違い' },
            { value: 'reducer', label: 'R(C) レジューサ/同芯' },
            { value: 'reducer', label: 'R(E) レジューサ/偏芯' },

        ],
    },

        {
        groupName: 'フランジ',
        shapes: [
            { value: 'flat_flange', label: 'SOP-FF 板フランジ' },
            { value: 'BL_flat_flange', label: 'BL-FF 板閉止フランジ' },
            { value: 'flange', label: 'SOP-RF レイズドフェースフランジ' },
            { value: 'flange', label: 'BL-RF レイズドフェース閉止フランジ' },

            { value: 'lap_joint', label: 'ラップフランジ' },

        ],
    },




    {
        groupName: 'バルブ',
        shapes: [
            { value: '', label: 'グローブ弁' },
            { value: '', label: '仕切り弁' },
            { value: '', label: 'ボール弁' },
            { value: '', label: 'バタフライ弁' },

        ],
    },

    {
        groupName: '鋼材',
        shapes: [
            { value: '', label: '丸鋼管(STK)' },
            { value: '', label: '等辺山形鋼(L)' },
            { value: '', label: '溝形鋼(C)' },
            { value: '', label: 'H形鋼(H)' },
            { value: '', label: '平鋼(FB)' },
            { value: '', label: '角形鋼管' },
            { value: '', label: '角鋼(角棒)' },
            { value: '', label: '丸鋼(丸棒)' },
            { value: '', label: '鋼板' },


        ],
    },

    {
        groupName: '消耗品',
        shapes: [
            { value: '', label: '溶接棒' },
            { value: '', label: 'ウエス' },
        ],
    },






];
