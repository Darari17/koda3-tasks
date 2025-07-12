const countArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error ("parameter harus bertipe data Array");
    }

    let result = 1;
    for (const x of arr) {
        result *= x;
    }

    return result;
};

module.exports = countArray;
