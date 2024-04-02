const rgb = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#bfbfbf',
            '150': '#808080',
            '175': '#404040',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#c54000',
            '150': '#8a8000',
            '175': '#50bf00',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00ce50',
            '150': '#009e8a',
            '175': '#006dc5',
            '200': '#003cff',
        },
    },
];
const lab = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#b9b9b9',
            '150': '#777777',
            '175': '#3b3b3b',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#e97600',
            '150': '#c9ab00',
            '175': '#99d700',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#68d073',
            '150': '#76a0a7',
            '175': '#6670d4',
            '200': '#003cff',
        },
    },
];
const lch = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#b9b9b9',
            '150': '#777777',
            '175': '#3b3b3b',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#f66d00',
            '150': '#d7a600',
            '175': '#a2d600',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00e5af',
            '150': '#00c1ff',
            '175': '#0091ff',
            '200': '#003cff',
        },
    },
];
const lrgb = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#dddddd',
            '150': '#b4b4b4',
            '175': '#808080',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#dd8000',
            '150': '#b5b400',
            '175': '#81dd00',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00df81',
            '150': '#00b9b5',
            '175': '#008add',
            '200': '#003cff',
        },
    },
];
const hcl = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#b9b9b9',
            '150': '#777777',
            '175': '#3b3b3b',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#f66d00',
            '150': '#d7a600',
            '175': '#a2d600',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00e5af',
            '150': '#00c1ff',
            '175': '#0091ff',
            '200': '#003cff',
        },
    },
];
const num = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#bfffff',
            '150': '#7fffff',
            '175': '#3fffff',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#c4bfc0',
            '150': '#8a7f80',
            '175': '#503f40',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00ce8f',
            '150': '#009e0a',
            '175': '#006d84',
            '200': '#003cff',
        },
    },
];
const hcg = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#ffffff',
            '150': '#ffffff',
            '175': '#ffffff',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#000000',
            '150': '#000000',
            '175': '#000000',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#000000',
            '150': '#000000',
            '175': '#000000',
            '200': '#003cff',
        },
    },
];
const oklch = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#aeaeae',
            '150': '#636363',
            '175': '#222222',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#ff5600',
            '150': '#f99500',
            '175': '#c2ce00',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00eaa4',
            '150': '#00c1e7',
            '175': '#0087ff',
            '200': '#003cff',
        },
    },
];
const hsi = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#bfbfbf',
            '150': '#808080',
            '175': '#404040',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#af5500',
            '150': '#888200',
            '175': '#60af00',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00bf5f',
            '150': '#009a8d',
            '175': '#0076bb',
            '200': '#003cff',
        },
    },
];
const hsl = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#bfbfbf',
            '150': '#808080',
            '175': '#404040',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#ff7a00',
            '150': '#fff500',
            '175': '#8fff00',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00ff80',
            '150': '#00ffec',
            '175': '#00a7ff',
            '200': '#003cff',
        },
    },
];
const hsv = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#bfbfbf',
            '150': '#808080',
            '175': '#404040',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#ff7a00',
            '150': '#fff500',
            '175': '#8fff00',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00ff80',
            '150': '#00ffeb',
            '175': '#00a7ff',
            '200': '#003cff',
        },
    },
];
const oklab = [
    {
        input: {
            '100': '#ffffff',
            '200': '#000000',
        },
        output: {
            '100': '#ffffff',
            '125': '#aeaeae',
            '150': '#636363',
            '175': '#222222',
            '200': '#000000',
        },
    },
    {
        input: {
            '100': '#ff0000',
            '200': '#15ff00',
        },
        output: {
            '100': '#ff0000',
            '125': '#ed7300',
            '150': '#d1a800',
            '175': '#a1d500',
            '200': '#15ff00',
        },
    },
    {
        input: {
            '100': '#00ff15',
            '200': '#003cff',
        },
        output: {
            '100': '#00ff15',
            '125': '#00d98c',
            '150': '#00b1be',
            '175': '#0082e1',
            '200': '#003cff',
        },
    },
];
export const COLOR_MODES_MOCK_DATA = {
    rgb,
    hcl,
    num,
    hcg,
    oklch,
    hsi,
    hsl,
    hsv,
    oklab,
    lab,
    lch,
    lrgb,
};