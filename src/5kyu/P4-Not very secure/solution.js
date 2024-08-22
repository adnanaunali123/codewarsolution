// Description:
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
    let length = string.length;
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if ((string[i].charCodeAt(0) >= 33 && string[i].charCodeAt(0) <= 47) || (string[i].charCodeAt(0) >= 58 && string[i].charCodeAt(0) <= 64) || (string[i].charCodeAt(0) >= 91 && string[i].charCodeAt(0) <= 96) || (string[i].charCodeAt(0) >= 123 && string[i].charCodeAt(0) <= 126)) {
            return false
        }
        else if (string[i].charCodeAt(0) == 32) {
            return false
        }

    }

    if (!string) {
        return false;
    }
    else {
        return true;
    }
}
console.log(alphanumeric("hello world_"))












