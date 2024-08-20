// Description:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]




var uniqueInOrder = function (iterable) {
    let newArray = [];
    newArray[0] = iterable[0]

    let fArray = [];
    fArray[0] = iterable[0]
    let j = 0;
    for (let i = 0; i < iterable.length; i++) {
        newArray[i] = iterable[i];
    }

    for (let i = 1; i < iterable.length; i++) {
        if (newArray[j] != iterable[i]) {
            fArray.push(iterable[i]);


        }
        j++;

    }



    return fArray
}
let a = [1, 2, 2, 3, 3]
console.log(uniqueInOrder('AAAABBBCCDAABBB'))

















