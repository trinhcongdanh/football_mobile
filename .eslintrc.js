module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@babel',
    'react',
    'prettier',
    'unused-imports',
    'no-console-log',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
    },
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
  },
  rules: {
    'no-console-log/no-console-log': ['error'],
    'prettier/prettier': ['error'],
    'react/prop-types': 'warn',
    'import/prefer-default-export': [0],
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:rxjs/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'jest',
        'rxjs',
        'unused-imports',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'no-console-log/no-console-log': ['error'],
        'prettier/prettier': ['error'],
        'react/prop-types': 'warn',
        'import/prefer-default-export': [0],
        '@typescript-eslint/prefer-optional-chain': ['error'],
        'react-hooks/exhaustive-deps': [
          'error',
          {
            additionalHooks: '(useMemoizedCallback)',
          },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars-experimental': 'warn',
        'no-unused-vars': 'off',
        'react/jsx-props-no-spreading': ['off'],
        'unused-imports/no-unused-imports': 'error',
        'import/no-cycle': [0],
        'react/display-name': [0],
        '@typescript-eslint/explicit-module-boundary-types': [0],
        'no-bitwise': [0],
        'react/destructuring-assignment': 'off',
      },
    },
  ],
};
