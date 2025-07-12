const triangle1st = (numbers) => {
    if (typeof numbers !== "number" || numbers <= 0) {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
        return;
    }

    for (let i = 1; i <= numbers; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += j + " ";
        }
        console.log(result);
    }
};

module.exports = triangle1st;
