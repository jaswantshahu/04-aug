class Calculator {
    constructor() {
        console.log("Constructor Executed");
    }

    addition(x, y) {
        let sum = x + y;
        return sum;
    }

    subtraction(x, y) {
        let result = x - y;
        return result;
    }

    multiply(x, y) {
        let result = x * y;
        return result;
    }

    division(x, y) {
        let result = x / y;
        return result;
    }

    modulus(x, y) {
        let result = x % y;
        return result;
    }
}