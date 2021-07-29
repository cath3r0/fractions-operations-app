import { findGCD } from "../operations.js";

export class Fraction {
    numerator: number;
    denominator: number;
    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    toJson(): object {
        return { "numerator": this.numerator, "denominator": this.denominator };
    }

    simplifyFraction(): Fraction {
        let gcd = findGCD(this.numerator, this.denominator);
        return new Fraction(this.numerator / gcd, this.denominator / gcd);
    }

    toString = (): string => {
        return `${this.numerator}/${this.denominator}`;
    }
}