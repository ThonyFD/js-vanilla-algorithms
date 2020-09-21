// implementacion de fibonacci con memoización
const fibonacci = (num) => {
    let memoization = [0];
    let fib = (n) => {

        if (n < 0) {
            memoization[n] = 0;
            return 0;
        }

        if(n === 1) {
            memoization[n] = 1;
            return 1;
        }

        let result = memoization[n];
        if (isNaN(result)) {
            result = fib(n - 1) + fib(n - 2);
            memoization[n] = result;
        }

        return result;
    }

    return fib(num);
}

console.log(fibonacci(9));
