module.exports = {
  ...require('config/eslint-next'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'no-unused-vars': 'off',
    'react/display-name': 'off',
  },
};
