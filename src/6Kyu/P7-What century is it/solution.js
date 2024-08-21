// Description:
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"



function whatCentury(year) {
    let century = 0;
    let newArray = year.split("")
    let firstTwo = newArray.splice(0, 2).join('')
    let lastTwo = newArray.splice(0, 2).join('')
    firstTwo = parseInt(firstTwo);
    lastTwo = parseInt(lastTwo)
    if (lastTwo == 0) {
        century = firstTwo;

    }
    else {
        century = firstTwo + 1

    }

    if (century <= 20) {

        return century.toString() + "th"
    }
    else if (century % 10 == 1) {
        return century.toString() + "st"
    }

    else if (century % 10 == 2) {
        return century.toString() + "nd"
    }
    else if (century % 10 == 3) {
        return century.toString() + "rd"
    }



}

console.log(whatCentury("2154"))
