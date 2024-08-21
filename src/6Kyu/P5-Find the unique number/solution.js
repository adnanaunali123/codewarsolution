// Description:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55


function findUniq(arr) {
    let count = 0;
    let newChar;
    console.log(count + arr.length)
    for (let i = 0; i < arr.length; i++) {
        count = 0
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] != arr[j]) {
                count++;
                newChar = arr[j];
            }
        }

        if (count >= 1 && count < arr.length - 1) {

            return newChar;
        }
        else
            return arr[i]
    }
}

console.log(findUniq([0, 0, 0.55, 0, 0]));
