import {describe, expect, test} from 'vitest';
import { add, subtract, multiply, divide, power } from "./math.ts";

describe('add', () =>{
    test('som van twee positieve getallen', () => {
        expect(add(2,3)).toBe(5);
    });
    test('som met een negatief getal', () => {
        expect(add(5,-3)).toBe(2);
    });
    test('optellen met nul', () => {
        expect(add(7,0)).toBe(7);
    });
});


describe('subtract', () => {
    test('verschil van twee getallen', () =>{
        expect(subtract(5,3)).toBe(2);
    });
    test('resultaat is negatief', () =>{
        expect(subtract(5,7)).toBe(-2);
    });
});

describe('multiply', () =>{
    test('product van twee getallen', () =>{
        expect(multiply(2,3)).toBe(6);
    });
    test('vermenigvuldigen met nul', () =>{
        expect(multiply(2,0)).toBe(0);
    });
});

describe('divide', () => {
    test('deling van twee getallen', () => {
        expect(divide(6,2)).toBe(3);
    });
    test('gooit een fout bij deling door nul', () => {
        expect(() => divide(6,0)).toThrow("Cannot divide by zero");
    });
});

describe('power', () => {
    test('macht van een getal', () =>{
        expect(power(2,3)).toBe(8);
    });
    test('macht nul geeft altijd 1', () =>{
        expect(power(5,0)).toBe(1);
        expect(power(-3,0)).toBe(1);
    });
});