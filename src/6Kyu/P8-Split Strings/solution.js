// Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
    let newArray = str.split("")
    arrayLength = newArray.length

    let resultArray = [];

    if (arrayLength % 2 != 0) {
        newArray.push('_')
    }

    for (let i = 0; i < arrayLength / 2; i++) {

        resultArray[i] = newArray.splice(0, 2).join('')

    }
    return resultArray
}
console.log(solution('abcdef'));