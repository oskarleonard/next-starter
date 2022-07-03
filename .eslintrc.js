module.exports = {
  env: {
    node: true,
    es2020: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 0,
    'prefer-template': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'import/no-named-as-default': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-closing-bracket-location': [
      'warn',
      { selfClosing: 'tag-aligned', nonEmpty: 'tag-aligned' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
  },
};
