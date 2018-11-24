module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "indent": "off",
        // "vue/html-indent": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "no-console": "off"
    }
};