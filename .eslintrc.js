module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style':'off',
    'indent':'off',
    'semi':'off',
    'eol-last':'off',
    'comma-dangle':'off',
    'no-trailing-spaces':'off',
    'space-before-blocks':'off',
    'import/prefer-default-export':'off'
  },
};
