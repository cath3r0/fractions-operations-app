import { strict as assert } from 'assert'
import { Fraction } from '../model/fraction.js'
import * as operations from "../operations.js";

describe('Operation', function () {
    describe('addition', function () {
        var data = [
            [new Fraction(1, 3), new Fraction(1, 3), new Fraction(2, 3)],
            [new Fraction(1, 3), new Fraction(1, 6), new Fraction(1, 2)],
            [new Fraction(0, 1), new Fraction(1, 1), new Fraction(1, 1)]
        ];

        const test = (fr1: Fraction, fr2: Fraction, expectedResult: Fraction) => {
            it(`should return ${expectedResult} when called ${fr1} + ${fr2}`, function () {
                var actualResult = operations.addFractions(fr1, fr2);
                assert.equal(JSON.stringify(actualResult), JSON.stringify(expectedResult), `Result for ${fr1} + ${fr2} was ${actualResult}`);
            })
        };

        data.forEach(val => {
            test(val[0], val[1], val[2]);
        })
    })
    describe('subtraction', function () {
        var data = [
            [new Fraction(2, 3), new Fraction(1, 3), new Fraction(1, 3)],
            [new Fraction(1, 3), new Fraction(4, 6), new Fraction(1, -3)],
            [new Fraction(0, 1), new Fraction(1, 1), new Fraction(-1, 1)]
        ];

        const test = (fr1: Fraction, fr2: Fraction, expectedResult: Fraction) => {
            it(`should return ${expectedResult} when called ${fr1} - ${fr2}`, function () {
                var actualResult = operations.subtractFractions(fr1, fr2);
                assert.equal(JSON.stringify(actualResult), JSON.stringify(expectedResult), `Result for ${fr1} + ${fr2} was ${actualResult}`);
            })
        };

        data.forEach(val => {
            test(val[0], val[1], val[2]);
        })
    })
    describe('multiplication', function () {
        var data = [
            [new Fraction(0, 1), new Fraction(1, 1), new Fraction(0, 1)],
            [new Fraction(2, 3), new Fraction(1, 3), new Fraction(2, 9)],
            [new Fraction(-2, 4), new Fraction(4, 5), new Fraction(-2, 5)],
            [new Fraction(-2, 4), new Fraction(4, -5), new Fraction(2, 5)]
        ];

        const test = (fr1: Fraction, fr2: Fraction, expectedResult: Fraction) => {
            it(`should return ${expectedResult} when called ${fr1} x ${fr2}`, function () {
                var actualResult = operations.multiplyFractions(fr1, fr2);
                assert.equal(JSON.stringify(actualResult), JSON.stringify(expectedResult), `Result for ${fr1} + ${fr2} was ${actualResult}`);
            })
        };

        data.forEach(val => {
            test(val[0], val[1], val[2]);
        })
    })
    describe('division', function () {
        var data = [
            [new Fraction(0, 1), new Fraction(1, 1), new Fraction(0, 1)],
            [new Fraction(2, 3), new Fraction(1, 3), new Fraction(2, 1)],
            [new Fraction(-2, 4), new Fraction(4, 5), new Fraction(-5, 8)],
            [new Fraction(-2, 4), new Fraction(4, -5), new Fraction(5, 8)]
        ];

        const test = (fr1: Fraction, fr2: Fraction, expectedResult: Fraction) => {
            it(`should return ${expectedResult} when called ${fr1} / ${fr2}`, function () {
                var actualResult = operations.divideFractions(fr1, fr2);
                assert.equal(JSON.stringify(actualResult), JSON.stringify(expectedResult), `Result for ${fr1} + ${fr2} was ${actualResult}`);
            })
        };

        data.forEach(val => {
            test(val[0], val[1], val[2]);
        })
    })
    describe('simplify fraction', function () {
        var data = [
            [new Fraction(2, 4), new Fraction(1, 2)],
            [new Fraction(0, 1), new Fraction(0, 1)],
            [new Fraction(1, 1), new Fraction(1, 1)],
            [new Fraction(8, 2), new Fraction(4, 1)],
        ];

        const test = (fr: Fraction, expectedResult: Fraction) => {
            it(`should return ${expectedResult} when called ${fr}`, function () {
                var actualResult = fr.simplifyFraction();
                assert.equal(JSON.stringify(actualResult), JSON.stringify(expectedResult), `Result for ${fr} was ${actualResult}`);
            })
        };

        data.forEach(val => {
            test(val[0], val[1]);
        })
    })
})