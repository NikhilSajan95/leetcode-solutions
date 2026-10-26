/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let letters = [];
    let digits = [];

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            digits.push(char);
        } else {
            letters.push(char);
        }
    }

    if (Math.abs(letters.length - digits.length) > 1) {
        return "";
    }

    let result = "";
    let i = 0;
    let j = 0;

    let letterFirst = letters.length >= digits.length;

    while (i < letters.length || j < digits.length) {
        if (letterFirst) {
            if (i < letters.length) result += letters[i++];
            if (j < digits.length) result += digits[j++];
        } else {
            if (j < digits.length) result += digits[j++];
            if (i < letters.length) result += letters[i++];
        }
    }

    return result;
};