/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let c = '';
    let length = 0;
    const b = s.slice('');
    for (i = 0; i <= b.length - 1; i++) {
        if (c.indexOf(b[i]) === -1) {
            c = c.concat(b[i]);
            length = length > c.length ? length : c.length;
        } else {
            c = c.slice(c.indexOf(b[i]) + 1, c.length).concat(b[i]);
        }
    }
    return length;
};
