function findLCM(num1, num2) {
    let gcd = findGCD(num1, num2);

    return (num1 * num2) / gcd;
}
function findGCD(num1, num2) {
    if (num2 === 0) {
        return num1;
    }

    return findGCD(num2, num1 % num2);
}

export function addFractions(fr1, fr2) {
    let num1 = parseInt(fr1.numerator);
    let num2 = parseInt(fr2.numerator);
    let denom1 = parseInt(fr1.denominator);
    let denom2 = parseInt(fr2.denominator);
    let lcm = findLCM(denom1, denom2);
    if (denom1 === denom2) {
        let gcd = findGCD(num1 + num2, denom1);
        return { "numerator": (num1 + num2)/gcd, "denominator": denom1/gcd };
    }
    let gcd = findGCD(num, lcm);
    let num = (num1 * (lcm / denom1)) + (num2 * (lcm / denom2))
    return { "numerator": num/gcd, "denominator": lcm/gcd };
}

export function multiplyFractions(fr1, fr2) {
    let num1 = parseInt(fr1.numerator);
    let num2 = parseInt(fr2.numerator);
    let denom1 = parseInt(fr1.denominator);
    let denom2 = parseInt(fr2.denominator);
    let gcd = findGCD(num1*num2, denom1*denom2);
    return { "numerator": (num1*num2)/gcd, "denominator": (denom1*denom2)/gcd };
}