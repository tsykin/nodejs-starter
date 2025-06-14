import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import-x';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['dist/**'],
    plugins: {
      // '@typescript-eslint': tseslint, // tseslint.configs.recommended already includes this
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname, // ESLint v9 requires this for project-based parsing
      },
    },
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'off',
      'import/extensions': ['error', 'never'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // Prioritize .ts/.tsx files
          project: './tsconfig.json', // Explicitly point to tsconfig
        },
      },
    },
  },
  prettierConfig, // Make sure this is last to override other formatting rules
];
