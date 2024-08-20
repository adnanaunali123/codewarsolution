// Description:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words) {
    let myArray = words.split(" ");
    // let newArray=myArray[0].split("");
    let finalArray = [];
    let i = 0;


    for (let i = 0; i < myArray.length; i++) {
        newArray = myArray[i].split("");
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] == '1') {
                finalArray[0] = myArray[i];
            }
            else if (newArray[j] == '2') {
                finalArray[1] = myArray[i];
            }
            else if (newArray[j] == '3') {
                finalArray[2] = myArray[i];
            }
            else if (newArray[j] == '4') {
                finalArray[3] = myArray[i];
            }
            else if (newArray[j] == '5') {
                finalArray[4] = myArray[i];
            }
            else if (newArray[j] == '6') {
                finalArray[5] = myArray[i];
            }
            else if (newArray[j] == '7') {
                finalArray[6] = myArray[i];
            }
            else if (newArray[j] == '8') {
                finalArray[7] = myArray[i];
            }
            else if (newArray[j] == '9') {
                finalArray[8] = myArray[i];
            }



        }



    }
    finalArray = finalArray.join(' ')
    return finalArray
}


console.log(order("is2 Thi1s T4est 3a"));

















