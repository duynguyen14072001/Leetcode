var twoSum = function (nums, target) {
    let c = [];
    nums.forEach((i, index) => {
        const a = target - i;
        const b = nums.indexOf(a, index + 1);
        if (b > -1) return c = [b, index];
    });
    return c
};
