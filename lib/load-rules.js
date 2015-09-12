/**
 * @fileoverview Module for loading rules from files and directories.
 * @author Michael Ficarra
 */

"use strict";

if (process.browser) {
    module.exports = function() {
        return {
            "accessor-pairs": require("./rules/accessor-pairs"),
            "array-bracket-spacing": require("./rules/array-bracket-spacing"),
            "arrow-parens": require("./rules/arrow-parens"),
            "arrow-spacing": require("./rules/arrow-spacing"),
            "block-scoped-var": require("./rules/block-scoped-var"),
            "block-spacing": require("./rules/block-spacing"),
            "brace-style": require("./rules/brace-style"),
            "callback-return": require("./rules/callback-return"),
            "camelcase": require("./rules/camelcase"),
            "comma-dangle": require("./rules/comma-dangle"),
            "comma-spacing": require("./rules/comma-spacing"),
            "comma-style": require("./rules/comma-style"),
            "complexity": require("./rules/complexity"),
            "computed-property-spacing": require("./rules/computed-property-spacing"),
            "consistent-return": require("./rules/consistent-return"),
            "consistent-this": require("./rules/consistent-this"),
            "constructor-super": require("./rules/constructor-super"),
            "curly": require("./rules/curly"),
            "default-case": require("./rules/default-case"),
            "dot-location": require("./rules/dot-location"),
            "dot-notation": require("./rules/dot-notation"),
            "eol-last": require("./rules/eol-last"),
            "eqeqeq": require("./rules/eqeqeq"),
            "func-names": require("./rules/func-names"),
            "func-style": require("./rules/func-style"),
            "generator-star-spacing": require("./rules/generator-star-spacing"),
            "global-require": require("./rules/global-require"),
            "guard-for-in": require("./rules/guard-for-in"),
            "handle-callback-err": require("./rules/handle-callback-err"),
            "id-length": require("./rules/id-length"),
            "id-match": require("./rules/id-match"),
            "indent": require("./rules/indent"),
            "init-declarations": require("./rules/init-declarations"),
            "jsx-quotes": require("./rules/jsx-quotes"),
            "key-spacing": require("./rules/key-spacing"),
            "linebreak-style": require("./rules/linebreak-style"),
            "lines-around-comment": require("./rules/lines-around-comment"),
            "max-depth": require("./rules/max-depth"),
            "max-len": require("./rules/max-len"),
            "max-nested-callbacks": require("./rules/max-nested-callbacks"),
            "max-params": require("./rules/max-params"),
            "max-statements": require("./rules/max-statements"),
            "new-cap": require("./rules/new-cap"),
            "new-parens": require("./rules/new-parens"),
            "newline-after-var": require("./rules/newline-after-var"),
            "no-alert": require("./rules/no-alert"),
            "no-array-constructor": require("./rules/no-array-constructor"),
            "no-bitwise": require("./rules/no-bitwise"),
            "no-caller": require("./rules/no-caller"),
            "no-catch-shadow": require("./rules/no-catch-shadow"),
            "no-class-assign": require("./rules/no-class-assign"),
            "no-cond-assign": require("./rules/no-cond-assign"),
            "no-console": require("./rules/no-console"),
            "no-const-assign": require("./rules/no-const-assign"),
            "no-constant-condition": require("./rules/no-constant-condition"),
            "no-continue": require("./rules/no-continue"),
            "no-control-regex": require("./rules/no-control-regex"),
            "no-debugger": require("./rules/no-debugger"),
            "no-delete-var": require("./rules/no-delete-var"),
            "no-div-regex": require("./rules/no-div-regex"),
            "no-dupe-args": require("./rules/no-dupe-args"),
            "no-dupe-class-members": require("./rules/no-dupe-class-members"),
            "no-dupe-keys": require("./rules/no-dupe-keys"),
            "no-duplicate-case": require("./rules/no-duplicate-case"),
            "no-else-return": require("./rules/no-else-return"),
            "no-empty-character-class": require("./rules/no-empty-character-class"),
            "no-empty-label": require("./rules/no-empty-label"),
            "no-empty": require("./rules/no-empty"),
            "no-eq-null": require("./rules/no-eq-null"),
            "no-eval": require("./rules/no-eval"),
            "no-ex-assign": require("./rules/no-ex-assign"),
            "no-extend-native": require("./rules/no-extend-native"),
            "no-extra-bind": require("./rules/no-extra-bind"),
            "no-extra-boolean-cast": require("./rules/no-extra-boolean-cast"),
            "no-extra-parens": require("./rules/no-extra-parens"),
            "no-extra-semi": require("./rules/no-extra-semi"),
            "no-fallthrough": require("./rules/no-fallthrough"),
            "no-floating-decimal": require("./rules/no-floating-decimal"),
            "no-func-assign": require("./rules/no-func-assign"),
            "no-implicit-coercion": require("./rules/no-implicit-coercion"),
            "no-implied-eval": require("./rules/no-implied-eval"),
            "no-inline-comments": require("./rules/no-inline-comments"),
            "no-inner-declarations": require("./rules/no-inner-declarations"),
            "no-invalid-regexp": require("./rules/no-invalid-regexp"),
            "no-invalid-this": require("./rules/no-invalid-this"),
            "no-irregular-whitespace": require("./rules/no-irregular-whitespace"),
            "no-iterator": require("./rules/no-iterator"),
            "no-label-var": require("./rules/no-label-var"),
            "no-labels": require("./rules/no-labels"),
            "no-lone-blocks": require("./rules/no-lone-blocks"),
            "no-lonely-if": require("./rules/no-lonely-if"),
            "no-loop-func": require("./rules/no-loop-func"),
            "no-mixed-requires": require("./rules/no-mixed-requires"),
            "no-mixed-spaces-and-tabs": require("./rules/no-mixed-spaces-and-tabs"),
            "no-multi-spaces": require("./rules/no-multi-spaces"),
            "no-multi-str": require("./rules/no-multi-str"),
            "no-multiple-empty-lines": require("./rules/no-multiple-empty-lines"),
            "no-native-reassign": require("./rules/no-native-reassign"),
            "no-negated-in-lhs": require("./rules/no-negated-in-lhs"),
            "no-nested-ternary": require("./rules/no-nested-ternary"),
            "no-new-func": require("./rules/no-new-func"),
            "no-new-object": require("./rules/no-new-object"),
            "no-new-require": require("./rules/no-new-require"),
            "no-new-wrappers": require("./rules/no-new-wrappers"),
            "no-new": require("./rules/no-new"),
            "no-obj-calls": require("./rules/no-obj-calls"),
            "no-octal-escape": require("./rules/no-octal-escape"),
            "no-octal": require("./rules/no-octal"),
            "no-param-reassign": require("./rules/no-param-reassign"),
            "no-path-concat": require("./rules/no-path-concat"),
            "no-plusplus": require("./rules/no-plusplus"),
            "no-process-env": require("./rules/no-process-env"),
            "no-process-exit": require("./rules/no-process-exit"),
            "no-proto": require("./rules/no-proto"),
            "no-redeclare": require("./rules/no-redeclare"),
            "no-regex-spaces": require("./rules/no-regex-spaces"),
            "no-restricted-modules": require("./rules/no-restricted-modules"),
            "no-restricted-syntax": require("./rules/no-restricted-syntax"),
            "no-return-assign": require("./rules/no-return-assign"),
            "no-script-url": require("./rules/no-script-url"),
            "no-self-compare": require("./rules/no-self-compare"),
            "no-sequences": require("./rules/no-sequences"),
            "no-shadow-restricted-names": require("./rules/no-shadow-restricted-names"),
            "no-shadow": require("./rules/no-shadow"),
            "no-spaced-func": require("./rules/no-spaced-func"),
            "no-sparse-arrays": require("./rules/no-sparse-arrays"),
            "no-sync": require("./rules/no-sync"),
            "no-ternary": require("./rules/no-ternary"),
            "no-this-before-super": require("./rules/no-this-before-super"),
            "no-throw-literal": require("./rules/no-throw-literal"),
            "no-trailing-spaces": require("./rules/no-trailing-spaces"),
            "no-undef-init": require("./rules/no-undef-init"),
            "no-undef": require("./rules/no-undef"),
            "no-undefined": require("./rules/no-undefined"),
            "no-underscore-dangle": require("./rules/no-underscore-dangle"),
            "no-unexpected-multiline": require("./rules/no-unexpected-multiline"),
            "no-unneeded-ternary": require("./rules/no-unneeded-ternary"),
            "no-unreachable": require("./rules/no-unreachable"),
            "no-unused-expressions": require("./rules/no-unused-expressions"),
            "no-unused-vars": require("./rules/no-unused-vars"),
            "no-use-before-define": require("./rules/no-use-before-define"),
            "no-useless-call": require("./rules/no-useless-call"),
            "no-useless-concat": require("./rules/no-useless-concat"),
            "no-var": require("./rules/no-var"),
            "no-void": require("./rules/no-void"),
            "no-warning-comments": require("./rules/no-warning-comments"),
            "no-with": require("./rules/no-with"),
            "object-curly-spacing": require("./rules/object-curly-spacing"),
            "object-shorthand": require("./rules/object-shorthand"),
            "one-var": require("./rules/one-var"),
            "operator-assignment": require("./rules/operator-assignment"),
            "operator-linebreak": require("./rules/operator-linebreak"),
            "padded-blocks": require("./rules/padded-blocks"),
            "prefer-arrow-callback": require("./rules/prefer-arrow-callback"),
            "prefer-const": require("./rules/prefer-const"),
            "prefer-reflect": require("./rules/prefer-reflect"),
            "prefer-spread": require("./rules/prefer-spread"),
            "prefer-template": require("./rules/prefer-template"),
            "quote-props": require("./rules/quote-props"),
            "quotes": require("./rules/quotes"),
            "radix": require("./rules/radix"),
            "require-jsdoc": require("./rules/require-jsdoc"),
            "require-yield": require("./rules/require-yield"),
            "semi-spacing": require("./rules/semi-spacing"),
            "semi": require("./rules/semi"),
            "sort-vars": require("./rules/sort-vars"),
            "space-after-keywords": require("./rules/space-after-keywords"),
            "space-before-blocks": require("./rules/space-before-blocks"),
            "space-before-function-paren": require("./rules/space-before-function-paren"),
            "space-before-keywords": require("./rules/space-before-keywords"),
            "space-in-parens": require("./rules/space-in-parens"),
            "space-infix-ops": require("./rules/space-infix-ops"),
            "space-return-throw-case": require("./rules/space-return-throw-case"),
            "space-unary-ops": require("./rules/space-unary-ops"),
            "spaced-comment": require("./rules/spaced-comment"),
            "strict": require("./rules/strict"),
            "use-isnan": require("./rules/use-isnan"),
            "valid-jsdoc": require("./rules/valid-jsdoc"),
            "valid-typeof": require("./rules/valid-typeof"),
            "vars-on-top": require("./rules/vars-on-top"),
            "wrap-iife": require("./rules/wrap-iife"),
            "wrap-regex": require("./rules/wrap-regex"),
            "yoda": require("./rules/yoda")
        };
    };
} else {
    //------------------------------------------------------------------------------
    // Requirements
    //------------------------------------------------------------------------------

    var fs = require("fs"),
        path = require("path");

    //------------------------------------------------------------------------------
    // Public Interface
    //------------------------------------------------------------------------------

    /**
     * Load all rule modules from specified directory.
     * @param {String} [rulesDir] Path to rules directory, may be relative. Defaults to `lib/rules`.
     * @returns {Object} Loaded rule modules by rule ids (file names).
     */
    module.exports = function(rulesDir) {
        if (!rulesDir) {
            rulesDir = path.join(__dirname, "rules");
        } else {
            rulesDir = path.resolve(process.cwd(), rulesDir);
        }

        var rules = Object.create(null);
        fs.readdirSync(rulesDir).forEach(function(file) {
            if (path.extname(file) !== ".js") {
                return;
            }
            rules[file.slice(0, -3)] = require(path.join(rulesDir, file));
        });
        return rules;
    };
}
