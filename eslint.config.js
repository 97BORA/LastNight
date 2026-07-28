import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/dist-ssr/**',
            '**/coverage/**',
        ],
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ['**/*.{ts,tsx,js,jsx}'],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.vitest,
            },
        },

        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: importPlugin,
        },

        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: true,
            },
        },

        rules: {
            ...reactHooks.configs.recommended.rules,

            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',

            'react/self-closing-comp': [
                'warn',
                {
                    component: true,
                    html: true,
                },
            ],

            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            'import/order': [
                'warn',
                {
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],

            'no-console': 'warn',
        },
    },

    prettier,
];
