# Disallow `if` as the Only Statement in an `else` Block (no-lonely-if)

If an `if` statement is the only statement in the `else` block of a parent `if` statement, it is often clearer to combine the two to using `else if` form.

```js
if (foo) {
    // ...
} else {
    if (bar) {
        // ...
    }
}
```

should be rewritten as

```js
if (foo) {
    // ...
} else if (bar) {
    // ...
}
```

## Rule Details

This rule warns when an `if` statement's `else` block contains only another `if` statement.

The following patterns are considered warnings:

```js
/*eslint no-lonely-if: 2*/

if (condition) {
    // ...
} else {
    if (anotherCondition) { /*error Unexpected if as the only statement in an else block.*/
        // ...
    }
}
```

The following patterns are not considered warnings:

```js
/*eslint no-lonely-if: 2*/

if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
}

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    }
    doSomething();
}
```

## When Not To Use It

Disable this rule if the code is clearer without requiring the `else if` form.
