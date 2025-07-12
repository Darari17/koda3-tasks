const printTable = (numbers) => {
    if (typeof numbers !== "number" || numbers <= 0) {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif");
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${numbers} x ${i} = ${i * numbers}`);
    }
};

module.exports = printTable;
