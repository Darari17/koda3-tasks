const processNumbers = (numbers) => {
    let result = 1;
    for (const x of numbers) {
        if (x % 2 != 0) {
            result *= x;
        }
    }
    return result;
};

module.exports = processNumbers;
