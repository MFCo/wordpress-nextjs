module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: [1, 'single', 'avoid-escape'],
    'linebreak-style': [2, 'unix'],
    semi: [2, 'always'],
    'no-underscore-dangle': 0,
    eqeqeq: [2, 'smart'],
    'no-unused-expressions': 0,
    'new-cap': 0,
    'react/display-name': 0,
    'no-mixed-requires': 0,
    camelcase: [2, { properties: 'never' }],
    'no-use-before-define': [2, 'nofunc']
  }
};
