function zero(arg) {
    if (!arg) {
        return 0
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 0
            return num
        }
        else if (ope == '-') {
            num = 0 - num
            return num
        }
        else if (ope == '/') {
            num = 0 / num
            return num
        }
        else if (ope == '*') {
            num = 0 * num
            return num
        }
    }


}

function one(arg) {
    if (!arg) {
        return 1
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 1
            return num
        }
        else if (ope == '-') {
            num = 1 - num
            return num
        }
        else if (ope == '/') {
            num = 1 / num
            return num
        }
        else if (ope == '*') {
            num = 1 * num
            return num
        }
    }


}




function two(arg) {
    if (!arg) {
        return 2
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 2
            return num
        }
        else if (ope == '-') {
            num = 2 - num
            return num
        }
        else if (ope == '/') {
            num = 2 / num
            return num
        }
        else if (ope == '*') {
            num = 2 * num
            return num
        }
    }


}



function three(arg) {
    if (!arg) {
        return 3
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 3
            return num
        }
        else if (ope == '-') {
            num = 3 - num
            return num
        }
        else if (ope == '/') {
            num = 3 / num
            return num
        }
        else if (ope == '*') {
            num = 3 * num
            return num
        }
    }


}







function four(arg) {
    if (!arg) {
        return 4
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 4
            return num
        }
        else if (ope == '-') {
            num = 4 - num
            return num
        }
        else if (ope == '/') {
            num = 4 / num
            return num
        }
        else if (ope == '*') {
            num = 4 * num
            return num
        }
    }


}




function five(arg) {
    if (!arg) {
        return 5
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 5
            return num
        }
        else if (ope == '-') {
            num = 5 - num
            return num
        }
        else if (ope == '/') {
            num = 5 / num
            return num
        }
        else if (ope == '*') {
            num = 5 * num
            return num
        }
    }


}







function six(arg) {
    if (!arg) {
        return 6
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 6
            return num
        }
        else if (ope == '-') {
            num = 6 - num
            return num
        }
        else if (ope == '/') {
            num = 6 / num
            return num
        }
        else if (ope == '*') {
            num = 6 * num
            return num
        }
    }


}


function seven(arg) {
    if (!arg) {
        return 7
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 7
            return num
        }
        else if (ope == '-') {
            num = 7 - num
            return num
        }
        else if (ope == '/') {
            num = 7 / num
            return num
        }
        else if (ope == '*') {
            num = 7 * num
            return num
        }
    }



}

function eight(arg) {
    if (!arg) {
        return 8
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 8
            return num
        }
        else if (ope == '-') {
            num = 8 - num
            return num
        }
        else if (ope == '/') {
            num = 8 / num
            return num
        }
        else if (ope == '*') {
            num = 8 * num
            return num
        }
    }


}

function nine(arg) {
    if (!arg) {
        return 9
    }
    else {
        let newArray = arg.split('')
        let ope = newArray.splice(0, 1)
        let num = newArray.splice(0, 1)
        num = Number(num)
        if (ope == '+') {
            num = num + 9
            return num
        }
        else if (ope == '-') {
            num = 9 - num
            return num
        }
        else if (ope == '/') {
            num = 9 / num
            return num
        }
        else if (ope == '*') {
            num = 9 * num
            return num
        }
    }


}






function times(arg) {
    let str = "*" + arg
    return str
}


function plus(arg) {
    let str = "+" + arg
    return str
}
function minus(arg) {
    let str = "-" + arg
    return str
}

function dividedBy(arg) {
    let str = "/" + arg
    return str
}

six(dividedBy(two()));

