const isBalanced = (string, openChars, closeChars) => {

    if (!string || !openChars || !closeChars) {
        return 'invalid parameters';
    }
    const opensLIFOArray = [];

    for (let char of string) {
        if (openChars.indexOf(char) > -1) {
            opensLIFOArray.push(char);
        }else {

            const indexOfClose = closeChars.indexOf(char);
            const lastOpen = opensLIFOArray.pop();

            if (!(indexOfClose > -1 && lastOpen === openChars[indexOfClose])) {
                return 'its not balanced, needs a Thanos snap';
            }
        }
    }

    return 'Perfectly balanced as all things should be';

}
console.log('balanced: ', isBalanced('{{{[({})]}}}', ['{', '[', '('], ['}', ']', ')']));
