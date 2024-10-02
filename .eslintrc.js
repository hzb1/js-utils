module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    jasmine: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-expressions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extensions': 'off',
    'import/extensions': 'off',
    'max-len': ['error', { code: 240 }],
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '**/*.spec.ts'] }],
    // 'no-restricted-syntax': [
    //   'error',
    //   {
    //     selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
    //     message: 'Unexpected property on console object was called',
    //   },
    // ],
  },
};
