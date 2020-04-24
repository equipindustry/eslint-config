const path = require('path');

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'ordered-imports': 0,
    quotemark: 0,
    'no-console': 0,
    semicolon: 0,
    'jsx-no-lambda': 0,
    // import
    'import/default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-deprecated': 'off',
    'import/no-unresolved': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
