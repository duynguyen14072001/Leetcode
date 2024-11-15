/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = -(2 ** 31);
    const max = (2 ** 31) - 1;
    if(x <= min || x >= max) return 0
    const a = x.toString()
    let res;
    if(a[0]!=='-'){
        res =  +(a.split('').reverse().join(''))
    }
    else{
        res = +(-a.slice(1, a.length+1).split('').reverse().join(''))
    }
    if(res <= min || res >= max) return 0
    return res
};
