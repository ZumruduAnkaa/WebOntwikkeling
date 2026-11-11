import { add, subtract, multiply, divide, power } from "./math.ts";

console.log(add(2, 3));
console.log(subtract(10, 4));
console.log(multiply(3, 4));
console.log(divide(10, 2));
console.log(power(2, 3));


try {
    console.log(divide(5,0));
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
}