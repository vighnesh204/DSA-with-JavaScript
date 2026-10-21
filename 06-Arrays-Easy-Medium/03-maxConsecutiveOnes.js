/**
 * leetcode 485: Max Consecutive Ones
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * input: nums = [1,1,0,1,1,1]
 * output: 3
 * 
 * input: nums = [1,0,1,1,0,1]
 * output: 2
 */

const findMaxConsecutiveOnes = (nums) => {
  let currCount = 0;
  let maxCount = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] == 1){
        currCount++;
    }
    else{
        maxCount = Math.max(currCount, maxCount);
        currCount = 0;
    }
  }
  return Math.max(currCount, maxCount);
}

let nums = [1, 1, 0, 1, 1, 1];
let result = findMaxConsecutiveOnes(nums);
console.log(result);