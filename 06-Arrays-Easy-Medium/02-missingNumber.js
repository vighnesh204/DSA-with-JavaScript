/**
 * leetcode problem # 268: Missing Number
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * input: nums = [3,0,1]
 * output: 2
 * 
 * input: nums = [0,1]
 * output: 2
 */

const singleNumber = (nums) => {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    
    let partialSum = 0;
    for (let i = 0; i < nums.length; i++) {
       partialSum = partialSum + nums[i];
    
        
    }
    return totalSum - partialSum;
}

let nums = [4, 0, 2, 1, 5];
const result = singleNumber(nums);
console.log(result);

// const singleNumber = (nums) => {
//     nums.sort((a, b) => a - b );

//     for (let i = 0; i < nums.length; i++) {
//        if(nums[i] !== i){
//         return i;
//        }
  
//     }

//     return nums.length;  
// }


// const singleNumber = (nums) => {
//     let n = nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < n) {
//             nums[nums[i]] = nums[nums[i]] + n;
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < n) {
//             return i;
//         }
//     }
// };
