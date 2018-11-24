module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'standard',
        'plugin:vue/recommended'
    ],
    rules: {
        'arrow-parens': 'off',
        'indent': 'off',
        'no-new': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/attributes-order': 'off',
        'vue/html-indent': 'off',
        'vue/require-v-for-key': 'off'
    }
}