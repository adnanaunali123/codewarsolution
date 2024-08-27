// Description:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100


function incrementString(strng) {
    let location;
    let alphaArray = [];
    let numberArray = [];
    let lengthOfNumberArray = 0;
    let lastDigit = 0;
    let count = 0;
    let number;
    let diffInLength;
    let zeroArray = [];

    for (let i = strng.length - 1; i >= 0; i--) {
        if (
            (strng.charCodeAt(i) >= 97 && strng.charCodeAt(i) <= 122) ||
            (strng.charCodeAt(i) >= 65 && strng.charCodeAt(i) <= 90)
        ) {
            location = i;
            count++;
            break;
        }
    }

    if (count > 0) {
        for (let i = 0; i <= location; i++) {
            alphaArray.push(strng[i]);
        }

        alphaArray = alphaArray.join("");
    }
    if (count <= 0) {
        numberArray = strng;
        numberArray = numberArray.split("");
    } else {
        for (let i = location + 1; i < strng.length; i++) {
            numberArray.push(strng[i]);
        }
    }

    lengthOfNumberArray = numberArray.length;

    lastDigit = numberArray[numberArray.length - 1];
    number = numberArray.join("");
    number = Number(number);

    number = number + 1;
    number = number.toString();
    if (lengthOfNumberArray == number.length) {
        return alphaArray + number;
    } else {
        diffInLength = lengthOfNumberArray - number.length;
        for (let i = 0; i < diffInLength; i++) {
            zeroArray.push("0");
        }
        zeroArray = zeroArray.join("");
        return alphaArray + zeroArray + number;
    }
}