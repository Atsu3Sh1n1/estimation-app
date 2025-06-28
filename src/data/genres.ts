export const shapeGroups = [
    {
        groupName: '配管',
        shapes: [
            { value: 'pipe', label: '配管用炭素鋼管' },
            { value: 'pipe2', label: '配管用ステンレス鋼管' },
        ],
    },

    {
        groupName: '継手',
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
            { value: 'BL_flat_flange', label: 'BL-FF 閉止フランジ' },
            { value: 'flat_flange', label: 'SOP-RF 板フランジ' },
            { value: 'BL_flat_flange', label: 'BL-RF 閉止フランジ' },

        ],
    },




    {
        groupName: 'バルブ',
        shapes: [

        ],
    },

    {
        groupName: '鋼材',
        shapes: [
            { value: 'Flat_Bar', label: '平鋼(FB)' },
            { value: 'Angle', label: '山形鋼(L)' },
            { value: 'Channel', label: '溝形鋼(C)' },
            { value: 'H_Beam', label: 'H形鋼(H)' },
            { value: 'Round_Bar', label: '丸鋼(丸棒)' },
            { value: 'I_Beam', label: 'H形鋼(H)' },
            { value: 'Square_Pipe', label: '丸鋼管(STK)' },
            { value: 'Round_Pipe', label: '角形鋼管' },
            { value: 'Square_Bar', label: '角鋼(角棒)' },
            { value: 'Plate', label: '鋼板' },
            { value: 'Light_Channel', label: '軽溝形鋼' },
            { value: 'Lip_Channel', label: 'リップ溝形鋼' },


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
