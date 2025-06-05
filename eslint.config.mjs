import { configs } from '@act-aks/eslint-config'
import pluginReactQuery from '@tanstack/eslint-plugin-query'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

const noRestrictedImportPaths = [
    {
        importNames: ['Text'],
        message: 'Please use the `Text` from @App/components/atoms instead of react-native',
        name: 'react-native',
    },
]

export default defineConfig([
    ...pluginReactQuery.configs['flat/recommended'],
    ...configs.recommended,
    ...configs.react,
    ...configs.reactNative,
    {
        ignores: [
            '**/__specs__/**',
            '**/jest.config.js',
            '.prettierrc.js',
            'babel.config.js',
            'commitlint.config.ts',
            'metro.config.js',
            'index.js',
            'eslint.config.mjs',
            'tailwind.config.js',
        ],
    },
    {
        rules: {
            'import/no-default-export': 'error',
            '@typescript-eslint/naming-convention': 'off',
            'no-console': ['error', { allow: ['error'] }],
            'no-relative-import-paths/no-relative-import-paths': [
                'error',
                { allowSameFolder: true, rootDir: './src', prefix: '@App' },
            ],
            '@typescript-eslint/no-restricted-imports': ['error', { paths: noRestrictedImportPaths }],
        },
    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        languageOptions: { globals: { React: 'readonly' }, parserOptions: { ecmaFeatures: { jsx: true } } },
        plugins: { react: pluginReact },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
        },
    },
])
