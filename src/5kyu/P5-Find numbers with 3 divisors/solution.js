Description:
// Your task is to write a function that takes two integers n and m, and returns a sorted array of all integers from n to m inclusive, which have exactly 3 divisors (excluding 1 and the number itself).

// Example:
// solution(2, 20) -> [16]


function solution(n, m) {
    const newN = Number(n);
    const newM = Number(m);
    let count = 0;
    let newArray = [];
    for (let i = newN; i <= newM; i++) {
        count = 0;
        for (let j = 2; j <= newM; j++) {
            if (i != j) {
                if (i % j == 0) {
                    count++;

                }
            }
            else {
                continue
            }
        }
        if (count == 3) {
            newArray.push(BigInt(i));
        }


    }


    return newArray;
}


console.log(solution(10000n, 100000n));