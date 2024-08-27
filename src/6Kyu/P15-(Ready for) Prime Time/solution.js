// Description:
// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

function prime(num) {
    let numArray = [];
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count = 0;
        for (let j = 2; j <= num; j++) {
            
                if (i % j == 0) {
                    count++;
                }
            
        }
        if (count == 1) {
            numArray.push(i);
        }
    }

    return numArray
}