// Description:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


function alphabetPosition(text) {
    text = text.toUpperCase()
    let numArray = [];
    for (let i = 0; i < text.length; i++) {

        switch (text[i]) {
            case 'A':
                numArray[i] = '1'
                break;
            case 'B':
                numArray[i] = '2'
                break;
            case 'C':
                numArray[i] = '3'
                break;
            case 'D':
                numArray[i] = '4'
                break;
            case 'E':
                numArray[i] = '5'
                break;
            case 'F':
                numArray[i] = '6'
                break;
            case 'G':
                numArray[i] = '7'
                break;
            case 'H':
                numArray[i] = '8'
                break;
            case 'I':
                numArray[i] = '9'
                break;
            case 'J':
                numArray[i] = '10'
                break;
            case 'K':
                numArray[i] = '11'
                break;
            case 'L':
                numArray[i] = '12'
                break;
            case 'M':
                numArray[i] = '13'
                break;
            case 'N':
                numArray[i] = '14'
                break;
            case 'O':
                numArray[i] = '15'
                break;
            case 'P':
                numArray[i] = '16'
                break;
            case 'Q':
                numArray[i] = '17'
                break;
            case 'R':
                numArray[i] = '18'
                break;
            case 'S':
                numArray[i] = '19'
                break;
            case 'T':
                numArray[i] = '20'
                break;
            case 'U':
                numArray[i] = '21'
                break;
            case 'V':
                numArray[i] = '22'
                break;
            case 'W':
                numArray[i] = '23'
                break;
            case 'X':
                numArray[i] = '24'
                break;
            case 'Y':
                numArray[i] = '25'
                break;
            case 'Z':
                numArray[i] = '26'
                break;

            case ' ':
                numArray[i] = '.'
                break;

            default:
                numArray[i] = ';;'
                break;
        }
    }

    let length = numArray.length;
    for (let i = 0; i < length; i++) {
        if (numArray[i] === '.') {
            numArray.splice(i, 1)
        }

    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (numArray[j] === ';;') {
                numArray.splice(j, 1)
            }

        }
    }

    numArray = numArray.join(' ')



    return numArray;
}












