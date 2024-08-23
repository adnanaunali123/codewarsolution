// Description:
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// N	Product	N factorial	Trailing zeros
// 6	1*2*3*4*5*6	720	1
// 12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2



function zeros(n) {
    let factorial = 1n;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * BigInt(i);
    }
    factorial = factorial.toString();
    let factLength = factorial.length - 1

    while (factorial[factLength] == 0) {

        count++
        factLength--

    }
    return count;
}

console.log(zeros(30));