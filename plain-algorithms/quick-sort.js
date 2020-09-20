'use strict';
// A simple implementation of quick sort algorithm

const quickSort = (arrayToOrder) => {

    if (!arrayToOrder || !arrayToOrder.length) {
        return [];
    }

    const leftArray = [];
    const right = [];
    const pivot = arrayToOrder[0];

    // I'M SIGNED TO STOP USING i IN FOR LOOP XD
    for (let f = 1; f < arrayToOrder.length; f++) {
        if (pivot > arrayToOrder[f]) {
            leftArray.push(arrayToOrder[f]);
        } else {
            right.push(arrayToOrder[f]);
        }
    }

    return [].concat(quickSort(leftArray), pivot, quickSort(right));
}

console.log(quickSort([0, 9, 1, 1, 100, 6, 4, 8, 3, 7, 100, 56, 800, 435, 19, 25, 40]))

// export default quickSort;
