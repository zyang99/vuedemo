module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'off',
    'quotes': 'off',
    'no-irregular-whitespace': 'off',
    'no-tabs': 'off',
    'space-before-function-paren':'off'
  }
}
