module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],

  rules: {
    'prettier/prettier': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    'no-prototype-builtins': 'off',
    'no-async-promise-executor': 'off',
  },
};
