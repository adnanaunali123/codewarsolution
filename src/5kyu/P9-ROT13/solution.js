function rot13(str) {
    str = str.split('')
    let newArray = [];
    let asciiCode;
    // String.fromCharCode(codes);

    for (let i = 0; i < str.length; i++) {
        asciiCode = 0;
        if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) {
            asciiCode = str[i].charCodeAt(0);
            asciiCode = asciiCode + 13;

            if (asciiCode > 90) {
                sub = asciiCode - 90;
                asciiCode = 64 + sub;
                newAlpha = String.fromCharCode(asciiCode);
                newArray[i] = newAlpha;

            }
            else {
                newAlpha = String.fromCharCode(asciiCode);
                newArray[i] = newAlpha;
            }


        }
        else if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
            asciiCode = str[i].charCodeAt(0);
            asciiCode = asciiCode + 13;

            if (asciiCode > 122) {
                sub = asciiCode - 122;
                asciiCode = 96 + sub;
                newAlpha = String.fromCharCode(asciiCode);
                newArray[i] = newAlpha;

            }
            else {
                newAlpha = String.fromCharCode(asciiCode);
                newArray[i] = newAlpha;
            }



        }
        else {
            newArray[i] = str[i];
        }






    }
    return newArray.join('')

}

console.log(rot13('EBG13 rknzcyr.'));