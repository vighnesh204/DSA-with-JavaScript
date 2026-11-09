/**
 * LeetCode #26: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 *
 * Given an integer array nums sorted in non-decreasing order, remove the
 * duplicates in-place so that each unique element appears only once.
 * Keep the relative order of the elements the same.
 *
 * Let k be the number of unique elements in nums. Your function must:
 *   1. Modify nums so that its first k elements contain the unique values
 *      in their original order.
 *   2. Return k.
 *
 * The elements after the first k positions do not matter. You do not need
 * to change the length of the array.
 *
 * Example 1:
 *   Input:  nums = [1, 1, 2]
 *   Output: 2, nums = [1, 2, _]
 *
 *   Explanation:
 *   Return k = 2. The first two elements of nums must be 1 and 2.
 *   The value at the remaining position does not matter.
 *
 * Example 2:
 *   Input:  nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 *   Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 *
 *   Explanation:
 *   Return k = 5. The first five elements must be 0, 1, 2, 3, and 4.
 *   The values at the remaining positions do not matter.
 *
 * Note: An underscore (_) represents a value that is not checked.
 */

const removeDuplicates = (nums) => {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    return x+1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);

console.log(k); 