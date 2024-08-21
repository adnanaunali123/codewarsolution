// Description:
// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"



function onlyDuplicates(str) {
    let newArray = [];
    for (let i = 0; i < str.length; i++) {
        for (j = 0; j < str.length; j++) {
            if (i != j) {
                if (str[i] == str[j]) {
                    newArray += str[i]

                    break;
                }
            }
        }

    }
    return newArray;
}
console.log(onlyDuplicates('abccdefee'));