module.exports = {
  env: { browser: true, es2020: true, 'vitest-globals/env': true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:vitest-globals/recommended',
    '@feature-sliced',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@tanstack/query/recommended'
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    },
    'react': {
      'createClass': 'createReactClass', // Regex for Component Factory to use,
                                         // default to "createReactClass"
      'pragma': 'React',  // Pragma to use, default to "React"
      'fragment': 'Fragment',  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      'version': 'detect' // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
    },
    'propWrapperFunctions': [
      'forbidExtraProps',
      { 'property': 'freeze', 'object': 'Object' },
      { 'property': 'myFavoriteWrapper' },
      { 'property': 'forbidExtraProps', 'exact': true }
    ],
    'componentWrapperFunctions': [
      'observer', // `property`
      { 'property': 'styled' }, // `object` is optional
      { 'property': 'observer', 'object': 'Mobx' },
      { 'property': 'observer', 'object': '<pragma>' } // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    'formComponents': [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      'CustomForm',
      { 'name': 'SimpleForm', 'formAttribute': 'endpoint' },
      { 'name': 'Form', 'formAttribute': ['registerEndpoint', 'loginEndpoint'] } // allows specifying multiple properties if necessary
    ],
    'linkComponents': [
      'Hyperlink',
      { 'name': 'MyLink', 'linkAttribute': 'to' },
      { 'name': 'Link', 'linkAttribute': ['to', 'href'] }
    ]
  },
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'filename-rules'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',

    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: 'It is better if your prop ({{ propName }}) starts with `is` or `has`'
      }
    ],
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/function-component-definition': ['error', { 'namedComponents': 'arrow-function' }],
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-multi-comp': 'error',

    'filename-rules/match': ['error', { '.ts': 'kebab-case', '.tsx': 'kebab-case' }],

    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE'],
      },
      { selector: ['enum'], format: ['UPPER_CASE'] },
      {
        selector: ['function'],
        format: ['camelCase'],
      },
      {
        selector: 'variable',
        types: ['boolean', 'array', 'number', 'string'],
        modifiers: ['exported'],
        format: ['UPPER_CASE'],
      },
      { selector: ['typeAlias'], format: ['PascalCase'], prefix: ['T'] },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: 'React' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/max-params': 'error',
    "@typescript-eslint/no-array-delete": "error",
  }
};
