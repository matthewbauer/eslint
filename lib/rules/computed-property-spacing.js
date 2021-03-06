/**
 * @fileoverview Disallows or enforces spaces inside computed properties.
 * @author Jamund Ferguson
 * @copyright 2015 Jamund Ferguson. All rights reserved.
 */
"use strict";

var astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
    var propertyNameMustBeSpaced = context.options[0] === "always"; // default is "never"

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    /**
    * Reports that there shouldn't be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoBeginningSpace(node, token) {
        context.report(node, token.loc.start,
            "There should be no space after '" + token.value + "'");
    }

    /**
    * Reports that there shouldn't be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoEndingSpace(node, token) {
        context.report(node, token.loc.start,
            "There should be no space before '" + token.value + "'");
    }

    /**
    * Reports that there should be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredBeginningSpace(node, token) {
        context.report(node, token.loc.start,
            "A space is required after '" + token.value + "'");
    }

    /**
    * Reports that there should be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredEndingSpace(node, token) {
        context.report(node, token.loc.start,
                    "A space is required before '" + token.value + "'");
    }

    /**
     * Returns a function that checks the spacing of a node on the property name
     * that was passed in.
     * @param {String} propertyName The property on the node to check for spacing
     * @returns {Function} A function that will check spacing on a node
     */
    function checkSpacing(propertyName) {
        return function(node) {
            if (!node.computed) {
                return;
            }

            var property = node[propertyName];

            var before = context.getTokenBefore(property),
                first = context.getFirstToken(property),
                last = context.getLastToken(property),
                after = context.getTokenAfter(property);

            if (astUtils.isTokenOnSameLine(before, first)) {
                if (propertyNameMustBeSpaced) {
                    if (!astUtils.isTokenSpaced(before, first) && astUtils.isTokenOnSameLine(before, first)) {
                        reportRequiredBeginningSpace(node, before);
                    }
                } else {
                    if (astUtils.isTokenSpaced(before, first)) {
                        reportNoBeginningSpace(node, before);
                    }
                }
            }

            if (astUtils.isTokenOnSameLine(last, after)) {
                if (propertyNameMustBeSpaced) {
                    if (!astUtils.isTokenSpaced(last, after) && astUtils.isTokenOnSameLine(last, after)) {
                        reportRequiredEndingSpace(node, after);
                    }
                } else {
                    if (astUtils.isTokenSpaced(last, after)) {
                        reportNoEndingSpace(node, after);
                    }
                }
            }
        };
    }


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {
        Property: checkSpacing("key"),
        MemberExpression: checkSpacing("property")
    };

};

module.exports.schema = [
    {
        "enum": ["always", "never"]
    }
];
