/**
 * leetcode 136. Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * input: nums = [4,1,2,1,2]
 * output: 4
 */

// second approach => using bitwise XOR operator

const singleNumber = (nums) => {
  let xor = 0;
  for(let i = 0; i < nums.length; i++){
    xor = xor ^ nums[i];
  }
  return xor;
}

// first approach =>
// const singleNumber = (nums) => {
//     let hash = {};
//     for (let i = 0; i < nums.length; i++) {
//        if(!hash[nums[i]]){
//          hash[nums[i]] = 1;
//        }else{
//         hash[nums[i]] ++;
//        }
       
//     }
//      for (let i = 0; i < nums.length; i++) {
//         if ( hash[nums[i]] == 1) {
//           return nums[i]  
//         }
//      }
    
// }

// in this approach we are using hash table to store the count of each number and then we are checking which number has count 1 and returning that number. This approach has time complexity O(n) and space complexity O(n).


const nums = [4,1,2,1,2];
console.log(singleNumber(nums));