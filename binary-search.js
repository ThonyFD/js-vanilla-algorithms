'use strict';
// A simple implementation of binary search algorithm

const search = (array, item, min, max) => {

    if (min > max) {
        return -1;
    }

    const middle = Math.floor((min + max) / 2);

    if (array[middle] === item) {
        return middle;
    }

    if (array[middle] > item) {
        return search(array, item, min, middle - 1);
    }

    return search(array, item, middle + 1, max);


}

const binarySearch = (array, item) => {

    if (!array || !array.length || isNaN(item)) {
        return 'invalid parameters';
    }

    console.log('array length: ', array.length);
    return search(array, item, 0, array.length -1);

}
console.log(binarySearch([0, 1, 1, 3, 4, 6, 7, 8, 9, 19, 25, 40, 56, 100, 100, 435, 800], 800) + 1);

// export default binarySearch;
