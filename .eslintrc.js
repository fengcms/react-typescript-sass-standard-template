module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // 'standard', 'standard-jsx', 'standard-react'
    'standard-with-typescript', 'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    // parser: 'babel-eslint'
    project: './tsconfig.json'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
