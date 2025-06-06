/*Level : 3/5 => Good to solve again

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    function helper(nums) {
        let rob1 = 0;
        let rob2 = 0;

        for (let i = 0; i < nums.length; i++) {
            let temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }

    return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1)));

};