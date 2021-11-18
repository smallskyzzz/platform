module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: "babel-eslint",
    ecmaFeatures: {
      "jsx": true,
      "modules": true
    }
  },
  // globals: {
  //   AMap: true,
  //   AMapUI: true,
  //   TmsVersion: true,
  //   IsLocal: true
  // },
  rules: {
    "no-unused-vars": [2, {
      "vars": "local",
      "args": "none"
    }],
    'vue/no-reserved-component-names' : 'off',
    'array-callback-return': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-inner-declarations': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'default-case-last' : 'off',
    'no-loss-of-precision': 'off',
    'no-promise-executor-return': 'off',
    'no-unreachable-loop': 'off',
    'no-useless-backreference': 'off',
    'complexity': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'max-nested-callbacks':'off'
  },
}
