'use strict';
// A simple implementation of quick sort algorithm

const bubbleSort = (arrayToOrder) => {

    if (!arrayToOrder || !arrayToOrder.length) {
        return 'invalid parameters';
    }

    const length = arrayToOrder.length;

    // I'M SIGNED TO STOP USING i IN FOR LOOP XD
    for (let f = 0; f < length; f++) {
        for (let g = 0; g < length; g++) {
            if (arrayToOrder[g] > arrayToOrder[g + 1]) {
                let temp = arrayToOrder[g];

                arrayToOrder[g] = arrayToOrder[g+1];
                arrayToOrder[g+1] = temp;
            }
        }
    }

    return arrayToOrder;
}

console.log(bubbleSort([0, 9, 1, 1, 100, 6, 4, 8, 3, 7, 100, 56, 800, 435, 19, 25, 40]))

// export default quickSort;
