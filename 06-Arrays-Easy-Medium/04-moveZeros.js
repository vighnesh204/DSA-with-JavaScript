/**
 * leetcode 283: Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * input: nums = [0,1,0,3,12]
 * output: [1,3,12,0,0]
 * 
 * input: nums = [0]
 * output: [0]
 */

const moveZeros = (nums) => {
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[x] = nums[i];
            x++;
        }
    }
    // fill all the remaining elements with zero
    for(let i = x; i < nums.length; i++){
        nums[i] = 0;
    };
    return nums;
}
let nums = [ 0, 1, 0, 3, 12];
console.log(moveZeros(nums));