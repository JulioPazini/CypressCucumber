module.exports = {
    rules: {
      'prefer-destructuring': 'warn',
      'class-methods-use-this': 'off',
      'global-require': 'off',
      'func-names': 'off',
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-cycle': 'off',
      'no-irregular-whitespace': 'off',
      'no-magic-numbers': [
        'error',
        {
          ignore: [1920, 1080],
          ignoreArrayIndexes: true,
          enforceConst: true,
        },
      ],
    },
    globals: {
      browser: true,
      'expect': true,
      $: true,
      $$: true,
    },
    env: {
      mocha: true,
    },
    extends: ['airbnb-base', 'prettier'],
  };