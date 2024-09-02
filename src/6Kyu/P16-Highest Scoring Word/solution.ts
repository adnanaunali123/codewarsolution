function high(x: string): string {
    let alphaArr = x.split(" ");
    let alpha = x.toUpperCase();
    let numArray = [];
    let sum = 0;
    let arr = [];
    let newArray = alpha.split(" ");
    for (let i = 0; i < newArray.length; i++) {
        sum = 0;
        for (let j = 0; j < newArray[i].length; j++) {
            switch (newArray[i][j]) {
                case "A":
                    sum += 1;
                    break;
                case "B":
                    sum += 2;
                    break;
                case "C":
                    sum += 3;
                    break;
                case "D":
                    sum += 4;
                    break;
                case "E":
                    sum += 5;
                    break;
                case "F":
                    sum += 6;
                    break;
                case "G":
                    sum += 7;
                    break;
                case "H":
                    sum += 8;
                    break;
                case "I":
                    sum += 9;
                    break;
                case "J":
                    sum += 10;
                    break;
                case "K":
                    sum += 11;
                    break;
                case "L":
                    sum += 12;
                    break;
                case "M":
                    sum += 13;
                    break;
                case "N":
                    sum += 14;
                    break;
                case "O":
                    sum += 15;
                    break;
                case "P":
                    sum += 16;
                    break;
                case "Q":
                    sum += 17;
                    break;
                case "R":
                    sum += 18;
                    break;
                case "S":
                    sum += 19;
                    break;
                case "T":
                    sum += 20;
                    break;
                case "U":
                    sum += 21;
                    break;
                case "V":
                    sum += 22;
                    break;
                case "W":
                    sum += 23;
                    break;
                case "X":
                    sum += 24;
                    break;
                case "Y":
                    sum += 25;
                    break;
                case "Z":
                    sum += 26;
                    break;

                default:
                    break;
            }

            numArray[i] = sum;
        }
    }

    arr = [...numArray];
    let check = 0;
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    let position = arr[arr.length - 1];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] == position) {
            check = i;
            break;
        }
    }

    return alphaArr[check];
}

console.log(high("what is"));