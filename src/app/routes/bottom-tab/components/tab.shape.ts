import * as shape from 'd3-shape';

export const getTabShape = (width: number, height: number, tabWidth: number, tabHeight: number) => {
    const left = shape
        .line()
        .x((d: { x: number; y: number }) => d.x)
        .y((d: { x: number; y: number }) => d.y)([
        { x: 0, y: 0 },
        { x: width + tabWidth, y: 0 },
    ]);

    const right = shape
        .line()
        .x((d: { x: number; y: number }) => d.x)
        .y((d: { x: number; y: number }) => d.y)([
        { x: width + tabWidth, y: 0 },
        { x: width * 2.1, y: 0 },
        { x: width * 2.1, y: height },
        { x: 0, y: height + 0 },
        { x: 0, y: 0 },
    ]);

    const o1 = 500;
    const o2 = 70; // 65
    const o3 = 35; // 35
    const o4 = 45; // 50
    const o5 = 3; // 5
    const o6 = 2; // 6
    const o7 = 20; // 15
    const o8 = 47; // 14

    const tab = shape
        .line()
        .x((d: { x: number; y: number }) => d.x)
        .y((d: { x: number; y: number }) => d.y)
        .curve(shape.curveBasis)([
        { x: width + tabWidth / 2 - o1, y: 0 },

        { x: width + tabWidth / 2 - o2 + -o3, y: 0 },
        { x: width + tabWidth / 2 - o4 + o5, y: -o6 },
        { x: width + tabWidth / 2 - o4 + o7, y: height - o8 },
        { x: width + tabWidth / 2 + o4 - o7, y: height - o8 },
        { x: width + tabWidth / 2 + o4 - o5, y: -o6 },
        { x: width + tabWidth / 2 + o2 - -o3, y: 0 },

        { x: width + tabWidth / 2 + o1, y: 0 },
    ]);

    const d = `${left} ${tab} ${right}`;

    return d;
};
