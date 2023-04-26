module.exports = {
  env: {
    browser: true,
    jest: true
  },
  globals: {
    '_': 'readonly',
    '$': 'readonly',
    'axios': 'readonly',
    'Vue': 'readonly'
  },
  plugins: [
    'vue'
  ],
  extends: [
    'standard',
    'plugin:vue/recommended'
  ]
}
