Description:
// Digitwise Addition
// Digitwise addition is a special kind of addition where instead of adding 1 normally to the number, it adds 1 to every digit of that number. If the digit is a 9, we replace it with a 10 without carrying over to the next digit.

// Examples
// 123 -> 234
// 910 -> 1021
// 789 -> 8910
// Task
// Program a function that takes two numbers, n and k, and outputs the number of digits in n after applying Digitwise addition k times. Since the answer can be very large, return the answer modulo 1_000_000_007.

// Your solution is expected to be O(klogn).

// Examples
// (9812, 2) -> 6
// # Explanation:
// # 9812 -> 10923 -> 211034 -> 6 digits

// (9899, 3) -> 8
// # Explanation:
// # 9899 -> 1091010 -> 21102121 -> 32213232 -> 8 digits


function digitwiseAddition(N, K) {
    N = N.toString().split("").map(Number);
    let arrLength = N.length;
    let newArray = N;
    for (let i = 0; i < K; i++) {
      for (let j = 0; j < arrLength; j++) {
        newArray[j] = newArray[j] + 1;
      }
  
      newArray = newArray.join("");
  
      newArray = newArray.toString().split("").map(Number);
      arrLength = newArray.length;
    }
  
    return newArray.length;
  }

