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
})