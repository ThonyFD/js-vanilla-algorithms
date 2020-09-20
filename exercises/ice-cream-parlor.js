// A resolve for Ice Cream Parlor problem
const BinarySearch = require('../plain-algorithms/binary-search');

const iceCreamParlor = (menu, budget, iceCreamsToBuy) => {
    const sortedMenu = menu.sort();


    for (let f = 0; f < sortedMenu.length; f++) {
        const boughtIceCreams = [sortedMenu[f]];
        if (sortedMenu[f] < budget) {
            let change = budget - sortedMenu[f];
            let nextIceCream = BinarySearch.exec(sortedMenu, change);

            if (nextIceCream > -1) {
                boughtIceCreams.push(sortedMenu[nextIceCream]);
            }
        }

        if (boughtIceCreams.length > 1) {
            boughtIceCreams.forEach((iceCream, g) => {
                console.log(`${g + 1} Ice Cream: ${iceCream}`);
            })
            console.log(`_________________________________________`)
        }
    }

}

iceCreamParlor([25, 25, 40, 10, 5, 45, 13, 90, 78, 1, 49, 8, 42, 15, 25, 35, 30, 40], 60, 3);
