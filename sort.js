"use strict";
function bubbleSort(array) {
    var container = array.slice();
    for (var i = container.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (container[j] > container[j + 1]) {
                var tmp = container[j + 1];
                container[j + 1] = container[j];
                container[j] = tmp;
            }
        }
    }
    return container;
}
console.log(bubbleSort([100, 2, 399, 400, 1, 0]));
function selectSort(array) {
    var container = array.slice();
    for (var i = 0; i <= container.length - 2; i++) {
        var minIndex = i;
        for (var j = i + 1; j <= container.length - 1; j++) {
            if (container[minIndex] > container[j]) {
                var tmp = container[minIndex];
                container[minIndex] = container[j];
                container[j] = tmp;
            }
        }
    }
    return container;
}
console.log(selectSort([0.1, 0, 0.3, 1, 3, 2, 0]));
