module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    globals: {
        expect: true,
        jest: true,
        test: true,
    },
    plugins: ['svelte3', 'prettier', 'testing-library', 'jest', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:testing-library/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    rules: {
        'testing-library/await-async-query': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-debug': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'no-template-curly-in-string': 'error',
        'no-unsafe-negation': 'error',
        'valid-jsdoc': 'off',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-empty-function': 'warn',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-global-assign': 'error',
        'no-implied-eval': 'error',
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-magic-numbers': 'off',
        'no-multi-str': 'warn',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-concat': 'warn',
        'no-useless-escape': 'warn',
        'no-void': 'error',
        'no-with': 'error',
        radix: 'error',
        'vars-on-top': 'off',
        yoda: 'warn',
        strict: ['error', 'safe'],
        'no-shadow-restricted-names': 'error',
        'no-undef-init': 'warn',
        'no-use-before-define': 'error',
        camelcase: 'off',
        'consistent-this': ['error', '_this'],
        'id-blacklist': 'off',
        'max-depth': ['warn', 4],
        'max-nested-callbacks': ['warn', 3],
        'max-params': ['warn', 3],
        'max-statements-per-line': [
            'error',
            {
                max: 1,
            },
        ],
        'newline-after-var': 'warn',
        'newline-before-return': 'warn',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'warn',
        'no-new-object': 'error',
        'no-self-assign': 'error',
        'no-unneeded-ternary': 'warn',
        'spaced-comment': ['error', 'always'],
        'constructor-super': 'error',
        'no-class-assign': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-this-before-super': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'prefer-const': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'prefer-object-spread': 'error',
        'prettier/prettier': 'error',
    },
    overrides: [
        {
            files: ['src/**/*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
};
