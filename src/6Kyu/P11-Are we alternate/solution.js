// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
// // true

function isAlt(word) {
    const arr = ['a', 'e', 'i', 'o', 'u']
    let flag = 0;
    for (i = 0; i < word.length - 1; i++) {
        if (arr.includes(word[i]) && !arr.includes(word[i + 1])) {
            continue
        }
        else if (!arr.includes(word[i]) && arr.includes(word[i + 1])) {
            continue
        }
        else { return false }

    }

    return true;
}