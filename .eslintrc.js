module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "no-console": 0,
    "comma-dangle": 1,
    "no-extra-semi": 1,
    "no-extra-boolean-cast": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-useless-escape": 1
  },
  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ],
  globals: {
    document: true,
    window: true,
    $: true,
    moment: true
  }
};
