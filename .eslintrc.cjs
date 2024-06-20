module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['nuxt', 'vue', 'prettier'],
  rules: {
    'new-cap': 'off',
    'vue/component-name-in-template-casing': ['off', 'PascalCase'],
    'vue/no-unused-components': ['warn'],
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'no-unused-vars': ['error'],
    'no-lonely-if': ['warn'],
    'require-await': ['warn'],
    'handle-callback-err': ['warn'],
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0,
  },
}
