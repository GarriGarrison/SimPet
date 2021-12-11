module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 0,
    // semi: 0,
    'no-loop-fun': ['error', 'never'],
    tabWidth: 2,
  },
};
