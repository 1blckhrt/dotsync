import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import unicornPlugin from 'eslint-plugin-unicorn'
import promisePlugin from 'eslint-plugin-promise'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        global: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
      jsdoc: jsdocPlugin,
      unicorn: unicornPlugin,
      promise: promisePlugin,
      prettier: prettier,
    },
    rules: {
      strict: ['error', 'never'],
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
      'no-undef': 'error',
      'no-shadow': 'error',
      'prefer-const': 'error',
      'consistent-return': 'error',
      'import/order': ['error', { 'newlines-between': 'always' }],
      'import/no-unresolved': 'error',
      'import/no-absolute-path': 'error',
      'jsdoc/check-alignment': 'warn',
      'jsdoc/check-param-names': 'warn',
      'jsdoc/check-tag-names': 'warn',
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
          },
        },
      ],
      'unicorn/prefer-module': 'error',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'promise/catch-or-return': 'error',
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
]
