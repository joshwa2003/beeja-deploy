module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { 
        'vars': 'all', 
        'varsIgnorePattern': '^_', 
        'args': 'after-used', 
        'argsIgnorePattern': '^_' 
      }
    ],
    'react/prop-types': 'warn',
    'no-unused-vars': 'off', // turned off in favor of unused-imports/no-unused-vars
    'react-hooks/rules-of-hooks': 'error',
    'react/no-unescaped-entities': 'warn', // Change from error to warning
    'no-unsafe-optional-chaining': 'warn', // Change from error to warning
    'no-prototype-builtins': 'warn', // Change from error to warning
    'no-useless-escape': 'warn' // Change from error to warning
  },
}
