'use strict';
// A simple implementation of merge sort algorithm

const merge = (arrayA, arrayB) => {
    const merged = [];

    while (arrayA.length && arrayB.length) {
        if (arrayA[0] < arrayB[0]) {
            merged.push(arrayA.shift());
        } else {
            merged.push(arrayB.shift());
        }
    }

    return merged.concat(arrayA, arrayB);
}

const mergeSort = (arrayToBeOrdered) => {

    if (!arrayToBeOrdered || arrayToBeOrdered.length < 2) {
        return arrayToBeOrdered || [];
    }

    const middle = Math.floor(arrayToBeOrdered.length / 2);
    const left = arrayToBeOrdered.slice(0, middle);
    const right = arrayToBeOrdered.slice(middle, arrayToBeOrdered.length);
    return merge(mergeSort(left), mergeSort(right));

}
console.log(mergeSort([0, 9, 1, 1, 100, 6, 4, 8, 3, 7, 100, 56, 800, 435, 19, 25, 40]))

// export default mergeSort;
