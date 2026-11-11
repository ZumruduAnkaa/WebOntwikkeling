import { test, describe, expect } from "vitest";
import { add, subtract, multiply, divide } from './math.ts';

// Write your tests here
describe('add', () => {
    test('twee getallen optellen', () =>{
        expect(add(2,3)).toBe(5);
        expect(add(-2,3)).toBe(1);
        expect(add(0,0)).toBe(0);
    });

    test('geeft een error wanneer NaN is', () =>{
        expect(() => add(NaN, 3)).toThrow("Arguments must be numbers");
        expect(() => add(5, NaN)).toThrow("Arguments must be numbers");
    });
});


describe('subtract', () =>{
    test('het tweede getal van het eerste aftrekt', () =>{
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(3, 5)).toBe(-2);
    });

    test('geeft een error wanneer NaN is', () => {
        expect(() => subtract(5, NaN)).toThrow("Arguments must be numbers");
        expect(() => subtract(NaN, 5)).toThrow("Arguments must be numbers");
    });
});

describe('multiply', () => {
    test('twee getallen vermenigvuldigt', () =>{
        expect(multiply(2,3)).toBe(6);
        expect(multiply(-2,3)).toBe(-6);
        expect(multiply(5,0)).toBe(0);
    });

    test('geeft een error wanneer NaN is', () =>{
        expect(() => multiply(3, NaN)).toThrow("Arguments must be numbers");
        expect(() => multiply(NaN, 3)).toThrow("Arguments must be numbers");
    });
});

describe('divide', () => {
    test('het eerste getal door het tweede deelt', () => {
        expect(divide(6,3)).toBe(2);
        expect(divide(10,4)).toBe(2.5);
        expect(divide(1,3)).toBeCloseTo(0.333);
    });

    test('geeft een error wanneer NaN is', () => {
        expect(() => divide(6, NaN)).toThrow("Arguments must be numbers");
        expect(() => divide(NaN, 6)).toThrow("Arguments must be numbers");
    });

    test('geeft een error wanneer delen met 0', () => {
        expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
    });
});



// Werk de tests voor deze oefening uit.
test.todo("Schrijf de tests voor deze oefening");
