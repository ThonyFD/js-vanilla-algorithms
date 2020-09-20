// A simple implementation of binary search algorithm
class BinarySearch {
    static search(array, item, min, max) {

        if (min > max) {
            return -1;
        }

        const middle = Math.floor((min + max) / 2);

        if (array[middle] === item) {
            return middle;
        }

        if (array[middle] > item) {
            return this.search(array, item, min, middle - 1);
        }

        return this.search(array, item, middle + 1, max);


    }

    static exec(array, item) {

        if (!array || !array.length || isNaN(item)) {
            return 'invalid parameters';
        }

        return this.search(array, item, 0, array.length - 1);

    }
}

module.exports = BinarySearch;
