"use strict";
function findMin(a, b) {
    if (typeof a === 'string') {
        a = parseInt(a);
    }
    if (typeof b === 'string') {
        b = parseInt(b);
    }
    return a > b ? b : a;
}
console.log(findMin(11, 20));
console.log(findMin("11", "20"));
// sentence below will cause error
// console.log(findMin('222', 100))
