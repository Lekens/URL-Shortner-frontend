const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'import',
  ],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'jsx-no-lambda': 0,
    semi: [2, 'always'],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'object-shorthand': [0, 'never'],
    quotes: [2, 'single'],
    '@typescript-eslint/no-var-requires': 0,
    'member-ordering': 0,
    'object-literal-sort-keys': 0,
    'no-shadowed-variable': 0,
    'no-consecutive-blank-lines': 0,
    'no-string-literal': 0,
    'jsx-no-multiline-js': 0,
    'jsx-boolean-value': 0,
    'arrow-parens': 0,
    'no-implicit-dependencies': 0,
    'no-submodule-imports': 0,
    'no-case-declarations': 1,
    '@typescript-eslint/no-empty-function': 0,
    // '@typescript-eslint/ban-ts-ignore': 1,
    '@typescript-eslint/indent': 0,
    'jsx-alignment': 0,
    'jsx-wrap-multiline': 0,
    '@typescript-eslint/camelcase': 0,
    'prettier/prettier': ['error', {
      endOfLine: 'auto',
    }, prettierOptions],
    'class-methods-use-this': 0,
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '**/*.scss',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'import/imports-first': 2,
    'import/newline-after-import': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': [2, { caseSensitive: false }], // ts already checks case sensitive imports
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 1,
    'no-param-reassign': ['error', { props: false }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    ' jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/aria-role': [0, { ignoreNonDOM: true }],
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': [0, { extensions: ['.tsx'] }],
    'react/jsx-no-target-blank': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'require-yield': 0,
    'arrow-body-style': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  },
};
