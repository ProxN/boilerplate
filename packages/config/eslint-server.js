module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
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
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: 'req|res|next|val' },
    ],
    'prefer-destructuring': ['error', { object: true, array: false }],
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'build',
    '.turbo',
    '.next',
  ],
};
