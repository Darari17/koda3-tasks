/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task Farid
 */
const farid = require("./tasks/farid");

function taskFarid(){
    // 1. segitiga pertama
    console.log();
    console.log("\=== Task 1: Triangle===");
    try {
        farid.triangle1st("abc");
        farid.triangle1st(-1);
        farid.triangle1st(1);
        farid.triangle1st(2);
        farid.triangle1st(5);
    } catch (error) {
        console.log(error.message);
    }

    // 2. hitung array
    console.log();
    console.log("=== Task 2: Count Array ===");
    try {
        console.log(farid.countArr([1,2,3,4,5]));
        console.log(farid.countArr([2,2,2,2,2]));
    } catch (error) {
        console.log(error.message);
    }

    // 3. segitiga kedua
    console.log();
    console.log("=== Task 3: Triangle===");
    try {
        farid.triangle2nd("abc");
        farid.triangle2nd(-1);
        farid.triangle2nd(1);
        farid.triangle2nd(2);
        farid.triangle2nd(5);
    } catch (error) {
        console.log(error.message);
    }

    // 4. perkalian element ganjil
    console.log();
    console.log("=== Task 4: Multiply element===");
    try {
        console.log(farid.processNumbers([1,2,3,4,5]));
        console.log(farid.processNumbers([2,4,6,8,]));
    } catch (error) {
        console.log(error.message);
    }

    // 5. cetak tabel perkalian
    console.log();
    console.log("=== Task 5: Print multiply table===");
    try {
        farid.printTable("abc");
        farid.printTable(-1);
        farid.printTable(3);
    } catch (error) {
        console.log(error.message);
    }

    // 6. rentang antara 2 parameter angka
    console.log();
    console.log("=== Task 6: Range numbers===");
    try {
        console.log(farid.range(1,5));
        console.log(farid.range(5,10));
    } catch (error) {
        console.log(error.message);
    }
}
taskFarid();

/**
 * Task "Person Name"
 */

// import your tasks here
