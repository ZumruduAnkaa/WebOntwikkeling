function add(a: number, b: number): number{
    return a + b;
}

function subtract(a: number, b: number): number{
    return a - b;
}

function multiply(a: number, b: number): number{
    return a * b;
}

function divide(a: number, b: number): number{
    return a / b;
}

let result: number = divide(multiply(add(4,5), subtract(6,3)), 2);

console.log(result);
