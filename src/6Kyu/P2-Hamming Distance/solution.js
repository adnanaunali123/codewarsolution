// Description:
// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2




function hamming(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == str2[i]) {
            continue;

        }
        else {
            count = count + 1;

        }
    }
    return count;
}
a = "I like turtles"
b = "I like turkeys"
console.log(hamming(a, b));












