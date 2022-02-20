module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', '@typescript-eslint'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': 'warn',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    // next
    '@next/next/no-html-link-for-pages': 'off',
  },
  ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', '.turbo', '.next'],
};
