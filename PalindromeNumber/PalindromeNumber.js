/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    const length = x.toString().length;
    if (length <= 1) return true;
    for (let i = 0; i <= length / 2 - 1; i++) {
        if (x.toString()[i] !== x.toString()[length - i - 1]) return false;
    }
    return true;
};
