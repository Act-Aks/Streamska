import { configs } from '@act-aks/eslint-config'
import js from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import testingLibrary from 'eslint-plugin-testing-library'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
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
    { settings: { react: { version: 'detect' } } },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.node } },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    testingLibrary.configs['flat/react'],
    ...configs.recommended,
    ...configs.react,
    ...configs.reactNative,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/naming-convention': 'off',
            'no-console': ['error', { allow: ['error'] }],
            'no-relative-import-paths/no-relative-import-paths': [
                'error',
                { allowSameFolder: true, rootDir: './src', prefix: '@App' },
            ],
        },
    },
])
