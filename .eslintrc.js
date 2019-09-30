module.exports = {
  root: true,
  env: {
    node: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [1, "always"],
    "brace-style": [1 ,"stroustrup"],
    "max-len": ["error", {
      "code": 80,
      "ignoreStrings": true,
      "ignoreUrls": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    "vue/max-attributes-per-line": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
