const range = (num1, num2) => {
    const result = [];
    for (let i = num1; i <= num2; i++) {
        result.push(i);
    }
    return result.join(", ");
};

module.exports = range;
