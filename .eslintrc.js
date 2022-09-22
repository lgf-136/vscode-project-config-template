module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended', //common
    'plugin:prettier/recommended' //common
    // "plugin:vue/vue3-essential", // vue
    // "@vue/typescript/recommended", // vue
    // "@vue/prettier", // vue
    // "@vue/prettier/@typescript-eslint", // vue
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
