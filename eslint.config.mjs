import { configs } from '@act-aks/eslint-config'
import pluginReact from 'eslint-plugin-react'
import testingLibrary from 'eslint-plugin-testing-library'
import { defineConfig } from 'eslint/config'
import tsEslint from 'typescript-eslint'

const noRestrictedImportPaths = [
    {
        importNames: ['Text'],
        message: 'Please use the `Text` from @App/components/atoms instead of react-native',
        name: 'react-native',
    },
]

export default defineConfig([
    tsEslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    testingLibrary.configs['flat/react'],
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
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/naming-convention': 'off',
            'no-console': ['error', { allow: ['error'] }],
            'no-relative-import-paths/no-relative-import-paths': [
                'error',
                { allowSameFolder: true, rootDir: './src', prefix: '@App' },
            ],
            '@typescript-eslint/no-restricted-imports': ['error', { paths: noRestrictedImportPaths }],
        },
    },
])
