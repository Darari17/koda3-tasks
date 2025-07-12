const triangle2nd = (numbers) => {
    if (typeof numbers !== "number" || numbers <= 0) {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
        return;
    }

    for (let i = 1; i <= numbers; i++) {
        let result = "";
        for (let j = i; j >= 1; j--) {
            result += j + " ";
        }
        console.log(result);
    }
};

module.exports = triangle2nd;
