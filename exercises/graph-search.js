const airports = 'PTY COL LIM SSA SJO TNO LIR SAP MEX PAN MGA'.split(' ').sort();
const routes = [
    ['PTY', 'COL'],
    ['PTY', 'LIM'],
    ['PTY', 'SSA'],
    ['PTY', 'SJO'],
    ['SJO', 'TNO'],
    ['SJO', 'LIR'],
    ['LIR', 'SAP'],
    ['SAP', 'MEX'],
    ['MEX', 'PAN'],
    ['MEX', 'MGA']
].sort();

const graph = new Map();
const addAirport = (airport) => {
    graph.set(airport, []);
}
const addRoute = (origin, destination) => {
    graph.get(origin).push(destination);
    graph.get(destination).push(origin);
}

airports.forEach(addAirport);
routes.forEach(route => addRoute(...route));

// BFS Implementation
const searchRoutesByShort = (origin, destinationToSearch) => {

    const predecessor = {};
    const queue = [origin];
    const visited = new Set();

    while (queue.length > 0) {
        let airport = queue.shift();
        const destinations = graph.get(airport);

        for (const destination of destinations.sort()) {

            if (destinationToSearch === destination) {
                const path = [destinationToSearch];
                let airportCopy = airport;
                while (airportCopy !== origin) {
                    path.push(airportCopy);
                    airportCopy = predecessor[airportCopy];
                }
                path.push(airportCopy);
                path.reverse();
                console.log(`found a route route: ${path.join(' --> ')}`);
                // return;
            }

            if (!visited.has(destination)) {
                queue.push(destination);
                visited.add(destination);
                predecessor[destination] = airport;
            }
        }
    }
}

// DFS Implementation
const searchOneRoute = (origin, destinationToSearch, visited = new Set()) => {
    console.log('origin: ', origin);
    visited.add(origin);

    const destinations = graph.get(origin);

    for (const destination of destinations) {
        if (destination === destinationToSearch) {
            console.log('route found in : ', origin);
            return;
        }

        if (!visited.has(destination)) {
            searchOneRoute(destination, destinationToSearch, visited);
        }
    }
}

console.log(graph)
searchRoutesByShort('TNO', 'PTY')
// searchOneRoute('MEX', 'SJO')

