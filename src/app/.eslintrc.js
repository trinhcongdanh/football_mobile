module.exports = {
    overrides: [
        {
            files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
            rules: {
                'no-restricted-imports': [
                    'error',
                    {
                        paths: ['@investment/app'],
                        patterns: ['react-native/Libraries/*'],
                    },
                ],
            },
        },
    ],
};
