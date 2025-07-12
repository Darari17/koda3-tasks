const printTable = (numbers) => {
    if (typeof numbers !== "number" || numbers <= 0) {
        console.log("Parameter harus bertipe data nomor dan harus nomor positif");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${numbers} x ${i} = ${i * numbers}`);
    }
};

module.exports = printTable;
