Description:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    string = string.split('');
    newArray = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].codePointAt(0) > 64 && string[i].codePointAt(0) < 91) {
            newArray += ' ';
            newArray += string[i];
        }
        else {
            newArray += string[i];
        }

    }

    return newArray



}

console.log(solution('camelCasing'))