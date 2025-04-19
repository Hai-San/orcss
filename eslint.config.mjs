import globals from 'globals';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import babelParser from '@babel/eslint-parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const settings = {
  'import/resolver': {
    alias: {
      map: [['@docs', './docs']],
      extensions: ['.js'],
    },
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectory: ['./node_modules'],
    },
  },
  'import/parsers': {
    '@babel/eslint-parser': ['.js'],
  },
  'import/external-module-folders': ['node_modules'],
};

const inportRules = {
  'import/default': 'off',
  'import/namespace': 'off',
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': 'off',
};

const rules = {
  ...inportRules,
  'object-curly-spacing': ['error', 'always'],
  'no-underscore-dangle': 'off',
  'no-restricted-syntax': 'off',
  'no-template-curly-in-string': 'error',
  'no-console': 'error',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: ['acc', 'e', 'ctx'],
    },
  ],
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: true,
    },
  ],
};

export default [
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  importPlugin.flatConfigs.recommended,
  {
    name: 'js',
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: babelParser,
        requireConfigFile: false,
      },
    },
    settings,
    rules,
  },
  {
    name: 'files-to-ignore',
    ignores: [
      '**/node_modules',
      'package-lock.json',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',
      '.vscode',
      '**/cache',
    ],
  },
];
