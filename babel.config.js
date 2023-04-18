module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                extensions: ['.ts', '.tsx', '.js', '.json'],
                alias: {
                    '@football/core': './src/core',
                    '@football/app': './src/app',
                },
            },
        ],
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        'react-native-reanimated/plugin',
    ],
};
