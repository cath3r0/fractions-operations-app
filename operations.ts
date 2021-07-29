import { Fraction } from "./model/fraction.js";

function findLCM(num1: number, num2: number) {
    let gcd = findGCD(num1, num2);

    return (num1 * num2) / gcd;
}

export function findGCD(num1: number, num2: number): number {
    if (num2 === 0) {
        return num1;
    }

    return findGCD(num2, num1 % num2);
}

export function addFractions(fr1: Fraction, fr2: Fraction): Fraction {
    let lcm = findLCM(fr1.denominator, fr2.denominator);
    if (fr1.denominator === fr2.denominator) {
        return new Fraction(fr1.numerator + fr2.numerator, fr1.denominator).simplifyFraction();
    }
    let num = (fr1.numerator * (lcm / fr1.denominator)) + (fr2.numerator * (lcm / fr2.denominator))
    return new Fraction(num, lcm).simplifyFraction();
}

export function multiplyFractions(fr1: Fraction, fr2: Fraction): Fraction {
    return new Fraction(fr1.numerator * fr2.numerator, fr1.denominator * fr2.denominator).simplifyFraction();
}

export function divideFractions(fr1: Fraction, fr2: Fraction): Fraction {
    return new Fraction(fr1.numerator * fr2.denominator, fr1.denominator * fr2.numerator).simplifyFraction();
}

export function subtractFractions(fr1: Fraction, fr2: Fraction) {
    let lcm = findLCM(fr1.denominator, fr2.denominator);
    if (fr1.denominator === fr2.denominator) {
        return new Fraction(fr1.numerator - fr2.numerator, fr1.denominator).simplifyFraction();
    }
    let num = (fr1.numerator * (lcm / fr1.denominator)) - (fr2.numerator * (lcm / fr2.denominator))
    return new Fraction(num, lcm).simplifyFraction();
}